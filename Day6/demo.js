var http = require('http')
var fs = require('fs')

const { resolveSoa } = require('dns')
 http.createServer(function(req, res){
  //  res.writeHead(200, {
  //    'Content-Type': 'text/plain'
  //  })
  //  res.write("HELLO WORLD\n");
  //  res.write("TESTING");
  //  res.end();
  // fs.readFile('index.html', function(err, data){
  //   if (err)
  //     throw err

  //   res.writeHead(200, {
  //     'Content-Type': 'text/html'
  //   })

  //   data.write(data);
  //   return data.end();
  // })
 }).listen(8000)

 console.info("http://127.0.0.1:8000/")