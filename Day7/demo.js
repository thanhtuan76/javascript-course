var mysql = require('mysql')

var conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'thanhTuan6799.',
  database: 'tuan'
})

conn.connect(err => {
  if (err)
    throw err

  conn.query("SELECT * FROM phone", (err, data) => {
    if (err)
      throw err

    data.forEach(p => {
      console.info(`${p.name} - ${p.price}`)
    })
  })
  
  console.log('connected')
})