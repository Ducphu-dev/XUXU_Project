import React, { useState } from 'react';
import './Header.scss';
import { Dropdown, Menu } from 'antd';
import {
  CaretDownOutlined,
  CloseOutlined,
  MenuOutlined,
} from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item key={'eng'}>
      <span>ENG</span>
    </Menu.Item>
    <Menu.Item key={'kr'}>
      <span>KR</span>
    </Menu.Item>
  </Menu>
);

function Header() {
  const [isMenuShow, setIsMenuShow] = useState(false);

  const onToggleMenu = () => {
    setIsMenuShow(!isMenuShow);
  };

  return (
    <section className="header" id="header">
      <div className="header-container">
        <nav className="nav">
          <a className="logo" href="/">
            <h1>XUXU</h1>
          </a>

          <ul className={`${isMenuShow ? 'nav-bar active' : 'nav-bar'}`}>
            <li className="nav-item">
              <a href="/about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="/work" className="nav-link">
                Works
              </a>
            </li>
            <li className="nav-item">
              <a href="/contact" className="nav-link">
                Contact
              </a>
            </li>

            <div className="lang">
              <span className="active">ENG</span>
              <span>KR</span>
            </div>
          </ul>

          <Dropdown className="languages" overlay={menu}>
            <span>
              ENG <CaretDownOutlined className="languages-toggle-icon" />
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
