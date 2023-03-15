require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const bodyParser = require('body-parser')
const users = require('./router/userRouter')

app.use(bodyParser.json())
app.use('/api/users', users)
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

