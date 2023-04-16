import React, { ReactNode, useEffect } from 'react';
import Head from 'next/head';
import Header from './Header';
import { useHomeStateContext } from '../context/Home';
import MobileNav from './MobileNav';
import { closeModalUpdateBoard } from '../utils/closeModal'
import { useRouter } from 'next/router';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Space Tourism' }: Props) => {
  const { menuIsOpen, setMenuIsOpen } = useHomeStateContext();
  const router = useRouter()
  let currentPage = router.asPath === '/' ? 'home' : router.asPath.substring(1);
  return (
    <div className={`w-screen h-screen flex items-center flex-col relative ${currentPage === 'home' ? 'max-md:bg-background-home-mobile md:bg-background-home-tablet xl:bg-background-home-desktop' : ''} ${currentPage === 'destination' ? 'max-md:bg-background-destination-mobile md:bg-background-destination-tablet xl:bg-background-destination-desktop' : ''} ${currentPage === 'crew' ? 'max-md:bg-background-crew-mobile md:bg-background-crew-tablet xl:bg-background-crew-desktop' : ''} ${currentPage === 'technology' ? 'max-md:bg-background-technology-mobile md:bg-background-technology-tablet xl:bg-background-technology-desktop' : ''} bg-cover bg-no-repeat`} onClick={(e) => {
      if (menuIsOpen) {
        if (closeModalUpdateBoard('closeModalNavMobileOff', e)) {
          setMenuIsOpen(false)
        }
      }
    }}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      {
        menuIsOpen && <MobileNav />
      }
      {children}
    </div>
  )
}


export default Layout
