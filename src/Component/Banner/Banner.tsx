import React from 'react';
import './Banner.scss';
import TextUnderline from '../../Component/TextUnderline/TextUnderline';

function Banner() {
  return (
    <div className="banner">
      <div className="banner-left">
        <div className="banner-left-content">
          <div className="banner-title">
            <TextUnderline
              className="banner-title"
              style={{ textTransform: 'capitalize', color: '#fff' }}
            >
              C.A
            </TextUnderline>
            <br />
            <br />
            <TextUnderline
              className="banner-title"
              style={{ textTransform: 'uppercase', color: '#fff' }}
            >
              Sanfranciso
            </TextUnderline>
          </div>
          <div className="banner-desc">
            605 Standiford Avenue Suite D Modesto， California 95350， United
            States.
          </div>
        </div>
      </div>
      <div className="banner-right"></div>
    </div>
  );
}

export default Banner;
