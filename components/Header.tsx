import Image from 'next/image'
import React from 'react';
import logo from '../public/assets/shared/logo.svg';
import { useHomeStateContext } from '../context/Home';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () => {
  const { menuIsOpen, setMenuIsOpen } = useHomeStateContext();
  const router = useRouter()

  return (
    <>
      <div className='md:hidden w-full flex justify-between items-center bg-black px-6 pt-6'>
        <Image src={logo} alt='logo' />
        {
          !menuIsOpen && <svg onClick={() => setMenuIsOpen(true)} className='z-20' xmlns="http://www.w3.org/2000/svg" width="24" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M0 0h24v3H0zM0 9h24v3H0zM0 18h24v3H0z" /></g></svg>
        }
        {
          menuIsOpen && <svg onClick={() => setMenuIsOpen(false)} className='z-20 closeModalNavMobileOff' xmlns="http://www.w3.org/2000/svg" width="20" height="21"><g fill="#D0D6F9" fillRule="evenodd"><path d="M2.575.954l16.97 16.97-2.12 2.122L.455 3.076z" /><path d="M.454 17.925L17.424.955l2.122 2.12-16.97 16.97z" /></g></svg>
        }
      </div>

      <div className='max-md:hidden xl:hidden h-[96px] w-full flex justify-between items-center pl-[39px]'>
        <Image src={logo} alt='logo' />
        <div className='w-[450px] h-full flex items-center justify-between bg-[#FFF]/5 backdrop-blur-[40px] px-[47px]'>
          <div className='relative'>
            <Link href='/'>
              <p className='text-shM tracking-S'>HOME</p>
              {router.asPath === '/' && <span className='w-9 h-[3px] bg-white absolute bottom-[-37px] left-[50%] -translate-x-[50%]' />}
            </Link>
          </div>
          <div className='relative'>
            <Link href='/destination'>
              <p className='text-shM tracking-S'>DESTINATION</p>
              {router.asPath === '/destination' && <span className='w-[94px] h-[3px] bg-white absolute bottom-[-37px] left-[50%] -translate-x-[50%]' />}
            </Link>
          </div>
          <div className='relative'>
            <Link href='/crew'>
              <p className='text-shM tracking-S'>CREW</p>
              {router.asPath === '/crew' && <span className='w-9 h-[3px] bg-white absolute bottom-[-37px] left-[50%] -translate-x-[50%]' />}
            </Link>
          </div>
          <div className='relative'>
            <Link href='/technology'>
              <p className='text-shM tracking-S'>TECHNOLOGY</p>
              {router.asPath === '/technology' && <span className='w-[94px] h-[3px] bg-white absolute bottom-[-37px] left-[50%] -translate-x-[50%]' />}
            </Link>
          </div>
        </div>
      </div>

      <div className='max-xl:hidden h-[136px] w-full flex justify-end items-center pt-10'>
        <Image className='mr-[35%]' src={logo} alt='logo' />
        <div className='w-[58%] h-full flex items-center bg-[#FFF]/5 backdrop-blur-[40px] pl-[15%] relative'>
          <span className='w-[33vw] h-[1px] bg-white/25 absolute left-[-31vw] rotate-180' />
          <div className='relative cursor-pointer mr-12 group'>
            <Link href='/'>
              <p className='text-shM tracking-S'><span className='font-bold tracking-M pr-[11px]'>00</span>HOME</p>
              {router.asPath !== '/' && <span className='hidden group-hover:block w-[127px] h-[3px] bg-white/50 absolute bottom-[-37px] left-[50%] -translate-x-[50%]' />}
              {router.asPath === '/' && <span className='w-[70px] h-[3px] bg-white absolute bottom-[-37px] left-[50%] -translate-x-[50%]' />}
            </Link>
          </div>
          <div className='relative cursor-pointer group mr-12'>
            <Link href='/destination'>
              <p className='text-shM tracking-S'><span className='font-bold tracking-M pr-[11px]'>01</span>DESTINATION</p>
              {router.asPath !== '/destination' && <span className='hidden group-hover:block w-[127px] h-[3px] bg-white/50 absolute bottom-[-37px] left-[50%] -translate-x-[50%]' />}
              {router.asPath === '/destination' && <span className='w-[127px] h-[3px] bg-white absolute bottom-[-37px] left-[50%] -translate-x-[50%]' />}
            </Link>
          </div>
          <div className='relative cursor-pointer group mr-12'>
            <Link href='/crew'>
              <p className='text-shM tracking-S'><span className='font-bold tracking-M pr-[11px]'>02</span>CREW</p>
              {router.asPath !== '/crew' && <span className='hidden group-hover:block w-[70px] h-[3px] bg-white/50 absolute bottom-[-37px] left-[50%] -translate-x-[50%]' />}
              {router.asPath === '/crew' && <span className='w-[70px] h-[3px] bg-white absolute bottom-[-37px] left-[50%] -translate-x-[50%]' />}
            </Link>
          </div>
          <div className='relative cursor-pointer group mr-12'>
            <Link href='/technology'>
              <p className='text-shM tracking-S'><span className='font-bold tracking-M pr-[11px]'>03</span>TECHNOLOGY</p>
              {router.asPath !== '/technology' && <span className='hidden group-hover:block w-[127px] h-[3px] bg-white/50 absolute bottom-[-37px] left-[50%] -translate-x-[50%]' />}
              {router.asPath === '/technology' && <span className='w-[127px] h-[3px] bg-white absolute bottom-[-37px] left-[50%] -translate-x-[50%]' />}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Header