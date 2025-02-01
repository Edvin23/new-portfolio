
import React from 'react'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='max-w-3xl text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-20'>
        <div className=''>
        </div>
            <div></div>
            <Image src="/Images/page1.jpg" 
            className='flex  max-w-4xl px-50 ' 
            width={1080}
            height={800}
            alt='Home page'></Image>  
        </div>
  )
}

export default Header