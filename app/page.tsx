import Link from 'next/link'
import Image from 'next/image'
import { inter, raleway } from './fonts'
import navBarLogo from 'public/jaspera.png'
import headerImg from 'public/homeheader.jpg'
import headerImg2 from 'public/galleryheader.png'

export default function Home() {
  return <div className='hideScroll'>
    <ul className="flex absolute bg-transparent w-screen h-12 z-10 text-white">
        <a href="/" className="group m-2 px-4"><Image className='transition-transform group-hover:scale-105 invert' src={navBarLogo} alt="NavBar Logo" style={{height: '5vh', width:'auto'}}/></a>
        <li className='group transition-all inline-block py-3 text-center text-md w-32 h-12 hover:bg-black/25 hover:text-blue-500'><Link href='/'>Home</Link><div className='transition-all w-3/4 group-hover:w-full mx-auto m-4 h-0.5 mt-2.5 bg-gradient-to-r from-blue-400 to-blue-700'></div></li>
        <li className='group inline-block py-3 text-center text-md w-32 h-12 hover:bg-black/75 relative'>
          <Link href='/gallery'><p className="hover:text-blue-500">Gallery</p></Link>
          <div className='w-0 bg-slate-500 duration-500 transition-all mx-auto group-hover:w-full m-4 h-0.5 mt-2.5'></div>
          <ul className={inter.className + ' font-normal relative -z-10 bg-inherit -mt-[200%] justify-center allign-middle divide-y group-hover:-mt-4 transition-all duration-500 delay-300'}>
            <li className='p-2 hover:bg-black/25 hover:text-blue-500'><Link href='/gallery/nature'>Nature</Link></li>
            <li className='p-2 hover:bg-black/25 hover:text-blue-500'><Link href='/gallery/people'>People</Link></li>
            <li className='p-2 hover:bg-black/25 hover:text-blue-500'><Link href='/gallery/structures'>Structures</Link></li>
            <li className='p-2 hover:bg-black/25 hover:text-blue-500'><Link href='/gallery/other'>Other</Link></li>
          </ul>
        </li>
        <li className='group transition-all inline-block py-3 text-center text-md w-32 h-12 hover:bg-black/25 hover:text-blue-500'><Link href='/contact'>Contact</Link></li>
    </ul>

    <div className='w-screen bg-fixed justify-center' style={ {backgroundImage:`url(${headerImg.src})`, backgroundSize:'cover', height:'95vh', width:'100%'} }>
      <div className='flex text-white text-[15vw] font-thin float-right mr-[2vw] mt-[5vh]'><p className={raleway.className}>Avery Kessel</p><p className={inter.className}>.</p></div>
      <div className='mr-[5vw] -mt-[5vh] relative w-[75vw] h-[15vh] float-right'>
      <h1 className={raleway.className + ' absolute bg-clip-text text-transparent animate-test-anim bg-gradient-to-r from-blue-400 to-orange-500 via-purple-500 animate-gradient-x text-[7vw] font-bold right-0 opacity-0'}>Photographer.</h1>
        <h1 className={raleway.className + ' absolute bg-clip-text text-transparent animate-test-anim bg-gradient-to-r from-blue-400 to-orange-500 via-purple-500 animate-gradient-x text-[7vw] font-bold right-0 opacity-0'} style={ {animationDelay:'3s'} }>Digital Artist.</h1>
        <h1 className={raleway.className + ' absolute bg-clip-text text-transparent animate-test-anim bg-gradient-to-r from-blue-400 to-orange-500 via-purple-500 animate-gradient-x text-[7vw] font-bold right-0 opacity-0'} style={ {animationDelay:'6s'} }>Web Designer.</h1>
      </div>
      <div className='mt-[25vh] w-[3vw] mx-[48.5vw] aspect-square text-center text-[2vw] font-black rounded-full bg-white float-left animate-bounce'><p className='bg-gradient-to-r from-blue-400 to-orange-500 via-purple-500 text-transparent bg-clip-text animate-gradient-x'>⮟</p></div>
    </div>
    <div className='w-screen bg-fixed justify-center' style={ {backgroundImage:`url(${headerImg2.src})`, backgroundSize:'cover', height:'96vh', width:'100%'} }>
    </div>
  </div>
    
  }