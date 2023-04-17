import { useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import moonPic from '../public/assets/destination/image-moon.png';
import marsPic from '../public/assets/destination/image-mars.png';
import europaPic from '../public/assets/destination/image-europa.png';
import titanPic from '../public/assets/destination/image-titan.png';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  destinations: {
    id: number;
    name: string;
    description: string;
    distance: string;
    travel: string;
  }[]
}

const DestinationPage = ({ destinations }: Props) => {
  const [currentDestination, setCurrentDestination] = useState(1);
  const pictures = [moonPic, marsPic, europaPic, titanPic];
  return (
    <Layout title="Space Tourism Destination">
      <div className='w-[327px] md:w-full xl:w-[80vw] xl:max-w-[1500px] xl:h-[570px] px-[39px] xl:px-0 flex flex-col items-center mt-6 md:mt-10 xl:items-end xl:justify-end xl:mt-[76px] relative'>
        <p className='text-nav md:text-[20px] xl:text-hS tracking-M xl:tracking-XL self-start xl:absolute xl:top-0 xl:left-0'><span className='text-white/40 font-bold xl:mr-7'>01</span> PICK YOUR DESTINATION</p>
        <div className='w-[100vw] h-[130px] md:h-[300px] xl:h-[445px] relative flex justify-center mt-8 md:mt-[60px] mb-[26px] md:mb-[53px] overflow-hidden xl:absolute xl:overflow-visible xl:left-0 xl:w-full xl:m-0'>
          <AnimatePresence>
            <motion.div
              key={currentDestination}
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -500, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className='absolute xl:left-[97px] w-[130px] h-[130px] md:w-[300px] md:h-[300px] xl:w-[445px] xl:h-[445px]'
            >
              <Image className={`absolute top-0 ${currentDestination === 1 ? 'active' : ''}`} src={pictures[currentDestination - 1]} alt='Moon Picture' />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className='w-[286px] xl:mr-[160px] flex justify-between items-center relative'>
          {destinations.map(destination => {
            return (
              <p key={destination.id} onClick={() => setCurrentDestination(destination.id)} className='tracking-S text-shM xl:text-nav cursor-pointer uppercase'>{destination.name}</p>
            )
          })}
          <span className={`separator destination-${currentDestination} h-[3px] bg-white absolute -bottom-3`} />
        </div>
        <motion.div
          key={currentDestination}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='w-full flex items-center xl:items-start flex-col mt-[20px] md:mt-[25px] xl:mt-[40px] text-center xl:text-start md:w-[573px] xl:h-[401px] xl:w-[445px] xl:relative xl:z-30'
        >
          <h2 className='text-[38px] md:text-[80px] xl:text-hXL font-bellefair md:h-[92px] xl:h-[115px]'>{destinations[currentDestination - 1].name}</h2>
          <p className='text-[15px] md:text-nav xl:text-body text-purple leading-S md:leading-M font-barlow md:mt-[18px] xl:mt-[24px]'>{destinations[currentDestination - 1].description}</p>
          <span className='bg-[#383B4B] h-[1px] w-full mt-3 md:mt-[50px] mb-3 md:mb-7 ' />
          <div className='flex flex-col md:flex-row justify-between xl:justify-start items-center h-[130px] md:h-auto md:w-[450px]'>
            <div className='flex flex-col justify-between items-center w-[216px] xl:w-auto xl:items-start xl:mr-[79px]'>
              <p className='text-shM text-purple tracking-S'>AVG. DISTANCE</p>
              <p className='text-hM xl:text-hS font-bellefair uppercase'>{destinations[currentDestination - 1].distance}</p>
            </div>
            <div className='flex flex-col justify-between items-center w-[216px] xl:w-auto xl:items-start'>
              <p className='text-shM text-purple tracking-S uppercase'>Est. travel time</p>
              <p className='text-hM xl:text-hS font-bellefair uppercase'>{destinations[currentDestination - 1].travel}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const destinations = [
    {
      id: 1,
      name: "MOON",
      description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 KM",
      travel: "3 days"
    },
    {
      id: 2,
      name: "MARS",
      description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. KM",
      travel: "9 months"
    },
    {
      id: 3,
      name: "EUROPA",
      description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. KM",
      travel: "3 years"
    },
    {
      id: 4,
      name: "TITAN",
      description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. KM",
      travel: "7 years"
    },
  ];

  return { props: { destinations } }
}

export default DestinationPage;