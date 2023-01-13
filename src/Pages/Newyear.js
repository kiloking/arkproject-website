import React from 'react'

function Newyear() {
  return (
    <div className='w-full bg-rose-800 relative '>
      <img src={process.env.PUBLIC_URL+'/images/newyear_bg.png'} alt=""  className='w-full' data-aos="fade" data-aos-duration="1500"/>
    </div>
  )
}

export default Newyear