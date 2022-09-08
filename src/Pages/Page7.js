import React from 'react'

function Page7() {
  return (
    <div className='flex ai:center jc:space-between pt:8% pb:18% pb:8%@md gap:5 rel flex:col flex:row@md bg:#E7ECEF bg:white@md h:100vh h:auto@md'>
      
      <div className='w:58%@md rel z:0'>
        <div className='bg:#E7ECEF px:0% py:18%@md py:10%@md' data-aos="fade" data-aos-duration="1500">
          <div className='w:4/5 mx:auto'>
            {/* <img src={process.env.PUBLIC_URL+'/images/page7_title.png'} alt="" className='max-w:full mb:16'/> */}
            <div className='f:30 f:heavy f:#20494C border-left:9|#B9D1DC|solid border-left:9|white|solid@md pt:9 pb:9 pl:7% mb:14 lh:1.5'>黃金級綠建築規劃</div>
            <div className='pl:10%  font:18 lh:1.8 ls:1.5 f:#1A1A1A'>遵由內政部建築研究所研擬「綠建築指標系統EEWH」七大指標，【冠德方舟計劃】全案以「黃金綠建築」等級規劃設計。</div>
          </div>


        </div>
      </div>
      <div className='flex flex:col w:45%@md gap:5 abs@md z:1 right:0' data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="top">
        <img src={process.env.PUBLIC_URL+'/images/page7_p01.png'} alt="" className='w:full'/>
      </div>


    </div>
  )
}

export default Page7