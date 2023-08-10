const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongodb = require('./database/connection')
const taskRoutes = require('./routes/taskRoutes');

const PORT = 4000
const app = express()

app.use(cors({
    origin: 'https://localhost:4000'
}))
app.use(express.json())
app.use(taskRoutes);
app.use(cors({
    origin: 'https://localhost:4000'
}))
app.use(morgan('combined'))


//conexión DB
mongodb();

app.listen(PORT, () => 
    console.log(`listen on port ${PORT}`
))

