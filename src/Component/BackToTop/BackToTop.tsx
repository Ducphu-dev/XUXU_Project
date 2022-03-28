import React, { useState } from 'react';
import arrowTop from '../../Assets/images/BackToTop/36-px-bk-scrup.png';
import './BackToTop.scss';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div
      className={`${visible ? 'back-to-top active' : 'back-to-top'}`}
      onClick={scrollToTop}
    >
      <img src={arrowTop} alt="back to top" />
    </div>
  );
}

export default BackToTop;
