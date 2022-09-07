import React from 'react'

function Page5() {
  return (
    <div className='block w:full aspect:951/1300 aspect:1920/951@md bg:#054D97 rel py:8%'>
      <div
        className='inset:0 abs bg:left bg:left@md bg:no-repeat bg:cover  z:0  '
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/page5_bg.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      >
        <div className='w:1/2@md ml:auto  flex ai:center h:full'>
          <div className='py:8%@md flex flex:col jc:space-around ai:center h:full w:4/5 mx:auto'>
            <img src={process.env.PUBLIC_URL+'/images/page5_title.png'} alt="" className='w:full'/>
            <div className='font:18 lh:1.8 ls:1.5 f:white'>以ESG永續精神為核心，翻轉土地能量、創造城市新生。
            升級進化冠德4.0+，呼應大地的呼喚，為三重市心中下一座森林，
            深耕城市，生根自然，生命新生。</div>
            <img src={process.env.PUBLIC_URL+'/images/page5_p01.png'} alt="" className='w:full'/>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Page5