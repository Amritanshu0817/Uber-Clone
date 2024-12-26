import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/Userlogin'
import LoginPage from './pages/LoginPage'
import CaptainLogin from './pages/CaptainLogin'
import UserSignup from './pages/Usersignup'
import CaptainSignup from './pages/CaptainSignup'


const App = () => {
  return (
   <div>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/userLogin' element={<UserLogin />} />
      <Route path='/captainLogin' element={<CaptainLogin />} />
      <Route path='/userSignup' element={<UserSignup />}  />
      <Route path='/captainSgnp' element={<CaptainSignup />} />
    </Routes>

   </div>
  )
}

export default App
