import React from 'react'

function Page2() {
  return (
    <div className='flex items-center pt-[8%] pb-[18%] ms:pb-8% gap-5 flex-col md:flex-row bg-[#E7ECEF] md:bg-white h-screen md:h-auto justify-between'>
      <div className='md:w-[55%]'>
        <div className='bg-[#E7ECEF] md:px-[10%] md:py-[18%] md:py-[10%] px-[10%]' data-aos="fade" data-aos-duration="1500">
          {/* <img src={process.env.PUBLIC_URL+'/images/page2_title.png'} alt="" className='w-4/5 w-1/2@md mb-16'/> */}
          <div className='text-3xl font-bold text-[#20494C] tracking-wide leading-10 mb-5'>三環六線軌道經濟<br />
先嗇宮站漫步3分鐘</div>
          <div className='text-xl leading-8 tracking-wide text-[#1A1A1A]'>三重二重埔最美麗的豐年軸線，串接三環六線，<br />
高效路網縱貫四方，一脈串接最便捷的當代效率與時代文明。</div>
          <div className='text-xl text-[#1A1A1A] border-l-[12px] border-white pl-5 leading-6s mt-5'>
            <div>1站機捷：三蘆雙捷運</div>  
            <div>9橋之都：瞬移台北核心</div> 
            <div>6鐵共構：10分鐘台北車站</div> 
            <div>1高2快：國道1號、64快、台一線</div> 
          </div>
        </div>
      </div>
      <div className='md:w-[45%] gap-5 hidden md:block' data-aos="fade-up" data-aos-duration="1500">
        <img src={process.env.PUBLIC_URL+'/images/page2_p01.png'} alt="" className='w-full'/>
      </div>
      <div className='md:hidden'>
        <img src={process.env.PUBLIC_URL+'/images/page2_p01_mb.png'} alt="" className='w-full'/>
      </div>

    </div>
  )
}

export default Page2