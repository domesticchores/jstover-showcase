'use client'

import Link from 'next/link'
import Image from 'next/image'
import { montserrat } from '../fonts'
import headerImg from 'public/galleryheader.png'

export default function GalleryPage() {
  return <div>
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