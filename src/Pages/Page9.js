import React from 'react'

function Page9() {
  return (
    <div className='flex ai:center py:8% gap:5 flex:col flex:row@md bg:#E7ECEF bg:white@md'>
      <div className=' w:45%@md gap:5 o:last o:first@md'>
        <img src={process.env.PUBLIC_URL+'/images/page9_p01.png'} alt="" className='w:full'/>
      </div>
      <div className='w:55%@md o:first o:last@md'>
        <div className='bg:#E7ECEF px:10%@md py:18%@md py:10% '>
          <div className='w:3/4 mx:auto'>
            <img src={process.env.PUBLIC_URL+'/images/page9_title.png'} alt="" className='max-w:full'/>
            <div className='pl:10% font:18 lh:1.8 ls:1.5 f:#1A1A1A'>2007起，冠德在每一個社區，都設置一座「冠德遠見圖書館」，並贈送與住戶相當數量的天下文化叢書。把知識，當作建築的標準配備，視為生活的基礎需求。期許以文化的力量，為下一代種下希望。</div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Page9