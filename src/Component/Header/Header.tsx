import React from 'react';
import './Header.scss';
import { Dropdown, Menu } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

const menu = (
  <Menu>
    <Menu.Item>
      <span>ENG</span>
    </Menu.Item>
    <Menu.Item>
      <span>KR</span>
    </Menu.Item>
  </Menu>
);

function Header() {
  return (
    <section className="header" id="header">
      <nav className="nav">
        <div className="logo">
          <h1>XUXU</h1>
        </div>

        <ul className="nav-bar">
          <li className="nav-item">
            <a href="/" className="nav-link">
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Work
            </a>
          </li>
          <li className="nav-item">
            <a href="/" className="nav-link">
              Contact
            </a>
          </li>
        </ul>

        <Dropdown className="languages" overlay={menu}>
          <span>
            ENG <CaretDownOutlined />
          </span>
        </Dropdown>
      </nav>
    </section>
  );
}

export default Header;
