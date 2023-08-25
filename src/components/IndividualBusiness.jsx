import React from 'react'

const IndividualBusiness = () => {
  return (
    <div className='flex flex-col gap-3 p-[50px] items-center justify-center'>
        <h1 className='text-3xl md:text-5xl font-bold text-green-900'>For Individual and Businesses</h1>
        <p className='text-xl text-gray-800 font-semibold py-4'>Join 200+ businesses using Eazipay's easy solution</p>
        <div className='flex flex-col md:flex-row shadow-transparent '>
            <div className='bg-green-900 p-10 w-[300px] text-white inset shadow-green-950 shadow-inner rounded-md'>
                <h3 className='text-[20px] font-bold'>Tamper-proof pay</h3>
                <span className='text-[14px] my-2'>Your staff payroll history is key</span>
                <span className='text-[14px]'>No more excell sheet or manager</span>
                <span className='text-[14px] mt-2'>Download your payroll history</span>
            </div>
            <div className='bg-green-900 p-10 w-[300px] text-white inset shadow-green-950 shadow-inner rounded-md'>
                <h3 className='text-[20px] font-bold'>All Payroll, anytime</h3>
                <span className='text-[14px] my-2'>Wherever you are Eazipay</span>
                <span className='text-[14px]'>All your payroll task</span>
            </div>
            <div className='bg-green-900 p-10 w-[300px] md:w-[350px] text-white inset shadow-green-950 shadow-inner rounded-md'>
                <h3 className='text-[20px] font-bold'>Payroll in Seconds</h3>
                <span className='text-[14px] my-2'>Never again will you spend 2 minutes on payroll</span>
                <span className='text-[14px]'>Just click on your staff and bulk-pay them at once</span>
                <span className='text-[14px] mt-2'>Payment is done permanently</span>
            </div>
        </div>
           <p className='w-300[px] text-[14px] text-green-950 md:w-[400px] mt-4'>We are happy to answer your queries. Please reach us at<span className='text-red-500 text-[14px]'>hello@myeasypay.com</span> and expect our response shortly later</p>
    </div>
  )
}

export default IndividualBusiness