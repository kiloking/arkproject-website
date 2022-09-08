import React from 'react'

function Header() {
  return (
    <div className='w:full h:full bg:#054D97 rel min-h:100vh@md'>
      <div className='abs top:30 right:30 w:auto z:5  flex:col gap:15 hidden'>
        <div><img src={process.env.PUBLIC_URL+'/images/header_btn1.png'} alt="" className='max-w:full'/></div>
        <a href="tel:0289819888" target="_blank"><img src={process.env.PUBLIC_URL+'/images/header_btn2.png'} alt="" className='max-w:full'/></a>
        <a href="https://www.facebook.com/theButterflyLandscape" target="_blank"><img src={process.env.PUBLIC_URL+'/images/header_btn3.png'} alt="" className='max-w:full'/></a>
      </div>
      <div
        className='hidden@md'
        data-aos="fade" data-aos-duration="1500"
      >
        <img src={process.env.PUBLIC_URL+'/images/header_bg_mb.png'} alt="" className='w:full'/> 
      </div>
      <div
        className='inset:0 min-h:100vh abs  bg:center bg:no-repeat bg:cover  z:0  hidden block@md'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/header_bg.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      >
        <img src={process.env.PUBLIC_URL+'/images/header_logo.png'} alt="" className='abs top:30 right:30 w:auto hidden@md'/> 
        <img src={process.env.PUBLIC_URL+'/images/header_logo.png'} alt="" className='abs bottom:30 right:100 w:auto hide block@md'/> 
      </div>
    </div>
  )
}

export default Header