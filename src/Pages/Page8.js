import React from 'react'

function Page8() {
  return (
    <div className='flex items-center pt-[8%] pb-[18%] ms:pb-8% gap-1 flex-col lg:flex-col h-screen lg:h-auto justify-between'>
      <div className='flex  justify-center  lg:justify-between items-center  lg:mt-[6%] mb-6 w-5/6 mx-auto' data-aos="fade" data-aos-duration="1500">

        {/* <img src={process.env.PUBLIC_URL+'/images/page8_title.png'} alt="" className='w-4/5 w-2/5@md max-w-full '/> */}
        <div className='text-3xl lg:text-4xl  font-bold text-[#20494C] pt-5 pb-5 mb-5'>未來儀表板 智能綠建材</div>
        <div className="text-lg lg:text-xl leading-9 tracking-wider text-[#1A1A1A] hidden lg:block">
          聯合國2030永續發展目標 17 SDGs <br />
          低碳營運｜循環永續｜綠色能源｜降低污染｜健康生活
        </div>
          
      </div>
      <div className='hidden  lg:flex w-full p-[1%] mt-[4%] ' data-aos="fade-up" data-aos-duration="1500">
        <div><img src={process.env.PUBLIC_URL+'/images/page08_g01.png'} alt="" className='max-w-full'/></div>
      </div>
      <div className='w-full block  lg:hidden'>
        <img src={process.env.PUBLIC_URL+'/images/page08_g01_mb.png'} alt="" className='max-w-full'/>
      </div>



    </div>
  )
}

export default Page8