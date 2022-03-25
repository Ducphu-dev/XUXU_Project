import { Space, Divider } from 'antd';
import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <section className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-main">
          <Space
            className="social-list"
            size={9}
            split={
              <Divider
                type="vertical"
                style={{
                  margin: 0,
                  borderLeft: '2px solid #111111',
                  height: '0.8em',
                }}
              />
            }
          >
            <Link to="/" className="social-link">
              Behance
            </Link>

            <Link to="/" className="social-link">
              Facebook
            </Link>

            <Link to="/" className="social-link">
              Instagram
            </Link>

            <Link to="/" className="social-link">
              Vimeo
            </Link>

            <Link to="/" className="social-link">
              Artstation
            </Link>
          </Space>
          <span className="copy-right">ⓒXUXU. All rights reserved.</span>
        </div>
      </div>
    </section>
  );
}

export default Footer;
