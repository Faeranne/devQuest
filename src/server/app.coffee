express = require 'express.io'
path = require 'path'
app = express()
app.http().io()

app.use express.static path.join process.cwd(), 'build/client'
app.use express.static path.join process.cwd(), 'public'

console.log 'launching on port 3000'
app.listen(3000)
