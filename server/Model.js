import {model,Schema} from 'mongose';

const TaskSchema = new Schema({
    description:{
        isActive: true,
        type: String,
        required: true,
    }
},{
    timestamps: true 
});

export const TaskModel = model('Task', TaskSchema)