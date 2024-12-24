import React from 'react'
import { assets } from '../assets/assets'

const About = () => {

  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>About <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w[360px]' src={assets.aboutimg} alt="" />
        <div className='flex flex-col justify-center gap-6 text-sm text-gray-600'>
          <p>Our clinical appointment web application is a comprehensive platform designed to simplify the process of managing healthcare appointments. Patients can easily book, modify, or cancel appointments, while healthcare providers can efficiently organize their schedules. The user-friendly interface ensures a smooth experience, making it accessible for individuals of all tech proficiency levels.</p>
          <p>The application is built on a robust foundation of MySQL and Java, ensuring data integrity and system reliability. All information is securely stored and managed, adhering to industry standards for data protection. By integrating advanced backend technologies, the platform offers fast performance and seamless functionality, even during peak usage.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>This web-based solution is tailored to meet the evolving needs of the healthcare sector. It not only reduces administrative burdens but also improves communication between patients and providers. Whether for routine check-ups or specialized consultations, the system is designed to enhance the overall healthcare experience.</p>
        </div>
      </div>
      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>
      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICIENCY :</b>
          <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONVENIENCE :</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONALIZATION :</b>
          <p>Tailored recommendations and reminders to help you stay top of your health.</p>
        </div>
      </div>
    </div>
  )
}

export default About
