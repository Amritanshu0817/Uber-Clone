import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div>
      <div className='items-center p-7 bg-geen-600'>
        <h1 className='text-4xl font-semibold'>Why Are You Here?</h1>
   <div className='flex flex-co py-10 bg-sate-500 items-center justify-between'>
   <div className='flex justify-between w-1/2 flex-col'>
   <img className='' src='https://cdni.iconscout.com/illustration/premium/thumb/taxi-driver-open-door-for-passenger-illustration-download-in-svg-png-gif-file-formats--call-logo-customers-cab-services-pack-vehicle-illustrations-4246715.png?f=webp' />
        </div>
        <div className=''>
        <img className='' src="https://cdni.iconscout.com/illustration/premium/thumb/businessman-hailing-a-taxi-for-airport-illustration-download-in-svg-png-gif-file-formats--cab-travel-pack-illustrations-3239811.png" alt="" />        </div>
    </div>
    <div className='flex justify-around items-center text-blue-600 text-xl font-semibold'>
       <Link to={'/captainLogin'}><p>Want To Provide Services to Customers through our App?</p></Link>
       <Link to={'/userLogin'}><p>Want To Take the Services through our App?</p></Link>
        </div>
      </div>
    </div>
  )
}

export default LoginPage

