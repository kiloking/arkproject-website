import React from 'react'

function Page2() {
  return (
    <div className='flex ai:center py:8% gap:5 flex:col flex:row@md bg:#E7ECEF bg:white@md'>
      <div className='w:55%@md'>
        <div className='bg:#E7ECEF px:10%@md py:18%@md py:10% px:10%'>
          <img src={process.env.PUBLIC_URL+'/images/page2_title.png'} alt="" className='w:4/5 w:1/2@md mb:16'/>
          <div className=' font:18 lh:1.8 ls:1.5 f:#1A1A1A'>三重二重埔最美麗的豐年軸線，串接三環六線，<br />
高效路網縱貫四方，一脈串接最便捷的當代效率與時代文明。</div>
          <div className='f:18 f:#1A1A1A border-left:10|solid|white pl:15 lh:1.8 mt:15'>
            <div>1站機捷：三蘆雙捷運</div>  
            <div>9橋之都：瞬移台北核心</div> 
            <div>6鐵共構：10分鐘台北車站</div> 
            <div>1高2快：國道1號、64快、台一線</div> 
          </div>
        </div>
      </div>
      <div className='flex flex:col w:45%@md gap:5'>
        <img src={process.env.PUBLIC_URL+'/images/page2_p01.png'} alt="" className='w:full'/>
      </div>

    </div>
  )
}

export default Page2