import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';

const Specialitymenu = () => {
  const { doctors } = useContext(AppContext);

  // Retrieve the unique specialities
  const availableSpecialities = [...new Set(doctors.map(doc => doc.speciality))];

  return (
    <div className='flex flex-col items-center gap-4 text-gray-800 ' id='speciality '>
      <h1 className='text-3xl font-medium' >Find by Speciality</h1>
      <p className='w-1/3 text-center text-sm' >Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free</p>
       <div className='flex sm:justify-center gap-4 pt-5 w-full'>
        {availableSpecialities.map((speciality, index) => (
        <Link 
          key={index} 
          onClick={() => scrollTo(0, 0)} 
          className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-100' to={`/doctors/${speciality}`}>
          <img className='w-16 sm:w-24 mb-2' src={assets.GP} alt={speciality} />
          <p>{speciality}</p>
        </Link>
        ))}
       </div>
    </div>
  );
}

export default Specialitymenu;
