import React from 'react'

function Page4() {
  return (
    <div className='flex ai:center jc:space-between pt:8% pb:18%  pb:8%@md gap:5 flex:col flex:row@md bg:#E7ECEF bg:white@md h:100vh h:auto@md'>
      
      <div className='w:55%@md '>
        <div className='bg:#E7ECEF px:10% py:18%@md py:10%@md ' data-aos="fade" data-aos-duration="1500">
          <div className='w:4/5@md mx:auto'>
            {/* <img src={process.env.PUBLIC_URL+'/images/page4_title.png'} alt="" className='max-w:full mb:16'/> */}
            <div className='f:30 f:heavy f:#20494C border-left:9|#B9D1DC|solid border-left:9|white|solid@md pt:9 pb:9 pl:7% mb:14 lh:1.5'>百年富饒文化・424公頃公園為鄰</div>
            <div className='pl:7%  font:18 lh:1.8 ls:1.5 f:#1A1A1A'>三級古蹟「先嗇宮」香火鼎盛，信仰與文化的能量深植人心； 雙北曼哈頓大都會公園，國際級綠地環抱。文化與自然於此生生不息。</div>
          </div>


        </div>
      </div>
      <div className='w:45%@md hide block@md' data-aos="fade-up" data-aos-duration="1500">
        <img src={process.env.PUBLIC_URL+'/images/page4_p01.png'} alt="" className='w:full'/>
      </div>
      <div className='hide@md'>
        <img src={process.env.PUBLIC_URL+'/images/page4_p01_mb.png'} alt="" className='w:full'/>
      </div>


    </div>
  )
}

export default Page4