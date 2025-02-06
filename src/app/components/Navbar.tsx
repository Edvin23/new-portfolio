import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


const Navbar = () => {
  return (
    <> 
    <nav className='w-full flex flex-row lg:flex-row items-center justify-between px-5 lg:px-8 py-4
     z-50  '>
     
          <ul className=' gap-6 test-sm md:text-base lg:text-lg xl:text-xl '>
        <li className='py-1 sm:py-2'><Link href="/About">about</Link></li>
        <li className='py-1 sm:py-2'><Link href="/Portfolio">portfolio</Link></li>
        <li className='py-1 sm:py-2'><Link href="/Contact">contact</Link></li>
          </ul>  
          

          <div className='mt-4 lg:mt-1'>
          <Link href="/">
      <Image src="/Images/unnamed.jpg" 
      className="w-full sm:w-3/5 md:w-3/5 lg:w-3/5 max-w-[1200px] mx-auto "
      width={1200}
     height={1200}
      
       alt='your friend'>
       </Image>
    </Link>

          </div>
          
    </nav>
   
    </>
  )
}

export default Navbar