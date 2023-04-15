import Link from 'next/link';
import { useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import moonPic from '../public/assets/destination/image-moon.png';
import marsPic from '../public/assets/destination/image-mars.png';
import europaPic from '../public/assets/destination/image-europa.png';
import titanPic from '../public/assets/destination/image-titan.png';

type Props = {
  destinations: {
    id: number;
    name: string;
    description: string;
    distance: string;
    travel: string;
  }[]
}
const number = '42'

const DestinationPage = ({ destinations }: Props) => {
  const [currentDestination, setCurrentDestination] = useState(1);
  const pictures = [moonPic, marsPic, europaPic, titanPic];
  console.log(destinations)
  return (
    <Layout title="Space Tourism Destination">
      <div className='w-[327px] h-[704px] flex flex-col items-center mt-6'>
        <p className='text-nav tracking-M '><span className='text-white/40 font-bold'>0{currentDestination}</span> PICK YOUR DESTINATION</p>
        <Image className='mt-8 mb-[26px]' src={pictures[currentDestination - 1]} alt='Moon Picture' />
        <div className='w-[286px] flex justify-between items-center'>
          {destinations.map(destination => {
            return (
              <p key={destination.id} className='tracking-S text-shM relative cursor-pointer'>{destination.name.toUpperCase()}
                {destination.id === currentDestination && <span className={`${[1, 2, 4].includes(currentDestination) ? 'w-9' : 'w-[56px]'} h-[3px] bg-white absolute -bottom-2 ${[1, 2, 4].includes(currentDestination) ? 'left-[1px]' : 'left-[0px]'}`} />}
              </p>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const destinations = [
    {
      id: 1,
      name: "Moon",
      description: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days"
    },
    {
      id: 2,
      name: "Mars",
      description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months"
    },
    {
      id: 3,
      name: "Europa",
      description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years"
    },
    {
      id: 4,
      name: "Titan",
      description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years"
    },
  ];

  return { props: { destinations } }
}

export default DestinationPage;