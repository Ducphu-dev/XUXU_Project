import { Carousel } from 'antd';
import React, { useLayoutEffect, useState } from 'react';
import label from '../../Assets/images/ScrollBanner/icon_waitfree12_new.png';
import banner2 from '../../Assets/images/ScrollBanner/resource (1).png';
import banner3 from '../../Assets/images/ScrollBanner/resource (2).png';
import banner1 from '../../Assets/images/ScrollBanner/resource.png';
import useWindowSize from '../VerticalCard/useWindowSize';
import './ScrollBanner.scss';

const data = [
  {
    id: 1,
    src: banner1,
    label: null,
  },
  {
    id: 2,
    src: banner2,
    label: label,
  },
  {
    id: 1,
    src: banner3,
    label: null,
  },
];

function ScrollBanner() {
  const { width, height } = useWindowSize();
  const [isDesktop, setIsDesktop] = useState(false);

  useLayoutEffect(() => {
    if (width <= 1024) {
      setIsDesktop(true);
    } else {
      setIsDesktop(false);
    }
  }, [width]);

  const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return <div className={className} onClick={onClick} />;
  };

  const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return <div className={className} onClick={onClick} />;
  };

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: false,
    draggable: true,
  };

  return (
    <section className="scroll-banner">
      <div className="scroll-banner-container">
        {isDesktop ? (
          <Carousel arrows {...settings} centerMode centerPadding="30px">
            {data.map((item) => (
              <BanneItem src={item.src} label={item.label} key={item.id} />
            ))}
          </Carousel>
        ) : (
          <Carousel arrows {...settings}>
            {data.map((item) => (
              <BanneItem src={item.src} label={item.label} key={item.id} />
            ))}
          </Carousel>
        )}
      </div>
    </section>
  );
}

const BanneItem = (props: any) => {
  const {
    src,
    label,
    styles = {
      position: 'absolute',
      top: 10,
      right: 10,
      width: 20,
      height: 20,
    },
  } = props;
  return (
    <div className="scroll-banner-item">
      <img src={src} alt={banner1} />
      {label && (
        <span className="scroll-banner-label" style={styles}>
          <img src={label} alt="new" />
        </span>
      )}
    </div>
  );
};

export default ScrollBanner;
