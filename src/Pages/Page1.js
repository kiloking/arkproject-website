import React from 'react'

function Page1() {
  return (
    <div className='flex justify-between items-center pt-[8%] pb-[18%] lg:pb-[8%] gap-1 flex-col lg:flex-row bg-white bg-white@md h-screen lg:h-auto  '>
      <div className='flex flex-col lg:w-45% gap-2 order-last lg:order-first px-[10%] lg:px-0' data-aos="fade-up" data-aos-duration="1500">
        <img src={process.env.PUBLIC_URL+'/images/page1/page1_p01.png'} alt="" className='w-full '/>
        <img src={process.env.PUBLIC_URL+'/images/page1/page1_p02.png'} alt="" className='w-full '/>
      </div>
      <div className='' data-aos="fade" data-aos-duration="1500">
        <div className='bg-white lg:bg-[#E7ECEF] lg:px-[10%] lg:py-[18%] lg:py-[10%] '>
          <div className='w-3/4 mx-auto'>
            {/* <img src={process.env.PUBLIC_URL+'/images/page1/page1_title.png'} alt="" className='max-w-full'/> */}
            <div className='text-3xl lg:text-4xl  font-bold text-[#20494C] border-l-[12px] border-[#B9D1DC] lg:border-white pt-5 pb-5 pl-[7%] mb-5'>新北第二・市政都心</div>
            <div className='pl-[10%] text-lg lg:text-xl leading-9 tracking-wider text-[#1A1A1A]'>新北國際都心定錨三重・2026預見新湛然，匯聚綠景廣場、動能商圈、科技工業、雲端市政，打造複合型行政服務空間，喚醒三重地塊榮景。</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Page1