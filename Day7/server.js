var express = require('express')
var app = express()
var port = 8000
var mysql = require('mysql')

mysql.createConnection({
  'host': 'localhost',
  'user': 'root',
  'password': 'thanhTuan6799.',
  'database': 'QuestionBank'
})

conn.connect()

app.listen(port, function() {
  console.info(`http://127.0.0.1:${port}`)
})

app.get('/question', function() {
  conn.connect(err => {
    if (err)
      throw err

    conn.query("SELECT * FROM question", (err, data) => {
      console.info(data)

      res.send(JSON.stringify(data))
    })
  })
})

app.get("/question/:id", function (req, res) {
  conn.query("SELECT * FROM choice WHERE question_id=?", [req.params.id], function(err, data) {
    if (err)
      throw err

    res.send(JSON.stringify(data))
  })
})

app.get("/", (req, res) => {
  res.sendFile(__dirname + '/question.html')
})

app.get('/check-answer', function(req, res) {
  conn.query("SELECT * FROM choice WHERE id=?", [req.params.choiceId], function(err, data) {
    if (err)
      throw

    var d = data[0]
    res.send(JSON.stringify({correct: d.is_correct}))
  })
})