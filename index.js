const express = require('express')
require('./services/passport')


const app = express()
require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5001
console.log('👉 PORT:', PORT)
app.listen(PORT)
