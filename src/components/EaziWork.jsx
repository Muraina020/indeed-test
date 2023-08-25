import React from 'react'
import BG from "../../src/Images/BG.png"
import phone1 from "../../src/Images/phone1.png"
import Mask3 from "../../src/Images/Mask3.png"
import Mask2 from "../../src/Images/Mask2.png"

const EaziWork = () => {
  return (
    <div className='flex flex-col md:ml-10'>
        <h1 className='text-4xl text-green-900 font-bold text-center'>How Eazipay Works</h1>
        <p className='py-2 text-[18px] text-center text-gray-500'>Get started in 3 simple steps.</p>
        <div className='grid md:grid-cols-2 md:ml-10 mt-20 h-[600px]'>
        <div className='h-[300px] md:h-[400px] relative md:ml-15 mt-12'>
            <div className='absolute h-[550px] w-[400px] md:w-[450px]'>
                <img src={BG} />
            </div>
            <div className='absolute h-[200px] w-[270px] left-[60px] md:left-[90px] top-[-70px] md:top-[-30px] z-10'>
                <img src={phone1} />
            </div>
        </div>
      
            <div className='hidden md:flex flex-col relative ml-12 '>

                <div className='h-[20px] mr-2 mt-[7px] absolute left-[-50px] '>
                <img src={Mask3}/>
                </div>
               
            <div className='flex flex-col mb-[13px]'>
                <h2 className='bg-green-900 text-white font-bold text-xl w-[40px] rounded-lg p-[8px] text-center'>1</h2>
                <h3 className='my-4 text-[20px] font-bold text-black'>Create your free account</h3>
                <span className='text-[16px]'>Click here to set up your free Eazipay account</span>
            </div>
            <div className='flex flex-col mt-14'>
                <h2 className='bg-zinc-300 font-bold text-xl w-[40px] rounded-lg p-[8px] text-center'>2</h2>
                <h3 className='my-4 text-[20px] font-bold text-black'>Create your free account</h3>
                <span className='text-[16px]'>Click here to set up your free Eazipay account</span>
            </div>
              
            <div className='h-[15px] w-[400px] mt-[40px] absolute ml-[40px] top-[170px] '>
                <img src={Mask2}/>
                </div>

            <div className='flex flex-col mt-12 '>
                <h2 className='bg-zinc-300 font-bold text-xl w-[40px] rounded-lg p-[8px] text-center mt-[50px]'>3</h2>
                <h3 className='my-4 text-[20px] font-bold '>Create your free account</h3>
                <span className='text-[16px]'>Click here to set up your free Eazipay account</span>
            </div>
            </div>
          
        </div>
        </div>
  )
}

export default EaziWork