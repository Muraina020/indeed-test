import React from 'react'
import Frame1 from "../../src/Images/Frame1.png"

const Navbar = () => {
  return (
    <div className='flex gap-[80px] md:justify-between md:h-20 bg-white md:px-20 py-6 md:items-center'>
        <div className='flex gap-4'>
          <div>
       <img src={Frame1}/>
       </div>
       <ul className='hidden md:flex gap-4 text-green-900 text-semibold text-[18px]'>
        <li>Individual</li>
        <li>Businesses</li>
        <li>Pricing</li>
        <li>Set your payroll</li>
       </ul>
       </div>
       <div className='flex gap-[8px] md:gap-8'>
        <button className='border border-green-900 p-[5px] md:px-[40px] md:py-[9px] rounded-full'>Log in</button>
        <button className='bg-green-900 text-white  md:py-[9px] p-[5px] md:px-[40px] rounded-full'>Register</button>
       </div>
      
    </div>
  )
}

export default Navbar