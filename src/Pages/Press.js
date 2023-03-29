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
        <a href="https://tw.news.yahoo.com/%E5%86%A0%E5%BE%B7%E6%90%B6%E9%80%B2%E4%B8%89%E9%87%8D-%E7%B7%8A%E9%84%B0%E6%8D%B7%E9%81%8B%E7%AB%99-201000712.html" className='transition-all hover:brightness-110' target="_blank" data-aos="fade-up" data-aos-duration="1500">
            <div className=' aspect-[385/209] bg-black  bg-center bg-cover bg-no-repeat'
                style={{backgroundImage: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg)`}}
            ></div>
          <div className='text-[#20494C] text-base font-bolder mt-2'>冠德搶進三重 緊鄰捷運站</div>
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