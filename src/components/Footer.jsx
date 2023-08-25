import React from 'react'
import Frame1 from "../Images/Frame1.png"
import Instagram from "../Images/Instagram.png"
import Twitter from "../Images/Twitter.png"
import Linkedin from "../Images/Linkedin.png"
import Facebook from "../Images/Facebook.png"

const Footer = () => {
  return (
    <div className='flex flex-row gap-20'>
     <div className='flex flex-col gap-2 md:ml-20'>
        <img src={Frame1} />
        <p>Copied @ 2023 eazipay</p>
        <h4>All right reserved</h4>
        <div className='flex md:gap-3'>
            <img src={Instagram} />
            <img src={Twitter} />
            <img src={Linkedin} />
            <img src={Facebook} />
        </div>
     </div>
     <div className='flex flex-col gap-2'>
        <h2 className='font-bold text-[20px]'>Products</h2>
        <p>Businesses</p>
        <p>Request Demo</p>
        <p>Pricing</p>
     </div>
     <div className='hidden md:flex flex-col gap-2'>
        <h2 className='font-bold text-[20px]'>Legal</h2>
        <p>Privacy Policy</p>
        <p>Terms of Services</p>
     </div>
     <div className='hidden md:flex flex-col gap-2'>
        <h2 className='font-bold text-[20px]'>Resources</h2>
        <p>FAQs</p>
        <p>Blogs</p>
        <p>Career</p>
        <p>Customer Stories</p>
     </div>
     <div className='hidden md:flex flex-col gap-2'>
        <h2 className='font-bold text-[20px]'>Contact us</h2>
        <p>eazipay@gmail.com</p>
        <p>+23468789518</p>
        <button className='bg-gray-300'>Your email address</button>
     </div>
    </div>
  )
}

export default Footer