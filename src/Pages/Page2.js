import React from 'react'

function Page2() {
  return (
    <div className='flex items-center pt-[8%] pb-[18%] lg:pb-[8%] gap-1 flex-col lg:flex-row   h-screen lg:h-auto justify-between  '>
      <div className='mx-auto w-4/5 lg:w-1/2'>
        <div className='bg-transparent  lg:py-[18%] lg:py-[10%] px-0 py-5 lg:px-[5%]' data-aos="fade" data-aos-duration="1500">
          {/* <img src={process.env.PUBLIC_URL+'/images/page2_title.png'} alt="" className='w-4/5 w-1/2@md mb-16'/> */}
          <div className='text-3xl lg:text-4xl  font-bold text-[#20494C] tracking-wide leading-10 mb-5'>三環六線軌道經濟<br />先嗇宮站漫步3分鐘</div>
          <div className='text-lg lg:text-xl leading-9 tracking-wider text-[#1A1A1A]'>三重二重埔最美麗的豐年軸線，串接三環六線，<br />
高效路網縱貫四方，一脈串接最便捷的當代效率與時代文明。</div>
          <div className='text-lg lg:text-xl text-[#1A1A1A] leading-9 tracking-wider mt-5'>
            <div>1高3快：高速路網，縱貫南北經濟清軸線，悠遊雙北繁華生活</div> 
            <div>3捷6鐵：三環六線軌道佈局，換乘一站直達北車六鐵共榮圈</div> 
            <div>9橋之都：大雙北最強交通樞紐，橫跨兩大川淡水河、大漢溪</div> 
          </div>
        </div>
      </div>
      <div className='lg:w-[45%] gap-5 hidden lg:block' data-aos="fade-up" data-aos-duration="1500">
        <img src={process.env.PUBLIC_URL+'/images/page02_g01.png'} alt="" className='w-full'/>
      </div>
      <div className='lg:hidden'>
        <img src={process.env.PUBLIC_URL+'/images/page02_g01_mb.png'} alt="" className='w-full'/>
      </div>

    </div>
  )
}

export default Page2