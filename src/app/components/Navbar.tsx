import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


const Navbar = () => {
  return (
    <> 
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[-8%]
    py- flex  items-center text-center z-50 sm:max-xl   '>
     
          <ul className='text-xl fixed-col sm:text-sm md:text-base lg:text-lg xl:text-xl mt-6 h-full md:flex md:flex-col gap-4 px-4 py-2 md:px-6 md:py-4
           lg:px-8 lg:py-6 
          fixed-left-64 top-0 bottom-0 w-64 z-50 text-left '>
        <li><Link href="/About">about</Link></li>
        <li><Link href="/Portfolio">portfolio</Link></li>
        <li><Link href="/Contact">contact</Link></li>
          </ul>  
          

          <div className='justify-center fixed-center px-5 lg:px-8 items-center sm:max-xl:p-9'>
          <Link href="/">
      <Image src="/Images/unnamed.jpg" 
      className="max-w-xl sm:w-[80%] md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto"
     style={{ alignSelf: "center"}}
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