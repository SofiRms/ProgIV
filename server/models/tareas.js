const { model, Schema } = require('mongoose');

const taskSchema= new Schema({
    description:{
        type: String,
        required:true,
        default:true
    },
    status:{
        type: String,
        required: true
    }
})

module.exports=model('taks',taskSchema)
