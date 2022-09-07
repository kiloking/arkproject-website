import React from 'react'

function Page1() {
  return (
    <div className='flex ai:center py:8% gap:5 flex:col flex:row@md bg:#E7ECEF bg:white@md  '>
      <div className='flex flex:col w:45%@md gap:5 o:last o:first@md px:0% px:0@md'>
        <img src={process.env.PUBLIC_URL+'/images/page1/page1_p01.png'} alt="" className='w:full '/>
        <img src={process.env.PUBLIC_URL+'/images/page1/page1_p02.png'} alt="" className='w:full '/>
      </div>
      <div className='w:55%@md o:first o:last@md'>
        <div className='bg:#E7ECEF px:10%@md py:18%@md py:10% '>
          <div className='w:3/4 mx:auto'>
            <img src={process.env.PUBLIC_URL+'/images/page1/page1_title.png'} alt="" className='max-w:full'/>
            <div className='pl:10% font:18 lh:1.8 ls:1.5 f:#1A1A1A'>新北國際都心定錨三重・2026預見新湛然，匯聚綠景廣場、動能商圈、科技工業、雲端市政，打造複合型行政服務空間，喚醒三重地塊榮景。</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Page1