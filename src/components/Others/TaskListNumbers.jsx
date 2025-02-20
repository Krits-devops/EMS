import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='h-40 rounded-xl w-[45%] py-6 px-9 bg-red-400'>
            <h2 className='text-2xl'>0</h2>
            <h3 className='text-xl'>New Task</h3>
        </div>

        <div className='h-40 rounded-xl w-[45%] py-6 px-9 bg-blue-400'>
            <h2 className='text-2xl'>0</h2>
            <h3 className='text-xl'>New Task</h3>
        </div>

        <div className='h-40 rounded-xl w-[45%] py-6 px-9 bg-green-400'>
            <h2 className='text-2xl'>0</h2>
            <h3 className='text-xl'>New Task</h3>
        </div>

        <div className='h-40 rounded-xl w-[45%] py-6 px-9 bg-yellow-400'>
            <h2 className='text-2xl'>0</h2>
            <h3 className='text-xl'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumbers