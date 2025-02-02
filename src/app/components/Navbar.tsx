import Link from 'next/link'
import React from 'react'
import Image from 'next/image'


const Navbar = () => {
  return (
    <> 
    <nav className='w-full fixed px-5 lg:px-8 xl:px-[-8%]
    py- flex items-center text-center z-50 sm:max-xl:p-9'>
     
       <ul className='md:flex md:flex-col gap-4 px-1 py-20
          fixed-left-64 top-0 bottom-0 w-64 z-50 text-3xl '>
        <li><Link href="/About">about</Link></li>
        <li><Link href="/Portfolio">portfolio</Link></li>
        <li><Link href="/Contact">contact</Link></li>
          </ul>    
          <div className='justify-center fixed-center px-5 lg:px-8 items-center'>
          <Link href="/">
      <Image src="/Images/unnamed.jpg" 
      className=' max-w-lg max-h-lg w-full'
     style={{ alignSelf: "center"}}
      width={400}
      height={400}
      layout='responsive'
      sizes='100vw,50vw'
       alt='your friend'>
       </Image>
    </Link>

          </div>
          
    </nav>
   
    </>
  )
}

export default Navbar