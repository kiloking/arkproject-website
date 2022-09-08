import React from 'react'

function Page8() {
  return (
    <div className='flex flex:col jc:space-between block@md pt:8% pb:18% pb:8%@md rel bg:white bg:white@md h:100vh h:auto@md '>
      <div className='flex jc:center jc:space-between@md ai:center mt:6%@md mb:16 w:5/6 mx:auto' data-aos="fade" data-aos-duration="1500">

        {/* <img src={process.env.PUBLIC_URL+'/images/page8_title.png'} alt="" className='w:4/5 w:2/5@md max-w:full '/> */}
        <div className='f:30 f:heavy f:#20494C border-left:9|#B9D1DC|solid  pt:9 pb:9 pl:7% pl:2%@md mb:14'>未來儀表板 智能綠建材</div>
        <div className="font:18 lh:1.8 ls:1.5 f:#1A1A1A hidden block@md">
          聯合國2030永續發展目標 17 SDGs <br />
          低碳營運｜循環永續｜綠色能源｜降低污染｜健康生活
        </div>
          
      </div>
      <div className='hide flex@md w:full gap:5 p:1% mt:4% ' data-aos="fade-up" data-aos-duration="1500">
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