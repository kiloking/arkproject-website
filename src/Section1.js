import React,{useState} from 'react'

function Section1() {
  const [isDisplay, setIsDisplay] = useState(true);
  return (
    <div className=' bg:#054D97 rel overflow:hidden aspect:747/1200 aspect:1920/1044@md'>

      {isDisplay ?
          <div className='bg:#00000080 w:full h:full min-h:70vh@sm abs top:0 z:2 flex ai:end jc:center hidden@md' onClick={()=>setIsDisplay(!isDisplay)}>
            <div className="bottom:0 w:4/5 w:3/5@sm ai:center pb:30">
              <img src={process.env.PUBLIC_URL+'/images/section1_icon1.png'} alt="" className='w:full'/>

              <img src={process.env.PUBLIC_URL+'/images/section1_icon2.png'} alt="" className='@oxxo|ease-in-out|3s|infinite|alternate center w:1/5'/>
        
            </div>
          </div> : ''
        }
      <div className='aspect:747/1200  w:full rel  z:0  hidden@md overflow-x:scroll'> 

        <div className='w:300vw  h:full min-h:70vh@sm overflow-x:hidden overflow-y:hidden bg:bottom bg:cover bg:no-repeat transition:width'
          style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section1_map_mb.png'})`}}
        >
        </div>
        
        
      </div>
      <div
        className='inset:0 h:full abs  bg:center bg:no-repeat bg:cover bg:scroll@md z:0  hidden block@md'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section1_map.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      >
      </div>
    </div>
  )
}

export default Section1