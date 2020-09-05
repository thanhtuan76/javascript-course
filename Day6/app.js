var http = require('http')
var fs = require('fs')
var url = require('url')

var renderHTML = function (req, res, path = 'index.html') {
  fs.readFile(path, function (err, data) {
    if (err)
      throw err

    res.writeHead(200, {
      'Content-Type': 'text/html'
    })

    res.write(data)
    res.end()
  })
}

var readQuestion = function(req, res) {
  fs.readFile('question.txt', function(err, data) {
    if (err)
      throw err

    var path = url.parse(req.url, true)
    if(path.query.keyword)
      data = data.filter(q => q.content.toLowerCase().indexOf(path.query.keyword))
    

    res.writeHead(200, {
      'Content-Type': 'application/json'
    })
    res.write(JSON.stringify(data))
    res.end()
  })
}

http.createServer(function (req, res) {
  // renderHTML(req, res);
  var path = url.parse(req.url, true)
  switch (path.pathname) {
    case '/':
      renderHTML(req, res)
      break
    case '/questions':
      renderHTML(req, res, 'questions.html')
      break
    case '/api/questions':
      if (req.method == "GET"){
        readQuestion(req, res)
      } else if (req.method == "POST"){
        addQuestion(req, res)
      }
      break
  }

  renderHTML(req, res)
}).listen(8000)