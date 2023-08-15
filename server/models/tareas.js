const { model, Schema } = require('mongoose');

const taskSchema= new Schema({
    description:{
        type: String,
        required:true,
        default:true
    },
    estado:{
        type: String,
        default: 'pendiente',
        required: true
    }
})

module.exports=model('taks',taskSchema)
