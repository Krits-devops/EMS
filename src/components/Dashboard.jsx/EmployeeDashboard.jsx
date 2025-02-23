import React, { useContext } from 'react'
import Header from '../Others/Header'
import TaskListNumbers from '../Others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { setLocalStorage } from '../../utils/localStorage'
import { AuthContext } from '../../context/AuthProvider'


const EmployeeDashboard = (props) => {
  return (
    <div>
        <div className='p-10 bg-[#1C1C1C] h-screen'>
            <Header changeUser = {props.changeUser} data={props.data}/>
            <TaskListNumbers data={props.data}/>
            <TaskList data={props.data}/>
        </div>
    </div>
  )
}

export default EmployeeDashboard