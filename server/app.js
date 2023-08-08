import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { connectDB } from './server/task/src/db.js';
import { TaskRouter } from './server/task/src/task.routes.js';

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(/api/task, require('post'))


app.listen(4000, () => {
    console.log('escuchando en 4000')
    connectDB({uri: 'mongodb://localhost:27017'});
});