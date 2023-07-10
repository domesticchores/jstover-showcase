'use client'

import Link from "next/link"
import Image from "next/image"
import Logo from "public/jaspera.png"

export default function Footer() {
    return <section>
      <div className='w-screen mt-12 text-white'>
        <div className='bg-gradient-to-r from-blue-400 to-blue-700 w-screen h-1.5'></div>
        <div className='w-screen h-[40vh] bg-neutral-700 text-center'>
          <div className='invert flex justify-center p-10'><Image src={Logo} alt='footer logo' style={{height:'7vh',width:'auto'}}></Image></div>
          <ul className='flex mx-auto justify-center space-x-8 pb-2'>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/gallery'>Gallery</Link></li>
            <li><Link href='/contact'>Contact</Link></li>
            <li><Link href='/temp'>Other</Link></li>
            <li><Link href='/temp'>Something</Link></li>
          </ul>
          <ul className='flex space-x-12 justify-center pt-2 pb-10'><li>📧 example@email.com</li><li>📞 +1 (234) 567-8910</li></ul>
          <div className="flex text-sm text-neutral-500 inline gap-x-1 justify-center">
            <p>©</p> <Link className='underline' href='https://github.com/domesticchores'>Akash Keshav</Link><p>,</p><Link className='underline' href='https://github.com/domesticchores'>DomesticChores</Link><p> 2023. All rights 100% completely totally reserved. Definitely.</p>
          </div>
        </div>
      </div>
    </section>
}