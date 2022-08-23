import React from 'react'

function Header() {
  return (
    <div className='min-h:100vh bg:#054D97 rel'>
      <div
        className='inset:0 abs  bg:center bg:no-repeat bg:cover   z:0  hidden@md'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/header_bg_mb.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      ></div>
      <div
        className='inset:0 abs  bg:center bg:no-repeat bg:cover  z:0  hidden block@md'
        style={{backgroundImage: `url(${process.env.PUBLIC_URL +'/images/header_bg.png'})`}}
        data-aos="fade" data-aos-duration="1500"
      >
        <img src={process.env.PUBLIC_URL+'/images/header_logo.png'} alt="" className='abs top:30 right:30 w:auto'/> 
      </div>
    </div>
  )
}

export default Header