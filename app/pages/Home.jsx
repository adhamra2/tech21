import Image from 'next/image'
import React from 'react'

function Home() {
  return (
    <div className='pt-[160px] bg-white px-[6%] h-[100vh] w-[100%] block xl:flex justify-between'>
        <div className='max-w-[520px] my-[auto] xl:mt-[100px] home-text'>
            <h1 className='home-h1'>Great <span className='color-span'>Product</span> is <span className='bold-span'>built by great</span> <span className='color-span'>teams</span></h1>
            <p className='home-p'>We help build and manage a team of world-class developers to bring your vision to life</p>
            <a href="#" className='home-a'>Let’s get started!</a>
        </div>

        <div>
         <Image src='/hero.png' alt='hero' width={614} height={546} className='home-img'/>
        </div>

    </div>
  )
}

export default Home