import React from 'react'
import Frame1 from "../../src/Images/Frame1.png"

const Navbar = () => {
  return (
    <div className='flex justify-between h-20 bg-white px-20 py-6 items-center'>
        <div className='flex gap-4'>
       <img src={Frame1} />
       <ul className='flex gap-4 text-green-900 text-semibold text-[18px]'>
        <li>Individual</li>
        <li>Businesses</li>
        <li>Pricing</li>
        <li>Set your payroll</li>
       </ul>
       </div>
       <div className='flex gap-8'>
        <button className='border border-green-900 px-[40px] py-[9px] rounded-full'>Log in</button>
        <button className='bg-green-900 text-white py-[9px] px-[40px] rounded-full'>Register</button>
       </div>
      
    </div>
  )
}

export default Navbar