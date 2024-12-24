import React from 'react'
import { assets } from '../assets/assets'

function Header() {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6'>

                            {/*----left------*/}
    <div className='md:w1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight '> 
            Book Appointment <br/>For Trusted Doctors
        </p>
            <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-medium'>
                <img className='w-28' src={assets.Grouppic} alt="" />
                <p>Simply browse through our extensive list of trusted doctors,<br className='hidden sm:block'/>schedeule your appointment hassle-free</p>
            </div>
            <a href="/doctors"  className='flex it gap-2 bg-white px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300'>
            Book Appointment <img className='w-12' src={assets.Arrow} alt=""/>
            </a>
    </div>
    {/*----right------*/}
     <div className='md:w-1/2 relative'>
     <img className="w-full h-auto rounded-lg md:rounded-none md:object-cover md:h-full md:bottom-0"
    src={assets.Header_pic} alt="Header" />
     </div>
    </div>
  )
}

export default Header
