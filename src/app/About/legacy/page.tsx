import Navbar from '@/app/components/Navbar'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
    <Navbar/>

    <div className='items-center flex h-screen flex-col justify-center -mt-20'>
     <div></div>
    <Image src="/Images/legacystatement.jpg" width={700} height={700} alt='Legacy Statement'></Image>
    </div>
    </>
  )
}

export default page