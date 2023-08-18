import React from 'react'
import payapp1 from "../src/Images/payapp1.png"
import payapp2 from "../src/Images/payapp2.png"
import red from "../src/Images/red.png"
import man from "../src/Images/man.png"
import Union from "../src/Images/Union.png"





const Man = () => {
  return (
    <div className='grid grid-cols-2  ml-20 justify-center items-center'>
        <div className='flex flex-col gap-2 ml-20'>
            <h1 className='text-5xl text-black font-bold'>Forever for your <h3 className='text-5xl font-bold text-red-500'>salary payment</h3></h1>
          

            <div className='flex flex-col mt-5'>
        <h3 className='font-bold text-1xl text py-3'>Download the Eazipay App</h3>
        <div className='flex flex-row gap-3'>
           <div className='flex gap-[10px] bg-zinc-50 p-[10px] cursor-pointer'>
             <img src={payapp1} />
            <div>
                <h4 className='text-black font-bold'>Download on the</h4>
                <h3 className='text-black font-bold'>Appstore</h3>
            </div>
           </div>
           <div className='flex flex-row gap-[10px] bg-zinc-50 p-[10px] cursor-pointer'>
          <img src={payapp2} />
            <div>
                <h4 className='text-black font-bold'>Download on the</h4>
                <h3 className='font-black text-bold'>Appstore</h3>
            </div>
           </div>
        </div>
        </div>
        </div>

        <div className=' h-[400px] relative ml-20 mt-12'>
            <div className='absolute h-[350px] w-[350px] left-[10px] top-[-10px]'>
            <img src={Union} />
            </div>
            <div className='absolute h-[350px] w-[350px] z-10'>
                 <img src={red} />
            </div>
            <div className='absolute h-[350px] w-[330px] left-[15px] top-[px] z-20'>
              
           <img src={man} />
            </div>
        </div>
    </div>
  )
}

export default Man