import React from 'react'

function Page8() {
  return (
    <div className='block py:8% rel bg:#E7ECEF bg:white@md'>
      <div className='flex jc:center jc:space-between@md ai:center mt:6% mb:16 w:5/6 mx:auto'>

        <img src={process.env.PUBLIC_URL+'/images/page8_title.png'} alt="" className='w:4/5 w:2/5@md max-w:full '/>
        <div className="font:18 lh:1.8 ls:1.5 f:#1A1A1A hidden block@md">
          聯合國2030永續發展目標 17 SDGs <br />
          低碳營運｜循環永續｜綠色能源｜降低污染｜健康生活
        </div>
          
      </div>
      <div className='hide flex@md w:full gap:5 p:1% mt:4% '>
        <div><img src={process.env.PUBLIC_URL+'/images/page8_p01.png'} alt="" className='max-w:full'/></div>
        <div><img src={process.env.PUBLIC_URL+'/images/page8_p02.png'} alt="" className='max-w:full'/></div>
        <div><img src={process.env.PUBLIC_URL+'/images/page8_p03.png'} alt="" className='max-w:full'/></div>
      </div>
      <div className='w:full block hidden@md'>
        <img src={process.env.PUBLIC_URL+'/images/page8_p01_mb.png'} alt="" className='max-w:full'/>
      </div>



    </div>
  )
}

export default Page8