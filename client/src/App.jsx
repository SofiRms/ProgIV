import { useEffect, useState } from "react";


const Task = () => {
    const [taskList, setTaskList] = useState([]);
    const [description, setDescription] = useState('');
   
    useEffect(() => {
        obtenerTask();
    }, []);

    const obtenerTask = async () => {
        try {
            const response = await fetch('http://localhost:4000/get');
            const data = await response.json();
            if (data.error) return;
            setTaskList(data)
        } catch (error) {
            console.error(error)
        }
    };


    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const agregarTask = async () => {
        try {
            await fetch('http://localhost:4000/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                  description
                }),
            });
            obtenerTask();
            setDescription('');
        } catch (error) {
            console.error(error);
        }
    };

    const toggleTask = async (taskId) => {
        try {
            await fetch(`http://localhost:4000/put/${taskId}`, {
                method: 'PUT',
            });
            obtenerTask();
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <div>
            <h2>Agregar Task</h2>
            <div className="input-container">
                <input className='input'type="text" value={description} onChange={handleDescriptionChange} placeholder='"estudiar"' />
            </div>
            <div id="midiv">
               <button onClick={agregarTask} id="boton">Agregar</button>
                </div> 

            <h2>Lista de tareas</h2>
            <div className="cards-container">
                {taskList.map((task) => (
                    <div className="card" key={task.id}>
                        <h3>{task.description}</h3>
                        <p>{task.status ? "Completo" : "Pendiente"}</p>
                        <button onClick={() => toggleTask(task.id)}>
                            "Cambiar estado"
                        </button>
                    </div>
                ))}
            </div>

          
        </div>
    );
}

export default Task