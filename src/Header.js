import React from 'react'

function Header() {
  return (
    <div className='w-full h-full bg-[#054D97] relative lg:min-h-screen'>
      <div className='absolute top-20 right-20 w-auto z\-5  flex-col gap-15 hidden'>
        <div><img src={process.env.PUBLIC_URL+'/images/header_btn1.png'} alt="" className='max-w-full'/></div>
        <a href="tel:0289819888" target="_blank"><img src={process.env.PUBLIC_URL+'/images/header_btn2.png'} alt="" className='max-w-full'/></a>
        <a href="https://www.facebook.com/theButterflyLandscape" target="_blank"><img src={process.env.PUBLIC_URL+'/images/header_btn3.png'} alt="" className='max-w-full'/></a>
      </div>
      <div
        className='lg:hidden'
        data-aos="fade" data-aos-duration="1500"
      >
        <img src={process.env.PUBLIC_URL+'/images/header_bg_mb.png'} alt="" className='w-full'/> 
      </div>
      <div
        className='inset-0 min-h-screen absolute  bg-center bg-no-repeat bg-cover  z-0  hidden lg:block'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/header_bg.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      >
        <div className='w-3/4  mx-auto  my-[15%]'>
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
        <img src={process.env.PUBLIC_URL+'/images/header_label.png'} alt="" className='absolute top-20 right-30 w-auto lg:hidden'/> 
        <img src={process.env.PUBLIC_URL+'/images/header_label.png'} alt="" className='absolute bottom-20 right-10 w-auto hide lg:block'/> 
      </div>
    </div>
  )
}

export default Header