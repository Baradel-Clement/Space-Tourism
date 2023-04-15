import Link from 'next/link';
import Layout from '../components/Layout'

const IndexPage = () => {
  return (
    <Layout title="Space Tourism Home">
      <div className='w-[327px] h-[507px] md:w-[450px] md:h-[732px] xl:w-[77%] xl:h-[382px] xl:max-w-[1400px] flex flex-col xl:flex-row justify-between items-center xl:items-end mt-12 md:mt-[106px] xl:mt-[251px]'>
        <div className='w-full h-[276px] md:h-[334px] xl:h-[382px] xl:w-[450px] flex flex-col justify-between items-center xl:items-start'>
          <p className='tracking-M md:tracking-L xl:tracking-XL text-nav md:text-[20px] xl:text-hS text-purple'>SO, YOU WANT TO TRAVEL TO</p>
          <p className='text-[80px] md:text-hXXL md:leading-[150px] xl:leading-[172px] font-bellefair'>SPACE</p>
          <p className='text-[15px] md:text-nav xl:text-body font-barlow leading-S md:leading-M text-center xl:text-start text-purple'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <Link href='/destination'>
          <button className='w-[150px] h-[150px] md:w-[242px] md:h-[242px] rounded-full bg-white flex justify-center items-center text-black font-bellefair text-[20px] md:text-hM'>
            EXPLORE
          </button>
        </Link>
      </div>
    </Layout>
  )
}

export default IndexPage;