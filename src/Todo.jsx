
import { useState } from "react"

function Todo(){
    const [tasks, setTasks]=useState([''])
    const [newTask, setNewTask]=useState("")

    const handleInput=(e)=>{
        setNewTask(e.target.value)
    }

    // add task method
    const addTask=()=>{

        if(newTask.trim()!==""){
            setTasks(t=>[...t, newTask]);
            setNewTask("")
        }
        
    }
    // delete method
    const deleteTask=(index)=>{
        const updatedTask=tasks.filter((_ ,i)=>i!==index);
        setTasks(updatedTask)
    }
    // moves taks up
    const moveUp=(index)=>{
        if(index>0){
            const updated=[...tasks];
            [updated[index],updated[index-1]]=[updated[index-1],updated[index]];
            setTasks(updated)
        }
    }
    const moveDown=(index)=>{
        if(index<tasks.length-1){
            const updated=[...tasks];
            [updated[index],updated[index+1]]=[updated[index+1],updated[index]];
            setTasks(updated)
        }
    }


    return(
        <div className="todo-list">
            <h4>Task Bar</h4>

            <div>
                <input type="text"
                value={newTask} 
                placeholder="Enter a task"
                onChange={handleInput}/>

                <button className="add-button" onClick={addTask}>Add</button>
            </div>

            <ol>
                {tasks.map((task, index)=>
                    <li key={index}>
                        <span className="text">{task}</span>
                        {/* delete button */}
                        <button
                            className="delete-button"
                            onClick={()=>deleteTask(index)}>
                                Delete</button>

                        {/* up button */}
                        <button
                            className="move"
                            onClick={()=>moveUp(index)}>
                                ⬆️</button>

                        {/* move down button */}
                        <button
                            className="move"
                            onClick={()=>moveDown(index)}>
                                ⬇️</button>
                        </li>)}

            </ol>
            <h1>developed by Mehedi Shovon</h1>
        </div>
        
    )
}

export default Todo