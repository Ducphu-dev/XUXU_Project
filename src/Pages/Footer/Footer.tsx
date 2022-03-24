import { Space, Divider } from 'antd';
import React from 'react';
import './Footer.scss';

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
            <a href="/" className="social-link">
              Behance
            </a>

            <a href="/" className="social-link">
              Facebook
            </a>

            <a href="/" className="social-link">
              Instagram
            </a>

            <a href="/" className="social-link">
              Vimeo
            </a>

            <a href="/" className="social-link">
              Artstation
            </a>
          </Space>
          <span className="copy-right">ⓒXUXU. All rights reserved.</span>
        </div>
      </div>
    </section>
  );
}

export default Footer;
