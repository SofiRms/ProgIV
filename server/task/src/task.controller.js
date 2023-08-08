import { TaskModel } from "./Model";

async function getTask (req, res) {
    try {
        const task = await TaskModel.find();
        res.status(200).json(task);

    } catch(error){
        res.status(500).json({error: error.message});
    }
}

async function postTask (req, res) {
    const {description} = req.body;

    try{
        const newTask = new TaskModel({
            description
        });

        await newTask.save()

        res.status(201),json(newTask)
    } catch(error){
        res.status(500).json({ error: error.message });
    }
}

async function toggleCompletedTask (req, res) {
//guardar id
    const taskId = req.params.id;
    try{
        //buscar elemento mediante id
        await TaskModel.findbyTaskId(taskId, { completed: !currentTask.completed }, {new: true});

    res.status(203).json(newTask)
    } catch(error){
        res.status(500).json({ error: error.message });
    }
}

export {getTask, postTask, toggleCompletedTask}