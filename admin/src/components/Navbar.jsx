import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import { DoctorContext } from '../context/DoctorContext'
 
const Navbar = () => {
    
    const {aToken,setAToken} = useContext(AdminContext)
    const {dToken,setDToken} = useContext(DoctorContext)

    const navigate = useNavigate()
    
    const logout = () => {
        // Clear tokens from context
        if (aToken) setAToken('');
        if (dToken) setDToken('');

        // Clear tokens from localStorage
        localStorage.removeItem('aToken');
        localStorage.removeItem('dToken');

        // Redirect to home page
        navigate('/');
    };
    

    return (
    <div className='flex justify-between items-center px-4 sm:px-10 border-b bg-white'>
        <div className='flex items-center gap-2 text-xs'>
        <img className='w-36 sm:w-40 cursor-pointer ' src={assets.admin_logo} alt="" />
        <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600 text-lg'>{aToken ? 'Admin' : 'Doctor'}</p>
        </div>
        <button onClick={logout} className='bg-primary text-white text-lg px-10 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar
