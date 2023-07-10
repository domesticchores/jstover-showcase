import Link from 'next/link'
import Image from 'next/image'
import { poppins } from './fonts'
import navBarLogo from 'public/jaspera.png'

export default function Page() {
  return <div>
    <ul className="flex bg-white drop-shadow w-screen h-12 divide-x">
        <a href="/" className="group m-2 px-4"><Image className='transition-transform group-hover:scale-105' src={navBarLogo} alt="NavBar Logo" style={{height: '5vh', width:'auto'}}/></a>
        <li className='group inline-block py-3 text-center text-md w-32 h-12 bg=white hover:bg-slate-100'><p>Home</p><div className='transition-all w-3/4 group-hover:w-full group-hover:mx-0 m-4 h-0.5 mt-2.5 bg-gradient-to-r from-blue-400 to-blue-700'></div></li>
        <li className='transition-all inline-block py-3 text-center text-md w-32 h-12 bg=white hover:bg-slate-100 hover:text-blue-500'><Link href="/gallery" className={poppins.className}>Gallery</Link></li>
        <li className='transition-all inline-block py-3 text-center text-md w-32 h-12 bg=white hover:bg-slate-100 hover:text-blue-500'><Link href="/contact" className={poppins.className}>Contact</Link></li>
    </ul>
    <div className="flex w-screen h-12 justify-center">
      <h1>Hello, World!</h1>
    </div>
  </div>
    
  }