import React from 'react'

function Page4() {
  return (
    <div className='flex ai:center py:8% gap:5 flex:col flex:row@md bg:#E7ECEF bg:white@md'>
      
      <div className='w:55%@md '>
        <div className='bg:#E7ECEF px:10% py:18%@md py:10% '>
          <div className='w:4/5@md mx:auto'>
            <img src={process.env.PUBLIC_URL+'/images/page4_title.png'} alt="" className='max-w:full mb:16'/>
            <div className='pl:7%  font:18 lh:1.8 ls:1.5 f:#1A1A1A'>三級古蹟「先嗇宮」香火鼎盛，信仰與文化的能量深植人心； 雙北曼哈頓大都會公園，國際級綠地環抱。文化與自然於此生生不息。</div>
          </div>


        </div>
      </div>
      <div className='flex flex:col w:45%@md gap:5'>
        <img src={process.env.PUBLIC_URL+'/images/page4_p01.png'} alt="" className='w:full'/>
      </div>


    </div>
  )
}

export default Page4