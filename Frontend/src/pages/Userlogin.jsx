import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ userData, setUserData ] = useState({})

  // const { user, setUser } = useContext(UserDataContext)
  // const navigate = useNavigate()



  const submitHandler = async (e) => {
    e.preventDefault();
    setUserData({
      email: email,
      password: password
    })

    // const userData = {
    //   email: email,
    //   password: password
    // }

  //   const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

  //   if (response.status === 200) {
  //     const data = response.data
  //     setUser(data.user)
  //     localStorage.setItem('token', data.token)
  //     navigate('/home')
  //   }


  //   setEmail('')
  //   setPassword('')
  }

  return (
    <div className='pt-5 h-screen flex flex-col justify-evenly items-center'>
      <img className='w-72' src="https://cdni.iconscout.com/illustration/premium/thumb/cab-service-illustration-download-in-svg-png-gif-file-formats--booking-book-online-city-taxi-mobile-application-services-pack-business-illustrations-4144424.png" alt="" />
      <div className='flex justify-center'>

        <div className='flex flex-col justify-center items-center'>
      <p className='flex justify-center items-center text-3xl pb-5 font-semibold'>Introduce YourSelf First!</p>
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

          <input
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            required type="password"
            placeholder='Password'
          />

          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
          >Login</button>

        </form>
          <p className='text-center'>New here? <Link to='/userSignup' className='text-blue-600'>Create new Account</Link></p>
        </div>
        {/* <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p> */}
      </div>
    </div>
  )
}

export default UserLogin