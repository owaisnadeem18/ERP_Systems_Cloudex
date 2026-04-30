import { useState } from 'react'
import './App.css'
import Input from './components/ui/Input'
import Login from './components/auth/Login'
import { Route, Routes } from 'react-router-dom'
import AdminLayout from './layouts/AdminLayout'
import AdminDashboard from './components/admin/dashboard/AdminDashboard'
import { AuthLayout } from './layouts/AuthLayout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
      <Route path="/" element={<AuthLayout />} />
      
      <Route path="/admin" element = {<AdminLayout/>} >
          <Route path="dashboard" element = {<AdminDashboard/>} />
      </Route>                  


    </Routes>
    </>
  )
}

export default App
