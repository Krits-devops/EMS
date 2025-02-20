import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

   const authData =  useContext(AuthContext);

   console.log(authData.employees);


  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded'>
                    <div className='bg-red-400 py-2 px-4 mb-2   flex justify-between rounded'>
                        <h2 className='w-1/5'>Employee Name</h2>
                        <h3 className='w-1/5'>New Task</h3>
                        <h5 className='w-1/5'>Active Task</h5>
                        <h5 className='w-1/5'>Completed Task</h5>
                        <h5 className='w-1/5'>Failed Task</h5>
                    </div>
       
       <div className=''>
            {authData.employees.map((e , idx)=>{
            return <div className='bg-transparent border-2 border-emerald-500  py-2 px-4 mb-2   flex justify-between rounded'>
                        <h2 className='w-1/5 text-red-400'>{e.firstName}</h2>
                        <h3 className='w-1/5 text-blue-600'>{e.taskCount.newTask}</h3>
                        <h5 className='w-1/5 text-yellow-400'>{e.taskCount.active}</h5>
                        <h5 className='w-1/5 text-green-600'>{e.taskCount.completed}</h5>
                        <h5 className='w-1/5 text-red-400'>{e.taskCount.failed}</h5>
                    </div>
            })  }
        </div>   
    </div>   
  )
}

export default AllTask