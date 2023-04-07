import React from 'react'

function Press() {
  return (
    <div className='w-full mx-auto  bg-[#00a3c4] py-10'>
      <div className='w-8/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 justify-center '>
        <a href="https://ctee.com.tw/news/real-estate/761768.html" className='transition-all hover:brightness-110' target="_blank" data-aos="fade-up" data-aos-duration="1500">
          <div className=' aspect-[385/209] bg-black  bg-center bg-cover bg-no-repeat'
            style={{backgroundImage: `url(https://cteecors.azureedge.net/wp-content/uploads/2022/11/59fb5ba9677c95763147a0f7474753ff.jpg)`}}
            ></div>
          <div className='text-[#20494C] text-base font-bolder mt-2'>冠德三重百億級大案 將開賣</div>
        </a>
        <a href="https://house.ettoday.net/news/2467599" className='transition-all hover:brightness-110' target="_blank" data-aos="fade-up" data-aos-duration="1500">
            <div className=' aspect-[385/209] bg-black  bg-center bg-cover bg-no-repeat'
                style={{backgroundImage: `url(${process.env.PUBLIC_URL+'/images/news_cover02.jpg'})`}}
            ></div>
          <div className='text-[#20494C] text-base font-bolder mt-2'>ESG永續宅三重首發「冠德心天匯」　湛放左岸雙捷商圈</div>
        </a>
        <a href="https://house.ettoday.net/news/2426486" className='transition-all hover:brightness-110' target="_blank" data-aos="fade-up" data-aos-duration="1500">
            <div className=' aspect-[385/209] bg-black  bg-center bg-cover bg-no-repeat'
                style={{backgroundImage: `url(https://cdn2.ettoday.net/images/6817/6817878.jpg)`}}
            ></div>
          <div className='text-[#20494C] text-base font-bolder mt-2'>冠德心天匯公益年菜送暖　讓愛永續留存三重左岸</div>
        </a>
      </div>

    </div>
  )
}

export default Press