const Tasks = require("../models/tareas");

const ctrlTasks = {};

// Controlador para consultar las tareas
ctrlTasks.getTasks = async (req, res) => {
        try {
            const task = await Tasks.find();
            res.status(200).json(task);
    
        } catch(error){
            res.status(500).json({error: error.message});
        }
};

// Controlador para crear una nueva tarea
ctrlTasks.postTasks = async (req, res) => {
    const { description,estado } = req.body;

    // Instanciar una nueva tarea
    const nuevaTarea = new Tasks({
        description, 
        estado
    });

    try {
        // Guardar tarea en la base de datos
        const tarea = await nuevaTarea.save();
        return res.json('La tarea fue guardada con éxito');
    } catch (error) {
        console.log(error)
    }
};

// Controlador para actualizar una tarea
ctrlTasks.putTasks = async (req, res) => {
    const id = req.params.id;
    const { estado } = req.body; 

    if (!id  || !estado) {
        return res.status(400).json({
            msg: 'No se proporcionaron datos para actualizar la tarea',
        });
    }

    try {
        const task = await Tasks.findById(id);

        if (!task) {
            return res.status(404).json({
                msg: 'Tarea no encontrada',
            });
        }


        if (estado!== undefined) {
            task.estado = estado; // Actualiza el estado
        }

        const updatedTask = await task.save();

        return res.json({
            msg: 'Tarea actualizada correctamente',
            task: updatedTask,
        });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({
            msg: 'Error al actualizar la tarea',
        });
    }
};
// Controlador para eliminar una tarea (Eliminación lógica)	
ctrlTasks.deleteTasks = async (req, res) => {
    const id = req.params.id;

    try {
        await Tasks.findByIdAndDelete(id)
        return res.json('Tarea eliminada correctamente');
    } catch (err) {
        console.log(err.message)
        return res.status(500).json({
            msg: 'Error al eliminar la tarea'
        });
    }
};


module.exports = ctrlTasks;