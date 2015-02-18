express = require 'express.io'
app = express()
app.http().io()

app.use express.static path.join process.cwd(), 'build/client'
app.use express.static path.join process.cwd(), 'public'

app.listen(3000)
