import {model,Schema} from 'mongose';

const TaskSchema = new Schema({
    description:{
        type: String,
        required: true,
    },
    completed:{
        type: Boolean,
        default: false,
        required: true
    },
},  {
    timestamps: true   
});

export const TaskModel = model('Task', TaskSchema)