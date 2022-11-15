import React from 'react'
function Page1() {
  return (
    <div className='flex justify-between items-center pt-[8%] pb-[18%] lg:pb-[8%] flex-col lg:flex-row  h-screen lg:h-auto bg-center bg-cover bg-no-repeat bg-new-b mx-0 lg:mx-5'
        // style={{backgroundImage: `url(${newbgimg})`}}
    >
      <div className='lg:flex flex-col w-full lg:w-50% order-last lg:order-first px-0 lg:px-0 hidden' data-aos="fade-up" data-aos-duration="1500">
        <img src={process.env.PUBLIC_URL+'/images/page01_g01.png'} alt="" className='w-full '/>
      </div>
      <div className='flex flex-col w-full lg:w-50% order-last lg:order-first px-0 lg:px-0 lg:hidden' data-aos="fade-up" data-aos-duration="1500">
        <img src={process.env.PUBLIC_URL+'/images/page01_g01_mb.png'} alt="" className='w-full '/>
      </div>
      <div className='' data-aos="fade" data-aos-duration="1500">
        <div className=' lg:px-[10%] lg:py-[10%] '>
          <div className=' mx-auto w-3/4 lg:w-full'>
            {/* <img src={process.env.PUBLIC_URL+'/images/page1/page1_title.png'} alt="" className='max-w-full'/> */}
            <div className='text-4xl lg:text-4xl  font-bold text-[#20494C] pt-5 pb-5 mb-5'>新北第二・市政都心</div>
            <div className='text-lg lg:text-xl leading-9 tracking-wider text-[#1A1A1A]'>新北國際都心定錨三重・2026預見新湛然，匯聚綠景廣場、動能商圈、科技工業、雲端市政，打造複合型行政服務空間，喚醒三重地塊榮景。</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Page1