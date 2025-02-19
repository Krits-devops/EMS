import React, { useEffect, useState } from 'react'
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard.jsx/EmployeeDashboard';
import AdminDashboard from './components/Dashboard.jsx/AdminDashboard';
import { getLocalStorage, setLocalStorage } from './utils/localStorage';

export const App = () => {

 const [user, setUser] = useState(null);

 const handleLogin = (email,password) =>{
  
}

 handleLogin();

  return (
    <>
      {!user ? <Login/> : ''}
      {/* <EmployeeDashboard/> */}
      {/* <AdminDashboard/> */}
    </>
  )
}

export default App;