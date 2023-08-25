import React from 'react'
import payapp1 from "../../src/Images/payapp1.png"
import payapp2 from "../../src/Images/payapp2.png"
import Ellipse1 from "../Images/Ellipse1.png"
import HeaderChat from './HeaderChat'
import Dashbd from '../Images/Dashbd.png'


const Header = () => {
  return (
    <div className='grid md:grid-cols-2 gap-5'>
        <div className='flex flex-col gap-3'>
        <span className='text-5xl text-black font-bold'>Run your payroll <h3 className='text-5xl font-bold text-gray-500 py-[10px]'> easily <span className='text-5xl font-bold text-black'>in</span><span className='text-5xl text-red-700 font-bold'> seconds</span> </h3> </span>
        <p className='text-[20px]'>We've built an all in-clusive simple solution for individual and businesses to manage staff, pay salaries, bills, and relevant taxes all at once</p>
        <button className='bg-green-900 py-[10px] w-[300px] text-white rounded-full mt-2'>Start Using Free, Forever</button>

        <div className='flex flex-col mt-5'>
        <h3 className='font-bold text-1xl text py-3'>Download the Eazipay App</h3>
        <div className='flex flex-row gap-3'>
           <div className='flex gap-[10px] bg-white p-[10px] cursor-pointer'>
            <img src={payapp1} />
            <div>
                <h4 className='text-black font-bold'>Download on the</h4>
                <h3 className='text-black font-bold'>Appstore</h3>
            </div>
           </div>
           <div className='flex flex-row gap-[10px] bg-white p-[10px] cursor-pointer'>
            <img src={payapp2} />
            <div>
                <h4 className='text-black font-bold'>Download on the</h4>
                <h3 className='font-black text-bold'>Appstore</h3>
            </div>
           </div>
        </div>
        </div>
        </div>
  
          <div className='hidden md:block flex-row h-[350px] w-[650px] '>
            <img src={Dashbd}/>
            </div>
        
     </div>
  )
}

export default Header