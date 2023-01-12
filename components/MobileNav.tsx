import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const MobileNav = () => {
  const router = useRouter()
  return (
    <div className='md:hidden h-screen w-[254px] pt-[118px] bg-[#000]/40 backdrop-blur-[40px] absolute top-0 right-0 z-10 closeModalNavMobileOff'>
      <div className='h-[172px] w-full flex flex-col justify-between pl-8'>
        <Link href='/'>
          <div className='w-full flex flex-row items-center h-[31px] relative'>
            <p className='text-nav font-bold tracking-M mr-[11px]'>00</p>
            <p className='text-nav tracking-M'>HOME</p>
            {router.asPath === '/' && <span className='w-1 h-full bg-white absolute right-0' />}
          </div>
        </Link>
        <Link href='/destination'>
          <div className='w-full flex flex-row items-center h-[31px] relative'>
            <p className='text-nav font-bold tracking-M mr-[11px]'>01</p>
            <p className='text-nav tracking-M'>DESTINATION</p>
            {router.asPath === '/destination' && <span className='w-1 h-full bg-white absolute right-0' />}
          </div>
        </Link>
        <Link href='/crew'>
          <div className='w-full flex flex-row items-center h-[31px] relative'>
            <p className='text-nav font-bold tracking-M mr-[11px]'>02</p>
            <p className='text-nav tracking-M'>CREW</p>
            {router.asPath === '/crew' && <span className='w-1 h-full bg-white absolute right-0' />}
          </div>
        </Link>
        <Link href='/technology'>
          <div className='w-full flex flex-row items-center h-[31px] relative'>
            <p className='text-nav font-bold tracking-M mr-[11px]'>03</p>
            <p className='text-nav tracking-M'>TECHNOLOGY</p>
            {router.asPath === '/technology' && <span className='w-1 h-full bg-white absolute right-0' />}
          </div>
        </Link>
      </div>
    </div>
  )
}

export default MobileNav