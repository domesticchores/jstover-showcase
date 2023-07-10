'use client'

import Link from 'next/link'
import Image from 'next/image'
import { poppins, montserrat } from '../fonts'
import navBarLogo from 'public/jaspera.png'
import headerImg from 'public/galleryheader.png'

export default function GalleryPage() {
  return <div>
    <ul className="flex fixed bg-white drop-shadow w-screen h-12 divide-x z-10">
        <a href="/" className="group m-2 px-4"><Image className='transition-transform group-hover:scale-105' src={navBarLogo} alt="NavBar Logo" style={{height: '5vh', width:'auto'}}/></a>
        <li className='transition-all inline-block py-3 text-center text-md w-32 h-12 bg=white hover:bg-slate-100 hover:text-blue-500'><Link href="/" className={poppins.className}>Home</Link></li>
        <li className='group inline-block py-3 text-center text-md w-32 h-12 bg=white hover:bg-slate-100'><p>Gallery</p><div className='transition-all w-3/4 group-hover:w-full group-hover:mx-0 m-4 h-0.5 mt-2.5 bg-gradient-to-r from-blue-400 to-blue-700'></div></li>
        <li className='transition-all inline-block py-3 text-center text-md w-32 h-12 bg=white hover:bg-slate-100 hover:text-blue-500'><Link href="/contact" className={poppins.className}>Contact</Link></li>
    </ul>
    <div className='fixed -z-10'>
      <Image src={headerImg} alt='header' style={{width:'110vw', height:'auto'}}></Image>
    </div>
    <div className="flex w-screen justify-center pt-12 pb-8 h-[50vh]">
      <h1 className={montserrat.className + ' absolute self-center font-black text-7xl -mt-8 bg-gradient-to-r from-blue-400 to-orange-500 via-purple-500 animate-gradient-x bg-clip-text text-transparent'}>Photo Showcase</h1>
      <h1 className='absolute self-center text-slate-100 mt-20'>A collection of my best shots, centralized within this gallery.</h1>
    </div>
    <div className='grid grid-cols-4 gap-4 p-12 bg-gradient-to-r from-slate-100 to-slate-200'>
      <img src="https://picsum.photos/600/400" alt="" />
      <img src="https://picsum.photos/600/400/" alt="" />
      <img src="https://picsum.photos/600/400//" alt="" />
      <img src="https://picsum.photos/600/400///" alt="" />
      <img src="https://picsum.photos/600/400////" alt="" />
      <img src="https://picsum.photos/600/400/////" alt="" />
      <img src="https://picsum.photos/600/300" alt="" />
      <img src="https://picsum.photos/600/300/" alt="" />
      <img src="https://picsum.photos/600/500//" alt="" />
      <img src="https://picsum.photos/600/300///" alt="" />
      <img src="https://picsum.photos/600/300////" alt="" />
      <img src="https://picsum.photos/700/500/////" alt="" />
      <img src="https://picsum.photos/700/400" alt="" />
      <img src="https://picsum.photos/800/400/" alt="" />
      <img src="https://picsum.photos/700/400//" alt="" />
      <img src="https://picsum.photos/900/400///" alt="" />
      <img src="https://picsum.photos/700/400////" alt="" />
      <img src="https://picsum.photos/800/400/////" alt="" />
      <img src="https://picsum.photos/300/400" alt="" />
      <img src="https://picsum.photos/300/400/" alt="" />
      <img src="https://picsum.photos/300/400//" alt="" />
      <img src="https://picsum.photos/300/400///" alt="" />
      <img src="https://picsum.photos/300/400////" alt="" />
      <img src="https://picsum.photos/300/400/////" alt="" />
    </div>
  </div>
    
  }