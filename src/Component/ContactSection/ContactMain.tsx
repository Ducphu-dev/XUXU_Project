import { Button, Divider } from 'antd';
import React from 'react';
import TextUnderline from '../TextUnderline/TextUnderline';
import './ContactMain.scss';

function ContactMain() {
  const subTitle = 'You can select duplicate work details.';

  return (
    <section className="contact-main">
      <div className="contact-main-container">
        <div className="contact-main-content">
          <div className="contact-about">
            <div className="contact-about-content">
              <div className="contact-about-top">
                <TextUnderline className="contact-about-title">
                  Contact
                </TextUnderline>
                <br />
                <TextUnderline className="contact-about-title">
                  XUXU
                </TextUnderline>

                <p className="contact-about-desc">
                  We are waiting for you to open a new chapter in the brand. To
                  break down the territory and rock the existing market, we
                  provide solutions with extensive ideas in various ways.
                </p>
              </div>
              <div className="contact-about-bottom">
                <div className="contact-about-sub-title-wr">
                  <TextUnderline className="contact-about-sub-title">
                    You{' '}
                  </TextUnderline>
                  &nbsp;&nbsp;&nbsp;
                  <TextUnderline className="contact-about-sub-title">
                    can
                  </TextUnderline>
                  &nbsp;&nbsp;&nbsp;
                  <TextUnderline className="contact-about-sub-title">
                    select
                  </TextUnderline>
                  <br />
                  <TextUnderline className="contact-about-sub-title">
                    duplicate
                  </TextUnderline>
                  &nbsp;&nbsp;&nbsp;
                  <TextUnderline className="contact-about-sub-title">
                    work
                  </TextUnderline>
                  &nbsp;&nbsp;&nbsp;
                  <TextUnderline className="contact-about-sub-title">
                    details.
                  </TextUnderline>
                  <br />
                </div>

                <div className="button-gr">
                  <Button className="button" size="large">
                    Fine Art
                  </Button>
                  <Button className="button" size="large">
                    Graphic Design
                  </Button>
                  <Button className="button" size="large">
                    Illustration
                  </Button>
                  <Button className="button" size="large">
                    Advertising
                  </Button>
                  <Button className="button" size="large">
                    Game
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <div className="user-box">
              <input type="text" className="user-box-input" required />
              <label className="user-box-label">Name</label>
            </div>
            <div className="user-box">
              <input type="text" className="user-box-input" required />
              <label className="user-box-label">Company</label>
            </div>
            <div className="user-box">
              <input type="text" className="user-box-input" required />
              <label className="user-box-label">Email</label>
            </div>
            <div className="user-box">
              <textarea rows={10} className="user-box-input" required />
              <label className="user-box-label">
                Tell me more about your project
              </label>
            </div>
            <button className="contact-form-bottom">
              <TextUnderline
                bottom={-1}
                style={{ fontSize: 24, lineHeight: '30px' }}
                borderheight={3}
              >
                Send
              </TextUnderline>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactMain;
