import React,{useState} from 'react'
import { FaFacebookF,FaPhoneAlt,FaMapMarkerAlt,FaAngleDown } from 'react-icons/fa';
import { useForm, reset } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import Modal from './Components/Modal';
import axios from "axios";
function Section2() {
  // #00A3C4
  // #ffffff
  const [mailSent, setmailSent] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formStatus , setFormStatus] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: "",
      tel: "",
      mail: "",
      house_types:"",
      area:""
    }
  });
  const sendFormStatusModal = ()=>{
    setFormStatus(true)

    setTimeout(()=>{
      setFormStatus(false)
    },5000)
  }
  const onSubmit = data => {
    console.log(data)
    // const form_data = new FormData()
    // form_data.append("name", data.name);
    // form_data.append("tel", data.tel);
    // form_data.append("mail", data.mail);
    // form_data.append("house_types", data.house_types);
    // form_data.append("area", data.area);
    // dtat.checkit
    let url1 = process.env.PUBLIC_URL+'/assets/sendsee.php'
    let url2 = process.env.PUBLIC_URL+'/api/contact/index.php'
    fetch(url1, {
      method: 'POST',
      headers: {"Content-type": "application/x-www-form-urlencoded; charset=UTF-8"},
      body: Object.entries(data).map(([k,v])=>{return k+'='+v}).join('&')
    }).then((response) => {
      if (response.ok) {
        console.log(response)
        console.log('ok')
        sendFormStatusModal()
      }
    }).catch(error => console.log('error'));

    // axios({
    //   method: "post",
    //   url: url2,
    //   headers: { "content-type": "application/json" },
    //   data:data
    // })
    // .then(result => {
    //   if (result.data.sent) {
    //     console.log(result.data)
    //     console.log('ok')
    //   }
      
    // })
    // .catch(error => console.log('error'));

  };
  return (
    <div className='bg_grad w:full  py:20'>
      {formStatus &&
       <Modal>
        <div className='bg:#00000080 w:full h:full abs inset:0 z:0  ' onClick={()=>setFormStatus(!formStatus)}></div>
        <div className={`abs z:1 top:50% left:50% transform:translate(-50%,-50%)  bg:white mx:auto px:30 py:14  r:5 border:1|solid|gray-60 w:1/5 ${formStatus ? " opacity:1 blur(0) " : "opacity:0 blur(0.8) "}`}>
          <div className='f:15 f:bold mt:10 pb:15'> 表單已送出。我們將盡快電話聯絡您，詢問並安排您方便的賞屋時間。如有任何問題，歡迎直接聯繫我們，謝謝！</div>
        
        </div>
       </Modal> 
      }
      {isOpen && 
      <Modal>
        <div className='bg:#00000080 w:full h:full abs inset:0 z:0  ' onClick={()=>setIsOpen(!isOpen)}></div>
        <div className='abs z:1 top:50% left:50% transform:translate(-50%,-50%) w:3/5 h:4/5 bg:white mx:auto px:30 py:14  r:5 border:1|solid|gray-60 overflow-y:scroll'>
          <div className='f:20 f:bold mt:10 border-bottom:1|solid|#999 pb:15'>個人資料保護政策暨隱私權聲明</div>
          <div className='f:14 f:beryl-10 lh:2 mb:15 mt:15'>冠德建設（下稱「本公司」）依據個人資料保護法，向您告知以下隱私權政策規範，若您勾選「我同意隱私權政策」，將表示您已同意本公司之隱私權政策，並同意本公司依以下告知事項，就您的個人資料進行蒐集、處理及利用。您可以自由選擇是否提供相關個人資料，若您拒絕，本公司將可能無法執行本告知事項蒐集目的之業務，致無法向您提供相關服務：</div>

          <div className='f:20 f:bold mt:10'>一、蒐集目的和使用方式：</div>
          <div className='f:14 f:beryl-10 lh:2 mb:15'>本公司依據個人資料保護法及相關法令之規定，為了提供您登錄網站、索取資料、訂閱資訊、反應意見、進行各種諮詢等服務；或為了與您聯繫、行銷（包括但不限於廣告及各項商品、活動、促銷、優惠訊息之通知等）、執行消費者及客戶管理分析、執行各種公司營業登記項目或組織章程所定業務範圍內之必要行為，對您的個人資料進行蒐集、處理、利用及國際傳輸。</div>

          <div className='f:20 f:bold mt:10'>二、蒐集之個人資料類別：</div>
          <div className='f:14 f:beryl-10 lh:2 mb:15'>本公司向您蒐集的個人資料，依據「個人資料保護法之特定目的及個人資料之類別」，包含但不限於識別類、特徵類、社會情況、財務細節、商業資訊或其他等類別，例如姓名、行動電話、住家、辦公室電話號碼、E-mail、地址、身分證統一編號、性別、出生年月日或其他得以直接或間接識別您個人之資料。</div>

          <div className='f:20 f:bold mt:10'>三、個人資料利用之對象、地區、期間和方式：</div>
          <div className='f:14 f:beryl-10 lh:2 mb:15'>(一) 對象：您所提供給本公司之個人資料，可能在蒐集目的之範圍內被分享給本公司之關係企業、其他與本公司有業務往來之機構、依法有調查權之機關或其他政府機構、或其他未受中央目的事業主管機關限制之國際傳輸個人資料接收者。 (二) 地區：前開對象所在地及國際傳輸所涉地點，包含但不限於中華民國。 (三) 期間：包括個人資料蒐集目的之存續期間、依相關法令或契約約定之保存期限、或本公司因執行業務所必須之保存期間。 (四) 方式：以自動化機器或其他非自動化之利用方式，包括但不限於以書面、電話、簡訊、傳真、電子郵件、網際網路、紙本或其他基於蒐集目的且合於當時科學技術之適當方式，對您提供的個人資料進行蒐集、處理及利用。</div>

          <div className='f:20 f:bold mt:10'>四、依據個人資料保護法第3條，您得就個人資料行使以下權利：</div>
          <div className='f:14 f:beryl-10 lh:2 mb:15'>本公司對您的個人資料，將採行妥適安全之措施加以保護，並避免被不當使用。您可隨時透過本公司官方網站揭露之通訊方式，就您提供的個人資料行使下列權利：(1)請求查詢或閱覽；(2)製給複製本；(3)請求補充或更正；(4)請求停止蒐集、處理及利用；及(5)請求刪除。</div>

          <div className='f:20 f:bold mt:10'>五、本告知事項暨同意書之修訂：</div>
          <div className='f:14 f:beryl-10 lh:2 mb:15'>本公司有權隨時修訂本隱私權政策之告知事項暨同意書，並於修訂後公佈在本公司官方網站，敬請隨時查閱。若您有任何問題，敬請透過本公司官方網站揭露之通訊方式進行聯繫，我們將儘快為您服務。</div>
         
        </div>
      </Modal>  }
      <div className='w:11/12 mx:auto flex gap:50 flex-direction:column flex-direction:row@md' >
        <div className='w:full w:1/2@md' data-aos="fade-up" data-aos-duration="1500">
          <div className='f:#20494C f:25 f:bold mt:25 hidden block@md'>先嗇宮站漫步3分鐘｜28-60坪．2-4房</div>
          <div className='h:2 bg:#20494C w:full my:25 hidden block@md'></div>
          <div className='flex ai:center gap-x:5 mb:25 mt:35 mt:0@md'>
            <div className='bg:#20494C r:50 p:8 mr:5'><FaFacebookF color='white' size='20' /></div>
            <a href="https://www.facebook.com/theButterflyLandscape" target="_blank"><b className='f:#20494C f:22'>冠德方舟計劃粉絲團</b></a>
          </div>
          <div className='flex ai:center gap-x:5 mb:25'>
            <div className='bg:#20494C r:50 p:8 mr:5'><FaPhoneAlt color='white' size='20' /></div>
            <a href="tel:0289819888" target="_blank"><b className='f:#20494C f:22'>預約專線｜02-8981-9888</b></a>
          </div>
          <div className='flex ai:center gap-x:5 mb:25'>
            <div className='bg:#20494C r:50 p:8 mr:5'><FaMapMarkerAlt  color='white' size='20' /></div>
            <b className='f:#20494C f:22'>接待中心｜三重重新路五段家樂福斜對面</b>
          </div>
          <div className="mt:40">
						<iframe width="100%" height="300" className="mb30" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14458.564674461039!2d121.4714928!3d25.0462488!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5e628bbffe7dfd71!2z5YWI5ZeH5a6u!5e0!3m2!1szh-TW!2stw!4v1659426132137!5m2!1szh-TW!2stw" frameBorder="0" allowFullScreen=""></iframe>
					</div>
        </div>
        {/* 表單 */}
        <div className='w:full w:1/2@md'>
          <div className='f:#20494C f:25 f:bold mt:25 t:center t:left@md'>線上預約</div>
          <div className='h:2 bg:#20494C w:full my:25'></div>
          <form onSubmit={handleSubmit(onSubmit)} className="w:full mx:auto my:20  rel" data-aos="fade-up" data-aos-duration="1500" >
            <div className='w:full  my:20 '>
              <input type="text" className="block  bg:white  r:5  w:full
                  px:10 py:15 " placeholder="姓名"    {...register("name", { required: true})}/>
            </div>
            <div className='w:full  my:20 '>
              <input type="text" className="block  bg:white r:5 w:full 
                  px:10 py:15 " placeholder="聯絡電話"    {...register("tel", { required: true})}/>
            </div>
            <div className='w:full my:20  '>
              <input type="mail" className="block  bg:white  r:5  w:full
                  px:10 py:15 " placeholder="電子信箱"    {...register("mail", { required: true})}/>
            </div>
            <div className='w:full  my:20  rel'>
              <select className="block bg:white r:5 appearance:none w:full px:10 py:15" {...register("house_types", { required: true})}>
                <option selected value="">需要房型</option>
								<option value="28~30-2房">28~30-2房</option>
								<option value="39~43-3房">39~43-3房</option>
								<option value="49~50-大3房">49~50-大3房</option>
								<option value="59~60-4房">59~60-4房</option>
              </select>
              <div className='abs top:50% right:15 transform:translateY(-50%) pointer-events:none'> <FaAngleDown /> </div>
            </div>
            <div className='w:full  my:20 rel'>
              <select className="block bg:white  r:5 appearance:none w:full px:10 py:15" {...register("area", { required: true})}>
                <option selected value="">居住區域</option>
                <option value="台北市">台北市</option>
                <option value="三蘆區">三蘆區</option>
                <option value="新莊區">新莊區</option>
                <option value="板橋區">板橋區</option>
                <option value="新北其它區域">新北其它區域</option>
              </select>
              <div className='abs top:50% right:15 transform:translateY(-50%) pointer-events:none'> <FaAngleDown /> </div>
            </div>
            <div className='f:#20494C lh:2 f:bold f:15 w:90% mx:auto'>
              本人已知悉以下個人資料蒐集聲明事項您所登錄的個人資料將作為以下用途：一、本網站所載之相關事項通知 二、客戶管理與服務 三、本公司行銷業務之推廣
              <div className='flex ai:center jc:center  '>

                <input type="checkbox"  className='px:5 mr:5' id="checkit" name="checkit" defaultChecked {...register("checkit", { required: true})}/>
                <label htmlFor="checkit" className='f:white'>我同意通過電話或郵件方式與我聯絡</label>
								<div className='f:#ca0916 ml:10 t:underline text-underline-offset: cursor:pointer' onClick={()=>setIsOpen(true)}> 個人資料聲明事項 </div>
              </div>
            </div>
            <div className='flex w:3/4 mx:auto gap:10 my:15'>
              <button className='bg:#20494C px:8 py:12 r:5 f:bold w:full t:14 f:#fff' type='submit'>送出</button>
              <button className='bg:#20494C px:8 py:12 r:5 f:bold w:full t:14 f:#fff' type='reset'>清除</button>
            </div>
            <div>{error}  {mailSent}</div>            
          </form>
        </div>
      </div>
      {/* 冠德大直3號出口 冠德文心綻 了解更多冠德 */}
      
      <div className='w:11/12 mx:auto pb:30'>
        <div className='h:2 bg:#20494C w:full my:65'></div>
        <div className='w:8/12 mx:auto flex gap:50 flex-direction:column flex-direction:row@md'>
          <a href="https://www.kindom.com.tw/artofliving/?utm_source=google&utm_medium=pmax&utm_campaign=0812&gclid=CjwKCAjwo_KXBhAaEiwA2RZ8hM6YN0LtKzVCE3BemS1mpjqFAzQ2vAel8Ypk7fb8tK5oFmCLW7YKkBoCDtEQAvD_BwE" target="_blank" data-aos="fade-up" data-aos-duration="1500">
            <img src={process.env.PUBLIC_URL+'/images/section2_p01.png'} alt="" className='w:full'/>
            <div className='f:#20494C f:15 f:bolder mt:15'>冠德大直3號出口</div>
          </a>
          <a href="https://www.kindom.com.tw/g8/" target="_blank" data-aos="fade-up" data-aos-duration="1500">
            <img src={process.env.PUBLIC_URL+'/images/section2_p02.png'} alt="" className='w:full'/>
            <div className='f:#20494C f:15 f:bolder mt:15'>冠德文心綻</div>
          </a>
          <a href="https://www.kindom.com.tw/portfolio/" target="_blank" data-aos="fade-up" data-aos-duration="1500">
            <img src={process.env.PUBLIC_URL+'/images/section2_p03.png'} alt="" className='w:full'/>
            <div className='f:#20494C f:15 f:bolder mt:15'>了解更多冠德</div>
          </a>
        </div>

      </div>


    </div>
  )
}

export default Section2