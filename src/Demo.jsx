import React from 'react'
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';

const Demo = () => {
  return (
    <div className='grid grid-cols-2 gap-3 p-20'>
        <div className='mt-20 px-12'>
     <h1 className='text-6xl text-green-900 font-bold '>Get an Exclusive Demo of Eazipay</h1>
     <p className='text-[18px] pt-12 w-[450px]'>Our greatest priority is to put you and your business first. Let's show you how we can help you</p>
        </div>
        <div className='flex flex-col gap-[10px] w-[550px] h-[600px] bg-white p-8 rounded-lg border text-center'>
          <h1 className='text-3xl font-bold'>First Thing First</h1>
          <p className='py-3 w-[350px] ml-[35px] '>We want to serve you better. tell us a bit about yourself or company</p>
          <form className='flex flex-col gap-4'>
       <div className='flex flex-row gap-[20px] border border-slate-200 p-[5px] rounded-md'>
       <OutlinedInput placeholder="Individual"  className='bg-green-800 text-white rounded-2xl'/>
       <OutlinedInput placeholder="Company" className='bg-zinc-100 text-white' />
        </div>
        <TextField fullWidth label="Firstname" id="fullWidth" className='rounded-full' />
        <TextField fullWidth label="Lastname" id="fullWidth" />
        <TextField fullWidth label="Email" id="fullWidth" />
        <TextField fullWidth label="Job title" id="fullWidth" />
        <TextField fullWidth label="Company size" id="fullWidth" className='bg-green-900 rounded-full text-white' />
  
        </form>
        </div>
       
    </div>
  )
}

export default Demo