import { useState } from 'react';
import Layout from '../components/Layout';
import Image from 'next/image';
import memberOnePic from '../public/assets/crew/image-douglas-hurley.png';
import memberTwoPic from '../public/assets/crew/image-mark-shuttleworth.png';
import memberThreePic from '../public/assets/crew/image-victor-glover.png';
import memberFourPic from '../public/assets/crew/image-anousheh-ansari.png';
import arrowLeft from '../public/assets/shared/arrow-left.svg';
import arrowRight from '../public/assets/shared/arrow-right.svg';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  members: {
    id: number;
    name: string;
    description: string;
    post: string;
  }[]
}

const CrewPage = ({ members }: Props) => {
  const [currentMember, setCurrentMember] = useState(1);
  const pictures = [memberOnePic, memberTwoPic, memberThreePic, memberFourPic];
  return (
    <Layout title="Space Tourism Crew">
      <div className='w-[327px] md:w-full xl:w-[1200px] md:px-[39px] xl:px-0 flex flex-col items-center xl:items-start relative xl:mt-[76px]'>
        <p className='text-nav md:text-[20px] md:self-start md:mt-10 xl:text-hS tracking-M xl:tracking-XL xl:mt-0'><span className='text-white/40 font-bold xl:mr-6'>02</span> MEET YOUR CREW</p>
        <motion.div
          key={currentMember}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='w-full md:w-[590px] xl:w-full flex flex-col items-center xl:items-start mt-[400px] md:mt-[45px] xl:mt-[154px]'
        >
          <p className='text-nav md:text-[24px] xl:text-hM font-bellefair uppercase opacity-50'>{members[currentMember - 1].post}</p>
          <h2 className='text-[24px] md:text-[40px] xl:text-hL font-bellefair uppercase mt-2 mb-4'>{members[currentMember - 1].name}</h2>
          <p className='text-[15px] md:text-nav xl:text-body xl:w-[444px] text-center xl:text-start text-purple font-barlow leading-S md:leading-M'>{members[currentMember - 1].description}</p>
        </motion.div>
        <div className='w-[100vw] h-[298px] md:h-[523px] xl:h-[700px] absolute md:fixed flex justify-center overflow-hidden top-[61px] md:top-[unset] md:bottom-0 xl:left-0 2xl:bottom-[20%]'>
            <AnimatePresence>
            <motion.div
              key={currentMember}
              initial={{ x: 500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -500, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className={`absolute bottom-0 h-[523px] xl:right-[12%] xl:h-[700px] ${currentMember === 1 ? 'w-[217px] md:w-[385px] xl:w-[514px]' : ''} ${currentMember === 2 ? 'w-[200px] md:w-[351px] xl:w-[514px]' : ''} ${currentMember === 3 ? 'w-[253px] md:w-[443px] xl:w-[554px]' : ''} ${currentMember === 4 ? 'w-[284px] md:w-[499px] xl:w-[575px]' : ''}`}
            >
              <Image className={`absolute bottom-0`} src={pictures[currentMember - 1]} alt='Moon Picture' />
            </motion.div>
          </AnimatePresence>
        </div>
        <span className='w-[346px] h-[1px] bg-[#383B4B] absolute top-[359px] md:hidden' />
        <div className='w-[88px] flex justify-between items-center absolute top-[390px] md:top-[367px] xl:left-[98px] xl:top-[531px]'>
          {members.map(member => {
            return (
              <span key={member.id} onClick={() => setCurrentMember(member.id)} className={`w-[10px] h-[10px] rounded-full bg-white cursor-pointer ${currentMember !== member.id ? ' opacity-[0.17]' : ''}`} />
            )
          })}
        </div>
        <button type='button' onClick={() => {
          if (currentMember - 1 === 0) {
            setCurrentMember(4);
          }
          else {
            setCurrentMember(currentMember - 1)
          }
        }} className='flex justify-center items-center bg-white rounded-full w-[40px] h-[40px] absolute left-[-10px] top-[400px] md:top-[350px] md:left-[35%] xl:top-[515px] xl:left-0'><Image src={arrowLeft} alt='arrow left' className='w-[27px]' /></button>
        <button type='button' onClick={() => {
          if (currentMember + 1 === 5) {
            setCurrentMember(1);
          }
          else {
            setCurrentMember(currentMember + 1)
          }
        }} className='flex justify-center items-center bg-white rounded-full w-[40px] h-[40px] absolute right-[-10px] top-[400px] md:top-[350px] md:right-[35%] xl:top-[515px] xl:left-[244px]'><Image src={arrowRight} alt='arrow right' className='w-[27px]' /></button>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const members = [
    {
      id: 1,
      name: "Douglas Hurley",
      description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
      post: "Commander",
    },
    {
      id: 2,
      name: "MARK SHUTTLEWORTH",
      description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
      post: "Mission Specialist",
    },
    {
      id: 3,
      name: "Victor Glover",
      description: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
      post: "PILOT",
    },
    {
      id: 4,
      name: "Anousheh Ansari",
      description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
      post: "Flight Engineer",
    },
  ];

  return { props: { members } }
}

export default CrewPage;