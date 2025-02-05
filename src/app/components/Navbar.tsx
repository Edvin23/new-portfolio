import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


const Navbar = () => {
  return (
    <> 
    <nav className='w-full fixed top-0 left-0 px-5 lg:px-8 flex 
    items-center text-center z-50 py-4  '>
     
          <ul className='text-sm sm:text-sm md:text-base lg:text-lg xl:text-xl  sm:gap-4
          px-2 py-4 sm:py-4 md:px-6 md:py-10 lg:px-10 lg:py-10 w-64 text-center '>
        <li className='py-2 sm:py-3'><Link href="/About">about</Link></li>
        <li className='py-2 sm:py-3'><Link href="/Portfolio">portfolio</Link></li>
        <li className='py-2 sm:py-3'><Link href="/Contact">contact</Link></li>
          </ul>  
          

          <div className='flex justify-center items-center w-full px-5 lg:px-8 mt-4'>
          <Link href="/">
      <Image src="/Images/unnamed.jpg" 
      className="w-[95%] sm:w-[85%] md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto items-center"
      width={600}
     height={600}
      layout='responsive'
       alt='your friend'>
       </Image>
    </Link>

          </div>
          
    </nav>
   
    </>
  )
}

export default Navbar