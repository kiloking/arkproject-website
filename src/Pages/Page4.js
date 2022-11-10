import React from 'react'

function Page4() {
  return (
    <div className='flex items-center pt-[8%] pb-[18%] lg:pb-[8%] gap-1 flex-col lg:flex-row bg-[#E7ECEF] lg:bg-transparent h-screen lg:h-auto justify-between '>
      
      <div className='lg:w-[55%] '>
        <div className='bg-transparent  lg:py-[18%] lg:py-[10%] px-[10%]' data-aos="fade" data-aos-duration="1500">
          <div className='lg:w-4/5 mx-auto'>
            {/* <img src={process.env.PUBLIC_URL+'/images/page4_title.png'} alt="" className='max-w-full mb-16'/> */}
            <div className='text-3xl lg:text-4xl  font-bold text-[#20494C] pt-5 pb-5 mb-5'>百年富饒文化・424公頃公園為鄰</div>
            <div className='text-lg lg:text-xl leading-9 tracking-wider text-[#1A1A1A]'>三級古蹟「先嗇宮」香火鼎盛，信仰與文化的能量深植人心； 雙北曼哈頓大都會公園，國際級綠地環抱。文化與自然於此生生不息。</div>
            <img src={process.env.PUBLIC_URL+'/images/page04_g01.png'} alt="" className='max-w-full w-3/4 ml-auto'/>
          </div>


        </div>
      </div>
      <div className='lg:w-[50%]hidden lg:block' data-aos="fade-up" data-aos-duration="1500">
        <img src={process.env.PUBLIC_URL+'/images/page04_g02.png'} alt="" className='w-full'/>
      </div>
      <div className='lg:hidden'>
        <img src={process.env.PUBLIC_URL+'/images/page04_g02.png'} alt="" className='w-full'/>
      </div>


    </div>
  )
}

export default Page4