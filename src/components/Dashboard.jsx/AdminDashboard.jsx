import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTask'
import { setLocalStorage } from '../../utils/localStorage'

const AdminDashboard = (props) => {

  // console.log(props.changeUser);
  

  // setLocalStorage();

  return (
    <div className='h-screen w-full p-7'>
        <Header changeUser={props.changeUser}/>
        <CreateTask/> 
        <AllTask/>
    </div>
  )
}

export default AdminDashboard