
import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='max-w-3xl mx-auto h-screen flex
    items-center justify-center text-center'>
        <div className='relative'>
        </div>
          
            <Image src="/Images/page1.jpg" 
            className='flex  max-w-full  mx-auto object-cover -mt-80 h-auto' 
            width={1080}
            height={800}
            alt='Home page'></Image>  
        </div>
  )
}

export default Header