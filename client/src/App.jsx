import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
    const [taskList, setTaskList] = useState([]);
    const [description, setDescription] = useState('');
    const [estado, setEstado] = useState('pendiente');

    useEffect(() => {
        obtenerTask();
    }, []);

    const obtenerTask = async () => {
        try {
            const response = await fetch('http://localhost:4000/get');
            const data = await response.json();
            if (data.error) return;
            setTaskList(data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleStatusChange = (event) => {
        setEstado(event.target.value);
    };

    const agregarTask = async (event) => {
        event.preventDefault();
        try {
            await fetch('http://localhost:4000/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 
                    description,
                    estado: estado,
                }),
            });
            console.log('antes')
            obtenerTask();
            console.log('despues')
            setDescription('');
            setStatus('pendiente');
        } catch (error) {
            console.error(error);
        }
    };

    const toggleTask = async (taskId, newStatus) => {
        console.log(newStatus)
        console.log(taskId)
        try {
            await fetch(`http://localhost:4000/put/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ estado: newStatus }),
            });
            console.log(newStatus)
            obtenerTask();
        } catch (error) {
            console.error(error);
        }
    };

    const deleteTask = async (taskId) => {
        try {
            console.log('entra')
            await fetch(`http://localhost:4000/delete/${taskId}`, {
                method: 'DELETE',
            });
            console.log('salió')
            console.log(taskId)
            obtenerTask();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="App">
            <h1>Tareas</h1>
            <form onSubmit={agregarTask}>
                <label>
                    Descripción:
                    <input type="text" value={description} onChange={handleDescriptionChange} />
                </label>
                <label>
                    Estado:
                    <select value={estado} onChange={handleStatusChange}>
                        <option value="pendiente">Pendiente</option>
                        <option value="incompleto">Incompleto</option>
                    </select>
                </label>
                <button type="submit">Crear Tarea</button>
            </form>

            <h2>Lista de Tareas</h2>
            
            <div>
                {taskList.map((task) => (
                    <div key={task.id}>
                        <p>{task.description}</p>
                        <p>Estado: {task.estado}</p>
                        <button onClick={() => toggleTask(task._id, task.estado === 'pendiente' ? 'completo' : 'pendiente')}>
                            Cambiar Estado
                        </button>
                        <button onClick={() => deleteTask(task._id)}>
                            Eliminar
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default App;
