import React from 'react'

function Page7() {
  return (
    <div className='flex items-center pt-[8%] pb-[18%] lg:pb-8% gap-1 flex-col lg:flex-row bg-[#E7ECEF] lg:bg-transparent h-screen lg:h-auto justify-between'>
      
      <div className=' lg:w-[58%] rel z-0'>
        <div className='bg-transparent  lg:py-[15%] px-[10%]' data-aos="fade" data-aos-duration="1500">
          <div className='w-4/5 mx-auto'>
            {/* <img src={process.env.PUBLIC_URL+'/images/page7_title.png'} alt="" className='max-w-full mb-16'/> */}
            <div className='text-3xl lg:text-4xl  font-bold text-[#20494C] border-l-[12px] border-[#B9D1DC] lg:border-white pt-5 pb-5 pl-[7%] mb-5'>黃金級綠建築規劃</div>
            <div className='pl-[10%] text-lg lg:text-xl leading-9 tracking-wider text-[#1A1A1A]'>遵由內政部建築研究所研擬「綠建築指標系統EEWH」七大指標，【冠德方舟計劃】全案以「黃金綠建築」等級規劃設計。</div>
          </div>


        </div>
      </div>
      <div className='flex flex-col  lg:w-[45%]  lg:absolute z-10 right-0' data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="top">
        <img src={process.env.PUBLIC_URL+'/images/page7_p01.png'} alt="" className='w-full'/>
      </div>


    </div>
  )
}

export default Page7