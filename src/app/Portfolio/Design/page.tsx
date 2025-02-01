import Navbar from '@/app/components/Navbar'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar/>
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col
    items-center justify-center gap-4'>
        <div className='text-3xl sm:text-6xl lg:text-[66px]'>
      
    <Link href='/' className='text-3xl sm:text-6xl lg:text-[66px]'>Eddy Ramirez</Link>
    <div>Design
    </div>
    </div>
    </div>
    </>
  )
}

export default page