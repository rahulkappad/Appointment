import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      
      {/*----left-----*/}

      <div>
      <img className='w-16 sm:w-24 mb-2' src={assets.logo} alt="" />
      <p className='w-full md:w-2/3 tex-gray-600 leading-6'>Booking made easy! Choose your doctor, select a convenient time, and confirm your appointment in just a few clicks.</p>
      </div>

      {/*----center-----*/}

      <div>
      <p className='text-xl font-medium mb-5'>COMPANY</p>
      <ul className='flex flex-col gap-2 text-gray-600'>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Privacy and Policy</li>
      </ul>
      </div>

       {/*----right-----*/}

      <div>
        <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
        <ul className='flex flex-col gap-2 text-gray-600'>
          <li>+974-30106754</li>
          <li>Rahulkappad@gamil.com</li>
        </ul>
      </div>
      </div>

      {/*----footer-----*/}

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ Appointment - ALL Right Reserved.</p>
      </div>  
    </div>
  )
}

export default Footer
