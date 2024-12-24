import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {

  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm '>
          <img className='w-full md:max-w-[360px]' src={assets.Contactimg} alt="" />
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-lg text-gray-600 '>OUR OFFICE</p>
            <p className='text-gray-500'>Calicut ,City <br /> Kerala ,India</p>
            <p className='text-gray-500'>Mob : +974-30106754 <br /> Email : Rahulkappad@gmail.com</p>
            <p className='font-semibold text-lg text-gray-600'>CAREERS AT APPOINTMENT</p>
            <p className='text-gray-500'>Learn more about our temrs and job openings.</p>
            <button className='border border-black px-8 py-4 text-sm  hover:bg-black hover:text-white transition-all duration-500 text-gray-600 cursor-pointer'>Expolre Jobs</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact