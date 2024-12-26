import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Home = () => {
  return (
    <div className='bg-[url(https://images.unsplash.com/photo-1535337722-7eb07f382538?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] 
    // bg-cover h-screen bg-center
    // flex justify-between flex-col items-center p-5'>
      <img className='w-72' src="https://cdni.iconscout.com/illustration/premium/thumb/cab-service-illustration-download-in-svg-png-gif-file-formats--booking-book-online-city-taxi-mobile-application-services-pack-business-illustrations-4144424.png" alt="" />
      <Link to ='/login'className='font-semibold text-3xl'><span className='bg-blue-900 text-white px-5 py-2 rounded-2xl'>Let's Start</span></Link>
      <div className='font-medium text-white'>All Rights Reserved ©</div>
    </div>
  )
}

export default Home
