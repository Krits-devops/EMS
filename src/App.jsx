import React from 'react'
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard.jsx/EmployeeDashboard';
import AdminDashboard from './components/Dashboard.jsx/AdminDashboard';

export const App = () => {
  return (
    <>
      {/* <Login/> */}
      {/* <EmployeeDashboard/> */}
      <AdminDashboard/>
    </>
  )
}

export default App;