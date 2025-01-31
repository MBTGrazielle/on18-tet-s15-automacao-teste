
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const colaboradorasRoutes = require('./routes/colaboradorasRoutes')
const db = require('../src/config/mongoConnect')


const app = express()

db.connect()

app.use(express.json())
app.use(cors())

app.use('/colaboradoras', colaboradorasRoutes)

module.exports = app