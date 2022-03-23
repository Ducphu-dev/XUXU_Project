import { Divider, Tabs } from 'antd';
import * as React from 'react';
import BtnSearch from '../../Assets/images/header/btn_search.png';
import Stage from '../../Assets/images/header/logo-stage.svg';
import SmallStage from '../../Assets/images/header/mini-logo-stage.svg';
import Logo from '../../Assets/images/header/logo.svg';
import MenuHome from '../../Assets/images/header/menu_home.svg';
import MenuToon from '../../Assets/images/header/menu_toon.svg';
import MenuNovel from '../../Assets/images/header/menu_novel.svg';
import MenuVod from '../../Assets/images/header/menu_vod.svg';
import MenuBroadcast from '../../Assets/images/header/menu_broadcast.svg';
import MenuBook from '../../Assets/images/header/menu_book.svg';
import './Header.scss';
import Home from '../../Pages/Main/Tabs/Home/Home';
import Toon from '../../Pages/Main/Tabs/Toon/Toon';
import Novel from '../../Pages/Main/Tabs/Novel/Novel';
import Vod from '../../Pages/Main/Tabs/Vod/Vod';
import BroadCast from '../../Pages/Main/Tabs/BroadCast/BroadCast';
import Book from '../../Pages/Main/Tabs/Book/Book';

const { TabPane } = Tabs;
const tabList = [
  {
    id: 1,
    title: 'home',
    image: MenuHome,
    component: <Home />,
  },
  {
    id: 2,
    title: 'toon',
    image: MenuToon,
    component: <Toon />,
  },
  {
    id: 3,
    title: 'novel',
    image: MenuNovel,
    component: <Novel />,
  },
  {
    id: 4,
    title: 'vod',
    image: MenuVod,
    component: <Vod />,
  },
  {
    id: 5,
    title: 'broadcast',
    image: MenuBroadcast,
    component: <BroadCast />,
  },
  {
    id: 6,
    title: 'book',
    image: MenuBook,
    component: <Book />,
  },
];

function Header(props: any) {
  return (
    <div className="header-wrapper">
      <header id="header" className="header">
        <div className="header-container">
          <div className="logo">
            <img src={Logo} alt="kakaopage logo" />
          </div>

          <div className="menu">
            <div className="search-box">
              <form action="">
                <input className="search-box-input" type="text" />
              </form>
              <div className="search-box-icon">
                <img src={BtnSearch} alt="search button" />
              </div>
            </div>

            <div className="cta">
              <a href="/" className="stage">
                <img src={Stage} alt="Stage" className="stage-img" />
                <img src={SmallStage} alt="Stage" className="stage-img--sm" />
              </a>
              <div className="cta-gr">
                <a href="/" className="cta-link cta-link--cash">
                  캐시충전
                </a>
                <Divider type="vertical" className="divider" />
                <a href="/" className="cta-link">
                  로그인
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* <div className="header-container"> */}
      <Tabs className="navigation">
        {tabList.map((tab) => {
          return (
            <TabPane
              tab={<img className="navigation-image" src={tab.image} />}
              key={tab.id}
            >
              {tab.component}
            </TabPane>
          );
        })}
      </Tabs>
      {/* </div> */}
    </div>
  );
}

export default Header;
