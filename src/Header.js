import React from 'react'

function Header() {
  return (
    <div className='w-full h-full bg-[#ffffff] relative lg:min-h-screen'>
      <div className='absolute top-20 right-20 w-auto z\-5  flex-col gap-15 hidden'>
        <div><img src={process.env.PUBLIC_URL+'/images/header_btn1.png'} alt="" className='max-w-full'/></div>
        <a href="tel:0289819888" target="_blank"><img src={process.env.PUBLIC_URL+'/images/header_btn2.png'} alt="" className='max-w-full'/></a>
        <a href="https://www.facebook.com/theButterflyLandscape" target="_blank"><img src={process.env.PUBLIC_URL+'/images/header_btn3.png'} alt="" className='max-w-full'/></a>
      </div>
      <div
        className='lg:hidden aspect-[862/1152]  bg-center bg-no-repeat bg-cover flex flex-col items-center justify-center gap-5 z-0'
        data-aos="fade" data-aos-duration="1500"
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/header_bg_mb.png'})`}}
      >

        <div className='w-3/5 mx-auto'><img src={process.env.PUBLIC_URL+'/images/header_logo_mb.png'} alt=""  className='max-w-full mx-auto'/></div> 
        <div className='w-3/5 mx-auto'><img src={process.env.PUBLIC_URL+'/images/header_fish_mb.png'} alt=""  className='max-w-full mx-auto'/></div> 
        <div className='w-2/3 mx-auto'><img src={process.env.PUBLIC_URL+'/images/header_title_mb.png'} alt=""  className='max-w-full mx-auto'/></div> 
        <div className='w-[1px] h-16 mx-auto bg-[#1E484B] my-3'></div>        
        <div className='w-1/2 mx-auto'><img src={process.env.PUBLIC_URL+'/images/header_subtitle_mb.png'} alt=""  className='max-w-full mx-auto'/></div> 
        <img src={process.env.PUBLIC_URL+'/images/header_label.png'} alt="" className='absolute bottom-5 right-5 w-1/5 lg:hidden'/> 
      </div>
      <div
        className='inset-0 min-h-screen absolute  bg-center bg-no-repeat bg-cover  z-0  hidden lg:block'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/header_bg.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      >
        <div className='w-3/4  mx-auto  my-[15%] md:my-[5%] lg:my-[12%]'>
          <div className='flex flex-wrap justify-center items-center text-center '>
            <div className='w-1/2'></div>
            <div className='w-1/2 mb-32 p-5'> <img src={process.env.PUBLIC_URL+'/images/header_logo.png'} alt=""  className='max-w-full mx-auto'/></div>
            <div className='w-1/2  relative pr-20'> 
              <img src={process.env.PUBLIC_URL+'/images/header_subtitle.png'} alt="" className='max-w-full ' />
              <div className='h-[1px] w-[38%] bg-[#20494C]  absolute top-[15%] -left-[42%]' ></div>
            </div>
            <div className='w-1/2 p-5'> <img src={process.env.PUBLIC_URL+'/images/header_title.png'} alt="" className='max-w-full mx-auto' /></div>
          </div>

        </div>
        
        <img src={process.env.PUBLIC_URL+'/images/header_label.png'} alt="" className='absolute bottom-10 right-10 w-1/6 hide md:w-[12%] md:bottom-5 md:right-5  lg:block'/> 
      </div>
      
    </div>
  )
}

export default Header