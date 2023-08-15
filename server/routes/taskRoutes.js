const routertask = require("express").Router();
const {
    getTasks,
    putTasks,
    postTasks,
    deleteTasks } = require('../controllers/tarea.js');


routertask.get('/get', getTasks);
routertask.delete('/delete/:id', deleteTasks);
routertask.put('/put/:id', putTasks);
routertask.post('/post', postTasks);

module.exports = routertask;