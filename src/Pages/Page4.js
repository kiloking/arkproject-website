import React from 'react'

function Page4() {
  return (
    <div className='flex items-center pt-[8%] pb-[18%] ms:pb-8% gap-5 flex-col md:flex-row bg-[#E7ECEF] md:bg-white h-screen md:h-auto justify-between'>
      
      <div className='md:w-[55%] '>
        <div className='bg-[#E7ECEF]  md:py-[18%] md:py-[10%] px-[10%]' data-aos="fade" data-aos-duration="1500">
          <div className='md:w-4/5 mx-auto'>
            {/* <img src={process.env.PUBLIC_URL+'/images/page4_title.png'} alt="" className='max-w-full mb-16'/> */}
            <div className='text-4xl font-bold text-[#20494C] border-l-[12px] border-[#B9D1DC] md:border-white pt-5 pb-5 pl-[7%] mb-5'>百年富饒文化・424公頃公園為鄰</div>
            <div className='pl-[10%] text-xl leading-9 tracking-wider text-[#1A1A1A]'>三級古蹟「先嗇宮」香火鼎盛，信仰與文化的能量深植人心； 雙北曼哈頓大都會公園，國際級綠地環抱。文化與自然於此生生不息。</div>
          </div>


        </div>
      </div>
      <div className='md:w-[45%] gap-5 hidden md:block' data-aos="fade-up" data-aos-duration="1500">
        <img src={process.env.PUBLIC_URL+'/images/page4_p01.png'} alt="" className='w-full'/>
      </div>
      <div className='md:hidden'>
        <img src={process.env.PUBLIC_URL+'/images/page4_p01_mb.png'} alt="" className='w-full'/>
      </div>


    </div>
  )
}

export default Page4