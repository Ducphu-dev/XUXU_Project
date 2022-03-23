import * as React from 'react';
import './Footer.scss';
import { useEffect, useState } from 'react';

import footerLegal from '../../Assets/images/footer/okMark.png'
import footerDropdown from '../../Assets/images/footer/dropdown.png'

import useWindowSize from "../VerticalCard/useWindowSize"

function Footer() {

  const { width, height } = useWindowSize();
  const footerLink = ["회사소개","이용약관","개인정보처리방침"," 청소년보호정책","공지사항"]
  const [toggleTabs, setToggleTabs] = useState(false)
  function openDropdown(){
    setToggleTabs(!toggleTabs)
  }

  const footerDecs = [
    {
      Decs_1: "대표자 : 이진수, 김성수",
      Decs_2:"호스팅서비스사업자 : (주)카카오엔터테인먼트"
    },
    {
      Decs_1: "사업자 등록 번호 : 220-88-02594",
      Decs_2:"통신판매업신고 : 2018-성남분당B-0004"
    },
    {
      Decs_1: "대표전화 : 1644-4755",
      Decs_2:"이메일 : contact@kakaopage.com"
    },
    {
      Decs_1: "주소 : 경기도 성남시 분당구 판교역로 221"
    },
  ]
    return (
      <footer className="footer container">
        <div className='footer-wrapper'>
          <div className='footer-wrapper_left'>
            <ul className='footerLink'>
              {
                footerLink.map((items:any,index:any)=>
                  <li  key={index}><a href="">{items}</a></li>
                )
              }
            </ul>
            <div className='footerDropdown' >
              <div className='footerDropdown-section' >
                <p className='footerDropdown-handle' onClick={openDropdown}>(주)카카오엔터테인먼트 사업자 정보 </p>
                <div className='title-dash'>|</div>
                {
                  width > 1024 ? 
                  <div className='footerDropdown-link' >
                    <a href="" >사업자 정보 확인</a>
                  </div>:""
                }
              </div>
              
              <div className={`footerDropdown-decs ${toggleTabs ? "open" : "close"}`  }>
                  {
                    footerDecs.map((items:any,index:any)=>{
                      return items.Decs_2 ? 
                      <div className='footerDropdown-decs_infor' key={index}>
                        <p>{items.Decs_1}</p>
                        <div className='title-dash'>|</div>
                        <p>{items.Decs_2}</p>
                      </div>
                      : 
                      <div className='footerDropdown-decs_infor'  key={index}><p>{items.Decs_1}</p></div>
                    })
                  }
                  {
                  width <= 1024 ? 
                    <div className='footerDropdown-link' >
                      <a href="" >사업자 정보 확인</a>
                    </div>:""
                  }
                </div>
            </div>
            <div className="footerSgin">
              <p>ⓒ Kakao Entertainment Corp.</p>
            </div>
          </div>
          <div className='footer-wrapper_right'>
            <div className="legal">
              <img src={footerLegal} alt="" />
            </div>
            <p>저작권 ok</p>
          </div>
        </div>
      </footer>
    );
}

export default Footer;