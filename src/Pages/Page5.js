import React from 'react'

function Page5() {
  return (
    <div className='block w:full aspect:951/1300 aspect:1920/951@md bg:#20494C rel pt:8% pb:18% pb:8%@md h:100vh h:auto@md'>
      <div
        className='inset:0 abs bg:left bg:left@md bg:no-repeat bg:cover  z:0  hide block@md'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/page5_bg.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      >
        <div className='w:1/2@md ml:auto  flex ai:center h:full'>
          <div className='py:8%@md flex flex:col jc:space-around ai:center h:full w:4/5 mx:auto'>
            {/* <img src={process.env.PUBLIC_URL+'/images/page5_title.png'} alt="" className='w:full'/> */}
            <div className='f:30 f:heavy f:white border-left:9|#B9D1DC|solid  pt:9 pb:9 pl:7% lh:1.5'>台灣ESG永續建築先行者 - 冠德建設</div>
            <div className='font:18 lh:1.8 ls:1.5 f:white'>以ESG永續精神為核心，翻轉土地能量、創造城市新生。
            升級進化冠德4.0+，呼應大地的呼喚，為三重市心中下一座森林，
            深耕城市，生根自然，生命新生。</div>
            <img src={process.env.PUBLIC_URL+'/images/page5_p01.png'} alt="" className='w:full'/>
          </div>

        </div>
      </div>
      <div className='hide@md flex flex:col jc:space-between h:full'>
        <div className=''>
          <div className='px:10% py:18%@md '>
            <div className='w:4/5@md mx:auto'>
              {/* <img src={process.env.PUBLIC_URL+'/images/page5_title.png'} alt="" className='max-w:full mb:16'/> */}
              <div className='f:30 f:heavy f:white border-left:9|#B9D1DC|solid border-left:9|white|solid@md pt:9 pb:9 pl:7% mb:14 lh:1.5'>台灣ESG永續建築先行者</div>
              <div className='pl:7%  font:18 lh:1.8 ls:1.5 f:white'>以ESG永續精神為核心，翻轉土地能量、創造城市新生。
            升級進化冠德4.0+，呼應大地的呼喚，為三重市心中下一座森林，
            深耕城市，生根自然，生命新生。</div>
            </div>
          </div>
        </div>
        <div  
          className='w:full aspect:864/602 bg:center bg:no-repeat bg:cover'
          style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/page5_bg_mb.png'})`}
        }>
          <div className='w:1/2 ml:auto mr:3% flex ai:center h:full '>
            <img src={process.env.PUBLIC_URL+'/images/page5_p01_mb.png'} alt="" className='max-w:full'/>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default Page5