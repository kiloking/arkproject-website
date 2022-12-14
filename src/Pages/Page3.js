import React from 'react'

function Page3() {
  return (
    <div className='flex justify-between items-center pt-[8%] pb-[18%] lg:pb-[8%] gap-1 flex-col lg:flex-row bg-transparent  h-screen lg:h-auto relative '>
        <img src={process.env.PUBLIC_URL+'/images/page03_g02.png'} alt="" className='max-w-full object-fill absolute -bottom-12 right-0  aspect-square w-1/4'/>
      <div className='lg:w-[45%] gap-5 order-last lg:order-first hidden lg:block' data-aos="fade-up" data-aos-duration="1500">
        <img src={process.env.PUBLIC_URL+'/images/page03_g01.png'} alt="" className='w-full'/>
      </div>
      <div className='order-last  lg:order-first lg:hidden'>
        <img src={process.env.PUBLIC_URL+'/images/page03_g01_mb.png'} alt="" className='w-full'/>
      </div>
      <div className='lg:w-[55%] order-first lg:order-last'>
        <div className=' lg:px-[10%] py-6 lg:py-[10%] px-[10%] ' data-aos="fade" data-aos-duration="1500">
          <div className='w-3/4 lg:w-4/5 mx-auto '>
            {/* <img src={process.env.PUBLIC_URL+'/images/page3_title.png'} alt="" className='max-w-full mb-16'/> */}
            <div className='text-3xl lg:text-4xl  font-bold text-[#20494C] pt-5 pb-5 mb-5'>重新大道 繁華盛景</div>
            <div className='text-lg lg:text-xl leading-9 tracking-wider text-[#1A1A1A]'>走過重新路，見證三重黃金年代。湯城產業園區、家樂福商圈、新北科技園區，一路銜接右岸老三重，咫尺即達新莊副都心，領御雙北黃金生活圈，日常機能一應俱全。</div>
          </div>


        </div>
      </div>


    </div>
  )
}

export default Page3