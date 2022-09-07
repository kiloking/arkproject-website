import React from 'react'

function Page3() {
  return (
    <div className='flex ai:center py:8% gap:5 flex:col flex:row@md bg:#E7ECEF bg:white@md'>
      <div className='flex flex:col w:45%@md gap:5 o:last  o:first@md '>
        <img src={process.env.PUBLIC_URL+'/images/page3_p01.png'} alt="" className='w:full'/>
      </div>
      <div className='w:55%@md o:first o:last@md'>
        <div className='bg:#E7ECEF px:10%@md py:18%@md py:10% px:10% '>
          <div className='w:full w:3/5@md mx:auto'>
            <img src={process.env.PUBLIC_URL+'/images/page3_title.png'} alt="" className='max-w:full mb:16'/>
            <div className='pl:12%  font:18 lh:1.8 ls:1.5 f:#1A1A1A'>走過重新路，見證三重黃金年代。湯城產業園區、家樂福商圈、新北科技園區，一路銜接右岸老三重，咫尺即達新莊副都心，領御雙北黃金生活圈，日常機能一應俱全。</div>
          </div>


        </div>
      </div>


    </div>
  )
}

export default Page3