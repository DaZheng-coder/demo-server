const express = require("express")
// const history = require('connect-history-api-fallback')

const app = express()

app.set('secret', 'i2u34y12oi3u4y8')

// app.use(history())
app.use(require('cors')())
app.use(express.json())
app.use('/', express.static(__dirname + '/test1'))
app.use('/test1', express.static(__dirname + '/test1'))
app.use('/test2', express.static(__dirname + '/test2'))

// 解决跨域 
// app.all('*', function(req, res, next) {
//   if (req.headers.origin == 'http://localhost:3001') {
//     res.header("Access-Control-Allow-Origin", req.headers.origin); 
//     res.header("Access-Control-Allow-Methods", "POST, GET"); 
//     res.header("Access-Control-Allow-Headers", "X-Requested-With"); 
//     res.header("Access-Control-Allow-Headers", "Content-Type"); 
//   }
//   next()
// })

// require('./plugins/db')(app)

app.listen(3002, () => {
  console.log('http://localhost:3002');
});