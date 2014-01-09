express = require "express"
app = express()
build = require "./lib/build"

app.use express.static __dirname+'/client'
app.use build.coffee __dirname+'/coffee'

app.listen process.env.PORT || 8080
