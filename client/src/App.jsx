import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 
  const sendNewTaskToApi = async ({description}) =>{
     try{
        const request = await fetch('http://localhost:4000/task',{
          method:'POST',
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({
            description
          })
        })
      
        const response = await request.json()

        if(request.status != 201){
          alert('Error al crear')
          return
        }
       
     }catch(e){
      console.error(e)
      alert('Error '+ error.message)
     }
  }

  return (
    <main>
      <form>
      <label>Description</label>
      <input type="text" name="description" placeholder='estudiar'/>
      <button>
        crear
      </button>

      </form>
    </main>
  )
}

export default App
