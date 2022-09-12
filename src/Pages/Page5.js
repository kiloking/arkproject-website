import React from 'react'

function Page5() {
  return (
    <div className='block w-full aspect-[951/1300] md:aspect-[1920/951] bg-[#20494C] relative pt-[8%] pb-[18%] md:pb-[8%] h-screen md:h-auto'>
      <div
        className='inset-0 absolute bg-left bg-no-repeat bg-cover  z-0  hidden md:block'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/page5_bg.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      >
        <div className='md:w-1/2 ml-auto  flex items-center h-full'>
          <div className='md:py-[8%] flex flex-col justify-around items-center h-full w-4/5 mx-auto'>
            {/* <img src={process.env.PUBLIC_URL+'/images/page5_title.png'} alt="" className='w-full'/> */}
            <div className='text-4xl font-bold text-white border-l-[12px] border-[#B9D1DC]  pt-5 pb-5 pl-[7%] mb-5'>台灣ESG永續建築先行者 - 冠德建設</div>
            <div className='text-xl leading-9 tracking-wider text-white'>以ESG永續精神為核心，翻轉土地能量、創造城市新生。
            升級進化冠德4.0+，呼應大地的呼喚，為三重市心中下一座森林，
            深耕城市，生根自然，生命新生。</div>
            <img src={process.env.PUBLIC_URL+'/images/page5_p01.png'} alt="" className='w-full'/>
          </div>

        </div>
      </div>
      <div className='md:hide flex flex-col justify-between h-full'>
        <div className=''>
          <div className='px-10%  md:py-18 '>
            <div className=' md:w-4/5 mx-auto'>
              {/* <img src={process.env.PUBLIC_URL+'/images/page5_title.png'} alt="" className='max-w-full mb-16'/> */}
              <div className='text-4xl font-bold text-white border-l-[12px] border-[#B9D1DC] md:border-white pt-5 pb-5 pl-[7%] mb-5'>台灣ESG永續建築先行者</div>
              <div className='pl-[10%] text-xl leading-9 tracking-wider text-white'>以ESG永續精神為核心，翻轉土地能量、創造城市新生。
            升級進化冠德4.0+，呼應大地的呼喚，為三重市心中下一座森林，
            深耕城市，生根自然，生命新生。</div>
            </div>
          </div>
        </div>
        <div  
          className='w-full aspect-[864/602] bg-center bg-no-repeat bg-cover'
          style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/page5_bg_mb.png'})`}
        }>
          <div className='w-1/2 ml-auto mr-[3%] flex items-center h-full '>
            <img src={process.env.PUBLIC_URL+'/images/page5_p01_mb.png'} alt="" className='max-w-full'/>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default Page5