import React, { useContext, useEffect, useState } from 'react';
import Login from './components/Auth/Login';
import EmployeeDashboard from './components/Dashboard.jsx/EmployeeDashboard';
import AdminDashboard from './components/Dashboard.jsx/AdminDashboard';
import { AuthContext } from './context/AuthProvider';

export const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const authData = useContext(AuthContext);

  // Persist login state on page reload
  // useEffect(() => {
  //   const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  //   if (loggedInUser) {
  //     setUser(loggedInUser.role);
  //     if (loggedInUser.role === 'employee') {
  //       const employee = authData?.employees?.find((emp) => emp.email === loggedInUser.email);
  //       if (employee) {
  //         setLoggedInUser(employee);
  //       }
  //     }
  //   }
  // }, [authData]);

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '123') {
      setUser('admin');
      setLoggedInUser({ role: 'admin' });
      localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }));
    } else if (authData && authData.employees) {
      const employee = authData.employees.find((employee) => employee.email === email && employee.password === password);
      if (employee) {
        setUser('employee');
        setLoggedInUser(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee', ...employee }));
      } else {
        alert('Invalid credentials');
      }
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard />}
      {user === 'employee' && <EmployeeDashboard data={loggedInUser} />}
    </>
  );
};

export default App;