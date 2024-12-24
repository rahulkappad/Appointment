import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'



const Topdoctors = () => {

    const navigate=useNavigate()
    const {doctors} = useContext(AppContext)

    return (
      <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Top Doctors To Book</h1>
        <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>
        <div className='w-full items-center grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
          {doctors.filter((item) => item.available).slice(0,6).map((item,index) => (
            <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}}
              className='border  border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 flex flex-col items-center p-4'
              key={index} 
            >
              <img className='w-24 sm:w-32 mb-4 bg-blue-50 rounded-full' src={item.image} alt={item.name}/>
              <div className='flex flex-col items-center text-center gap-2'>
                <div className='flex items-center gap-2'>
                  <span className='w-2 h-2 bg-green-500 rounded-full'></span>
                  <p className='text-green-500'>Available</p>
                </div>
                <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                <p className='text-gray-600 text-sm'>{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}} className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>
            More
          </button>
        </div>
      </div>
    )
  }
  
  

export default Topdoctors
