// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import Link from 'next/link'
import Image from 'next/image'
import { poppins } from './fonts'
import navBarLogo from '../public/jaspera.png'

export default function Page() {
  return <body>
    <ul className="flex bg-white drop-shadow w-screen h-12 divide-x">
      <a href="/" className="group m-2 px-4"><Image className='transition-transform group-hover:scale-105' src={navBarLogo} alt="NavBar Logo" style={{height: '5vh', width:'auto'}}/></a>
      <li className='transition-all inline-block py-3 text-center text-md w-32 h-12 bg=white hover:bg-slate-100 hover:text-blue-500'><a className={poppins.className} href='/'>Home</a></li>
      <li className='group inline-block py-3 text-center text-md w-32 h-12 bg=white hover:bg-slate-100'><p>Gallery</p><div className='transition-all w-3/4 group-hover:w-full group-hover:mx-0 m-4 h-0.5 mt-2.5 bg-gradient-to-r from-blue-400 to-blue-700'></div></li>
      <li className='transition-all inline-block py-3 text-center text-md w-32 h-12 bg=white hover:bg-slate-100 hover:text-blue-500'><a className={poppins.className} href='/'>Contact</a></li>
      
    </ul>
    <div className="flex w-screen h-12 justify-center">
      <h1>Hello, Dashboard Page!</h1>
    </div>
    <div className='grid grid-cols-4 gap-4 mx-12'>
      <img src="https://picsum.photos/600/400" alt="" />
      <img src="https://picsum.photos/600/400/" alt="" />
      <img src="https://picsum.photos/600/400//" alt="" />
      <img src="https://picsum.photos/600/400///" alt="" />
      <img src="https://picsum.photos/600/400////" alt="" />
      <img src="https://picsum.photos/600/400/////" alt="" />
    </div>
  </body>
    
  }