import React from 'react'

function Page6() {
  return (
    <div className='flex items-center pt-[8%] pb-[18%] lg:pb-[8%] gap-1 flex-col lg:flex-row  h-screen lg:h-auto justify-between mx-5'>
      
      <div className='lg:w-[50%] '>
        <div className=' lg:py-[18%] lg:py-[10%]  ' data-aos="fade" data-aos-duration="1500">
          <div className='w-4/5 mx-auto'>
            {/* <img src={process.env.PUBLIC_URL+'/images/page6_title.png'} alt="" className='max-w-full mb-16'/> */}
            <div className='text-3xl lg:text-4xl  font-bold text-[#20494C]  pt-5 pb-5  mb-5'>甲級營造實力・誠信績優品牌</div>
            <div className=' text-lg lg:text-xl leading-9 tracking-wider text-[#1A1A1A]'>「根基營造」承攬政府公路工程、企業總部、民間廠房、醫療大樓及住宅社區，經典業績如：台灣最美也最嚴峻的公路「台９線」工程、中央研究院、新竹光子園區、海基會等。本案規劃於兩向配置 WELL LINK KVW 速度型制震器提昇至EPA=0.26g;達6級耐震設計強度之規範。</div>
            <div className=' hidden  lg:block'>
              <img src={process.env.PUBLIC_URL+'/images/page6_logo.png'} alt="" className='max-w-3/5 mx-auto mt-[8%] '/>
            </div>
            

          </div> 


        </div>
      </div>
      <div className='lg:w-[50%]  hidden lg:block' data-aos="fade-up" data-aos-duration="1500">
        <img src={process.env.PUBLIC_URL+'/images/page06_g01.png'} alt="" className='w-full'/>
      </div>
      <div className='lg:hidden'>
        <img src={process.env.PUBLIC_URL+'/images/page06_g01_mb.png'} alt="" className='w-full'/>
      </div>


    </div>
  )
}

export default Page6