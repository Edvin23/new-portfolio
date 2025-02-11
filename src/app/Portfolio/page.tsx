import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'


const Portfolio = () => {
  return (
    <>
    <Navbar />
    <div className='w-11/12 max-w-3xl text-center mx-auto  flex flex-col
    items-center justify-center gap-4'>
        <div className='text-3xl sm:text-6xl lg:text-[66px]'>
      
    <Link href='/Portfolio/Anteeok' className='text-3xl sm:text-6xl lg:text-[66px]'>anteeok</Link>
    <div>
    <Link href="/Portfolio/Direction"> direction</Link>
    </div>
    <Link href="/Portfolio/Design">design</Link>
    </div>
    </div>
    </>
  )
}

export default Portfolio