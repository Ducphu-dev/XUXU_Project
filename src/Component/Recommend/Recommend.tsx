import { Card, Carousel } from 'antd';
import React, { useRef, useState } from 'react';
import './Recommend.scss';
import iconArrow from '../../Assets/images/VerticalCard/icon-arrow.svg';
import appDownload from '../../Assets/images/Recommend/appDownload.png';
import nextImg from '../../Assets/images/Recommend/icon_topBanner_next.png';
import prevImg from '../../Assets/images/Recommend/icon_topBanner_prev.png';
import useWindowSize from '../VerticalCard/useWindowSize';

type Props = {
  img: any;
};

const Recommend = ({ img }: Props) => {
  const [indexOfList, setIndexOfList] = useState(1);
  const { width, height } = useWindowSize();
  const carouselRef = useRef<any>();
  const onChange = (number: number) => {
    setIndexOfList(number + 1);
  };
  const handleNext = () => {
    carouselRef.current.next();
  };

  const handlePrev = () => {
    carouselRef.current.prev();
  };
  return (
    <div className="recommend">
      <Card className="recommend-card">
        <div className="recommend-header">
          <div className="recommend-header-left">
            <a className="recommend-header-left-title" href="/#">
              추천 이벤트
            </a>
          </div>
          <div className="recommend-header-right">
            <p className="recommend-header-right-more">더보기</p>
            <img src={iconArrow} alt="" className="icon-arrow" />
          </div>
        </div>
        <div className="recommend-img">
          {width <= 1024 ? (
            <div className="recommend-img-list">
              {img.map((item: any, index: number) => (
                <div key={index} className="recommend-img-main">
                  <img src={item.img} alt="" />
                </div>
              ))}
            </div>
          ) : (
            <>
              <Carousel
                className="img-list"
                afterChange={onChange}
                ref={carouselRef}
              >
                {img.map((item: any, index: number) => (
                  <div key={index}>
                    <img className="img-main" src={item.img} alt="" />
                  </div>
                ))}
              </Carousel>
              <div className="recommend-btn-slide">
                <img
                  src={prevImg}
                  alt=""
                  className="btn-prev"
                  onClick={() => handlePrev()}
                ></img>
                <div className="slide-btn-item">
                  <div className="slide-number">{indexOfList}</div>
                  <p className="slide-number">/</p>
                  <div className="slide-number">{img.length}</div>
                </div>
                <img
                  src={nextImg}
                  alt=""
                  className="btn-next"
                  onClick={() => handleNext()}
                ></img>
              </div>
            </>
          )}
        </div>
      </Card>
      <div className="recommend-btn">
        <img className="recommend-btn-img" src={appDownload} alt="" />
      </div>
    </div>
  );
};

export default Recommend;
