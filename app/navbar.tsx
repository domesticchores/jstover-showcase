'use client'

import Link from "next/link"
import Image from "next/image"
import navBarLogo from "public/jaspera.png"
import { poppins, inter } from './fonts'
import { usePathname } from "next/navigation";

export default function Navbar() {

    const router = usePathname();

    return <section className={router=="/"?'hidden':''}>
      <ul className="flex fixed bg-white drop-shadow w-screen h-12 divide-x z-10">
        <a href="/" className="group m-2 px-4"><Image className='transition-transform group-hover:scale-105' src={navBarLogo} alt="NavBar Logo" style={{height: '5vh', width:'auto'}}/></a>
        <li className={(router == "/" ? "" : poppins.className + " ") + 'group transition-all inline-block py-3 text-center text-md w-32 h-12 bg-white hover:bg-slate-100 hover:text-blue-500'}><Link href='/'>Home</Link><div className={(router == "/" ? "" : "hidden ") + 'transition-all w-3/4 group-hover:w-full mx-auto m-4 h-0.5 mt-2.5 bg-gradient-to-r from-blue-400 to-blue-700'}></div></li>
        <li className={(router == "/gallery" ? "" : poppins.className + " ") + 'group inline-block py-3 text-center text-md w-32 h-12 bg-white hover:bg-slate-100 relative'}>
          <Link href='/gallery'><p className="hover:text-blue-500">Gallery</p></Link>
          <div className={(router.startsWith("/gallery") ? "w-2/3 bg-gradient-to-r from-blue-400 to-blue-700 " : "w-0 bg-slate-500 duration-500 ") + 'transition-all mx-auto group-hover:w-full m-4 h-0.5 mt-2.5'}></div>
          <ul className={inter.className + ' font-normal relative -z-10 bg-white -mt-[150%] justify-center allign-middle divide-y group-hover:-mt-4 transition-all duration-500 delay-300'}>
            <li className='p-2 hover:bg-slate-100 hover:text-blue-500'><Link href='/gallery/nature'>Nature</Link></li>
            <li className='p-2 hover:bg-slate-100 hover:text-blue-500'><Link href='/gallery/people'>People</Link></li>
            <li className='p-2 hover:bg-slate-100 hover:text-blue-500'><Link href='/gallery/structures'>Structures</Link></li>
            <li className='p-2 hover:bg-slate-100 hover:text-blue-500'><Link href='/gallery/other'>Other</Link></li>
            <li className='h-0'></li>
          </ul>
        </li>
        <li className={(router == "/contact" ? "" : poppins.className + " ") + 'group transition-all inline-block py-3 text-center text-md w-32 h-12 bg-white hover:bg-slate-100 hover:text-blue-500'}><Link href='/contact'>Contact</Link><div className={(router == "/contact" ? "" : "hidden ") + 'transition-all w-3/4 group-hover:w-full mx-auto m-4 h-0.5 mt-2.5 bg-gradient-to-r from-blue-400 to-blue-700'}></div></li>
    </ul>
    <div className="h-12 w-screen"></div>
    </section>
}