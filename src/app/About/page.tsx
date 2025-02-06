
import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link'
import Image from 'next/image'

const About = () => {
  return (
    <>
    <Navbar/>
    <div className='text-center mx-auto h-screen flex flex-col
    items-center justify-center -mt-40'>
      <div></div>
    <Link href="/About/legacy">
      <Image src="/Images/jesuscross.jpg" width={200} height={200} alt='jesus Cross'></Image>
    </Link>
    </div>
    </> 
  )
}

export default About