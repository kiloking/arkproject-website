import React from 'react'

function Page9() {
  return (
    <div className='flex ai:center jc:space-between pt:8% pb:18% pb:8%@md  gap:5 flex:col flex:row@md bg:#E7ECEF bg:white@md h:100vh h:auto@md'>
      <div className=' w:45%@md gap:5 o:last o:first@md px:10% px:0@md' data-aos="fade-up" data-aos-duration="1500">
        <img src={process.env.PUBLIC_URL+'/images/page9_p01.png'} alt="" className='w:full'/>
      </div>
      <div className='w:55%@md o:first o:last@md' data-aos="fade" data-aos-duration="1500">
        <div className='bg:#E7ECEF px:10%@md py:18%@md '>
          <div className='w:3/4 mx:auto'>
            {/* <img src={process.env.PUBLIC_URL+'/images/page9_title.png'} alt="" className='max-w:full'/> */}
            <div className='f:30 f:heavy f:#20494C border-left:9|#B9D1DC|solid border-left:9|white|solid@md pt:9 pb:9 pl:7% mb:14 lh:1.5'>文化，最好的永續建設</div>
            <div className='pl:10% font:18 lh:1.8 ls:1.5 f:#1A1A1A'>2007起，冠德在每一個社區，都設置一座「冠德遠見圖書館」，並贈送與住戶相當數量的天下文化叢書。把知識，當作建築的標準配備，視為生活的基礎需求。期許以文化的力量，為下一代種下希望。</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Page9