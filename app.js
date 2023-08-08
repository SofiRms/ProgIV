const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongodb = require('./database/connection')

const PORT = 4000
const app = express()
const taskRoutes = require('./routes/taskRoutes');

app.use(taskRoutes);
app.use(cors())
app.use(morgan('combined'))
app.use(express.json())

//conexión DB
mongodb();

app.listen(PORT, () => 
    console.log(`listen on port ${PORT}`
))

