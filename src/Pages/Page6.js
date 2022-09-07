import React from 'react'

function Page6() {
  return (
    <div className='flex ai:center py:8% gap:5 flex:col flex:row@md bg:#E7ECEF bg:white@md'>
      
      <div className='w:55%@md '>
        <div className=' px:10%@md py:18%@md py:10% '>
          <div className='w:4/5 mx:auto'>
            <img src={process.env.PUBLIC_URL+'/images/page6_title.png'} alt="" className='max-w:full mb:16'/>
            <div className='pl:7%  font:18 lh:1.8 ls:1.5 f:#1A1A1A'>「根基營造」承攬政府公路工程、企業總部、民間廠房、醫療大樓及住宅社區，經典業績如：台灣最美也最嚴峻的公路「台９線」工程、中央研究院、新竹光子園區、海基會等。</div>

            <img src={process.env.PUBLIC_URL+'/images/page6_logo.png'} alt="" className='max-w:3/5 mx:auto mt:8%'/>

          </div>


        </div>
      </div>
      <div className='flex flex:col w:45%@md gap:5'>
        <img src={process.env.PUBLIC_URL+'/images/page6_p01.png'} alt="" className='w:full'/>
      </div>


    </div>
  )
}

export default Page6