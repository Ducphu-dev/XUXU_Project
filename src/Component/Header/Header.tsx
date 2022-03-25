import React, { useState } from 'react';
import './Header.scss';
import { Dropdown, Menu } from 'antd';
import { useLocation, Link } from 'react-router-dom';
import {
  CaretDownOutlined,
  CloseOutlined,
  MenuOutlined,
} from '@ant-design/icons';

function Header() {
  const [isMenuShow, setIsMenuShow] = useState(false);
  const [lang, setLang] = useState('en');
  const location = useLocation();

  const onToggleMenu = () => {
    setIsMenuShow(!isMenuShow);
  };

  const handleSelectMenu = ({ item, key, keyPath, domEvent }: any) => {
    setLang(key);
  };

  const menu = (
    <Menu selectedKeys={[lang]} onClick={handleSelectMenu}>
      <Menu.Item key={'en'}>
        <span>ENG</span>
      </Menu.Item>
      <Menu.Item key={'kr'}>
        <span>KR</span>
      </Menu.Item>
    </Menu>
  );

  return (
    <section className="header" id="header">
      <div className="header-container">
        <nav className="nav">
          <Link className="logo" to="/">
            <h1>XUXU</h1>
          </Link>

          <ul className={`${isMenuShow ? 'nav-bar active' : 'nav-bar'}`}>
            <li
              className={`${
                location.pathname === '/about' ? 'nav-item active' : 'nav-item'
              }`}
            >
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li
              className={`${
                location.pathname === '/works' ? 'nav-item active' : 'nav-item'
              }`}
            >
              <Link to="/works" className="nav-link">
                Works
              </Link>
            </li>
            <li
              className={`${
                location.pathname === '/contact'
                  ? 'nav-item active'
                  : 'nav-item'
              }`}
            >
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>

            <div className="lang">
              <span
                onClick={() => setLang('en')}
                className={`${lang === 'en' ? 'active' : null}`}
              >
                ENG
              </span>
              <span
                onClick={() => setLang('kr')}
                className={`${lang === 'kr' ? 'active' : null}`}
              >
                KR
              </span>
            </div>
          </ul>

          <Dropdown className="languages" overlay={menu}>
            <span>
              {lang === 'en' ? 'ENG' : 'KR'}{' '}
              <CaretDownOutlined className="languages-toggle-icon" />
            </span>
          </Dropdown>

          {isMenuShow ? (
            <span onClick={onToggleMenu} className="toggle-menu active">
              <CloseOutlined />
            </span>
          ) : (
            <span onClick={onToggleMenu} className="toggle-menu ">
              <MenuOutlined />
            </span>
          )}
        </nav>
      </div>
    </section>
  );
}

export default Header;
