var url = require('url')
var p = "http://localhost:8000/t.html?year=2020&month=8"
var u = url.parse(p, true)

console.info(u.hostname)
console.info(u.pathname)
console.info(u.search) // Tim kiem sau dau ?
console.info(u.query.year) 
console.info(u.query.month)

