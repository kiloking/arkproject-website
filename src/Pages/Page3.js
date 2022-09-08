import React from 'react'

function Page3() {
  return (
    <div className='flex jc:space-between ai:center pt:8% pb:18%  pb:8%@md gap:5 flex:col flex:row@md bg:white bg:white@md h:100vh h:auto@md'>
      <div className='w:45%@md o:last o:first@md hide block@md' data-aos="fade-up" data-aos-duration="1500">
        <img src={process.env.PUBLIC_URL+'/images/page3_p01.png'} alt="" className='w:full'/>
      </div>
      <div className='o:last  o:first@md hide@md'>
        <img src={process.env.PUBLIC_URL+'/images/page3_p01_mb.png'} alt="" className='w:full'/>
      </div>
      <div className='w:55%@md o:first o:last@md'>
        <div className='bg:#E7ECEF@md px:10%@md py:18%@md py:10%@md px:10% ' data-aos="fade" data-aos-duration="1500">
          <div className='w:full w:3/5@md mx:auto'>
            {/* <img src={process.env.PUBLIC_URL+'/images/page3_title.png'} alt="" className='max-w:full mb:16'/> */}
            <div className='f:30 f:heavy f:#20494C border-left:9|#B9D1DC|solid border-left:9|white|solid@md pt:9 pb:9 pl:7% mb:14'>重新大道 繁華盛景</div>
            <div className='pl:12%  font:18 lh:1.8 ls:1.5 f:#1A1A1A'>走過重新路，見證三重黃金年代。湯城產業園區、家樂福商圈、新北科技園區，一路銜接右岸老三重，咫尺即達新莊副都心，領御雙北黃金生活圈，日常機能一應俱全。</div>
          </div>


        </div>
      </div>


    </div>
  )
}

export default Page3