import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider';
import { data } from 'autoprefixer';

const CreateTask = () => {

    

    const [userData, setUserData] =  useContext(AuthContext);
    

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription , setTaskDescription] = useState('')
    const [taskDate , setTaskDate] = useState('')
    const [assignTo , setAssignTo] = useState('')
    const [category , setCategory] = useState('')

    // const [newTask, setNewTask] = useState({})
    

    const submitHandler = (e)=>{
        e.preventDefault()
        const newTask = {
            taskTitle,
            taskDescription,
            taskDate,  
            assignTo,
            category,
            active:false,
            newTask:true,
            failed : false,
            completed : false
        }
    
    userData.forEach(function(elem){
        if(elem.firstName == assignTo){
            elem.tasks.push(newTask)
            elem.taskCount.newTask +=1
        }
    })
    setUserData(userData)
    console.log(userData);
    
    

    setTaskTitle('')
    setTaskDescription('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')


    }

  return (
    <div>
        <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} 
             className='flex flex-wrap w-full items-start justify-between'>

               <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                        <input 
                        value={taskTitle}
                        onChange={(e)=>setTaskTitle(e.target.value)}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none
                         bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Enter Your Task'></input>
                    </div>

                    <div>
                         <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                        <input 
                        value={taskDate}
                        onChange={(e)=>setTaskDate(e.target.value)}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none
                         bg-transparent border-[1px] border-gray-400 mb-4' type='date'></input>
                    </div>
                    
                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Assign to</h3>
                        <input 
                        value={assignTo}
                        onChange={(e)=>setAssignTo(e.target.value)}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none
                         bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='employee name'></input>
                    </div>

                    <div>
                        <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                        <input 
                        value={category}
                        onChange={(e)=>setCategory(e.target.value)}
                        className='text-sm py-1 px-2 w-4/5 rounded outline-none
                         bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='category'></input>
                    </div>
                </div>
               
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Description</h3>
                    <textarea 
                    value={taskDescription}
                    onChange={(e)=>setTaskDescription(e.target.value)}
                    className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent
                    border-[1px] border-gray-400' name='' id='' placeholder='Enter Description'></textarea>
                </div>

               
                <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm
                mt-4 w-full'>Create Task</button>             
            </form>
        </div>
    </div>
  )
}

export default CreateTask