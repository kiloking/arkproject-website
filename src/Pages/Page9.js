import React from 'react'

function Page9() {
  return (
    <div className='flex items-center pt-[8%] pb-[18%] ms:pb-8% gap-1 flex-col lg:flex-row bg-[#E7ECEF] lg:bg-white h-screen lg:h-auto justify-between'>
      <div className=' lg:w-45% gap-5 order-last lg:order-first px-[12%] lg:px-0' data-aos="fade-up" data-aos-duration="1500">
        <img src={process.env.PUBLIC_URL+'/images/page9_p01.png'} alt="" className='w-full'/>
      </div>
      <div className='lg:w-[55%] order-first lg:order-last' data-aos="fade" data-aos-duration="1500">
        <div className='bg-[#E7ECEF] lg:px-[10%] lg:py-[18%] '>
          <div className='w-3/4 mx-auto'>
            {/* <img src={process.env.PUBLIC_URL+'/images/page9_title.png'} alt="" className='max-w-full'/> */}
            <div className='text-3xl lg:text-4xl font-bold text-[#20494C] border-l-[12px] border-[#B9D1DC] lg:border-white pt-5 pb-5 pl-[7%] mb-5'>文化，最好的永續建設</div>
            <div className='pl-[10%] text-xl leading-9 tracking-wider text-[#1A1A1A]'>2007起，冠德在每一個社區，都設置一座「冠德遠見圖書館」，並贈送與住戶相當數量的天下文化叢書。把知識，當作建築的標準配備，視為生活的基礎需求。期許以文化的力量，為下一代種下希望。</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Page9