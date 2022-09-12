import React from 'react'

function Page2() {
  return (
    <div className='flex items-center pt-[8%] pb-[18%] lg:pb-[8%] gap-1 flex-col lg:flex-row bg-[#E7ECEF] lg:bg-white h-screen lg:h-auto justify-between'>
      <div className='lg:w-[55%]'>
        <div className='bg-[#E7ECEF]  lg:py-[18%] lg:py-[10%] px-[10%]' data-aos="fade" data-aos-duration="1500">
          {/* <img src={process.env.PUBLIC_URL+'/images/page2_title.png'} alt="" className='w-4/5 w-1/2@md mb-16'/> */}
          <div className='text-3xl lg:text-4xl  font-bold text-[#20494C] tracking-wide leading-10 mb-5'>三環六線軌道經濟<br />
先嗇宮站漫步3分鐘</div>
          <div className='text-xl leading-9 tracking-wider text-[#1A1A1A]'>三重二重埔最美麗的豐年軸線，串接三環六線，<br />
高效路網縱貫四方，一脈串接最便捷的當代效率與時代文明。</div>
          <div className='text-xl text-[#1A1A1A] border-l-[12px] border-white pl-5 leading-9 tracking-wider mt-5'>
            <div>1站機捷：三蘆雙捷運</div>  
            <div>9橋之都：瞬移台北核心</div> 
            <div>6鐵共構：10分鐘台北車站</div> 
            <div>1高2快：國道1號、64快、台一線</div> 
          </div>
        </div>
      </div>
      <div className='lg:w-[45%] gap-5 hidden lg:block' data-aos="fade-up" data-aos-duration="1500">
        <img src={process.env.PUBLIC_URL+'/images/page2_p01.png'} alt="" className='w-full'/>
      </div>
      <div className='lg:hidden'>
        <img src={process.env.PUBLIC_URL+'/images/page2_p01_mb.png'} alt="" className='w-full'/>
      </div>

    </div>
  )
}

export default Page2