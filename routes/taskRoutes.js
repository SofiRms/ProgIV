const routertask=require("express").Router();
const{
    gettask,
    puttask,
    posttask,
    deletetask
    }
    =require('../controllers/tarea');
    
    routertask.get('/task',gettask);
    routertask.delete('/delete',deletetask);
    routertask.put('/put',puttask);
    routertask.post('/post',posttask);
    
    module.exports=routertask;