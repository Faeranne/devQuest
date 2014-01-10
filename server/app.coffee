express = require "express"
app = express()

app.use express.static __dirname+'/client'
app.use require('coffeeserve').middleware __dirname+'/coffee'

app.listen process.env.PORT || 3000
