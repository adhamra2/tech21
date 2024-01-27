import Image from 'next/image'
import React from 'react'

function NavBar() {
  return (
    <div className='flex items-center justify-between px-[3%] py-[auto] h-[60px] w-[100%] shadow-md fixed bg-white z-1000'>
        <div className='flex items-center'>
            <Image src='/logo.png' alt='logo' width={60} height={60} />
            <h1 className='text-[18px] logo-text'>Estate Tech</h1>
        </div>

        <div className='hidden xl:flex items-center gap-8'>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">How it works</a>
          <a href="#">Hire</a>
        </div>

        <a href="#" className='contact-btn'>Contact Us</a>
    </div>
  )
}

export default NavBar