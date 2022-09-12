import React,{useState} from 'react'

function Section1() {
  const [isDisplay, setIsDisplay] = useState(true);
  return (
    <div className=' bg-[#054D97] relative overflow-hidden aspect-[747/1200] ms:aspect-[1920/1044]'>

      {isDisplay ?
          <div className='bg-[#00000080] w-full h-full min-h-70vh@sm  absolute top-0 z-10 flex items-end justify-center md:hidden' onClick={()=>setIsDisplay(!isDisplay)}>
            <div className="bottom-0 w-4/5 sm:w-3/5 items-center pb-20">
              <img src={process.env.PUBLIC_URL+'/images/section1_icon1.png'} alt="" className='w-full'/>

              <img src={process.env.PUBLIC_URL+'/images/section1_icon2.png'} alt="" className='animate-slide-flow tesxt-scenter block mx-auto w-1/5'/>
        
            </div>
          </div> : ''
        }
      <div className='aspect-[747/1200]  w-full  relative  z-0  md:hidden overflow-x-scroll'> 

        <div className='w-[300vw]  h-full sm:min-h-[70vh] overflow-x-hidden overflow-y-hidden bg-bottom bg-cover bg-no-repeat transition-width'
          style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section1_map_mb.png'})`}}
        >
        </div>
        
        
      </div>
      <div
        className='inset-0 h-full absolute  bg-center bg-no-repeat bg-cover md:bg-scroll z-0  hidden md:block'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/section1_map.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      >
      </div>
    </div>
  )
}

export default Section1