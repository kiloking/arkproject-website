import React from 'react'

function Page1() {
  return (
    <div className='flex ai:center pt:8% pb:18% pb:8%@md gap:5 flex:col flex:row@md bg:white bg:white@md h:100vh h:auto@md jc:space-between '>
      <div className='flex flex:col w:45%@md gap:5 o:last o:first@md px:10% px:0@md' data-aos="fade-up" data-aos-duration="1500">
        <img src={process.env.PUBLIC_URL+'/images/page1/page1_p01.png'} alt="" className='w:full '/>
        <img src={process.env.PUBLIC_URL+'/images/page1/page1_p02.png'} alt="" className='w:full '/>
      </div>
      <div className='w:55%@md o:first o:last@md' data-aos="fade" data-aos-duration="1500">
        <div className='bg:white bg:#E7ECEF@md px:10%@md py:18%@md py:10%@md '>
          <div className='w:3/4 mx:auto'>
            {/* <img src={process.env.PUBLIC_URL+'/images/page1/page1_title.png'} alt="" className='max-w:full'/> */}
            <div className='f:30 f:heavy f:#20494C border-left:9|#B9D1DC|solid border-left:9|white|solid@md pt:9 pb:9 pl:7% mb:14'>新北第二・市政都心</div>
            <div className='pl:10% font:18 lh:1.8 ls:1.5 f:#1A1A1A'>新北國際都心定錨三重・2026預見新湛然，匯聚綠景廣場、動能商圈、科技工業、雲端市政，打造複合型行政服務空間，喚醒三重地塊榮景。</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Page1