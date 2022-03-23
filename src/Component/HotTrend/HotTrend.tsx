import { Card, Carousel } from 'antd';
import React, { useLayoutEffect, useRef, useState } from 'react';
import prevImg from '../../Assets/images/HotTrend/ic-banner-paging-back-nor.svg';
import nextImg from '../../Assets/images/HotTrend/ic-banner-paging-next-nor.svg';
import useWindowSize from '../VerticalCard/useWindowSize';
import './HotTrend.scss';
type Props = {
  hotTrendList: any;
};
const HotTrend = ({ hotTrendList }: Props) => {
  const [indexOfList, setIndexOfList] = useState(1);
  const [btnItem, setBtnItem] = useState(true);
  const { width, height } = useWindowSize();
  const [centerMode, setCenterMode] = useState(false);
  const carouselRef = useRef<any>();
  const onChange = (number: number) => {
    setIndexOfList(number + 1);
    if (number + 1 === hotTrendList.length) {
      setBtnItem(false);
    } else {
      setBtnItem(true);
    }
  };
  const handleNext = () => {
    carouselRef.current.next();
  };
  const handlePrev = () => {
    carouselRef.current.prev();
  };
  useLayoutEffect(() => {
    if (width <= 1024) {
      setCenterMode(true);
    } else {
      setCenterMode(false);
    }
  }, [width]);
  return (
    <div className="trend">
      <Card className="trend-card">
        <div className="trend-img">
          <Carousel
            centerMode={centerMode}
            infinite
            autoplay
            speed={200}
            useTransform
            className="img-list"
            afterChange={onChange}
            ref={carouselRef}
          >
            {hotTrendList.map((item: any, index: number) => (
              <div key={index}>
                <div className="img-big">
                  <img className="img-main" src={item.img} alt="" />
                  {item.text_btn ? (
                    <div className="trend-btn">{item?.text_btn}</div>
                  ) : null}
                </div>
                <div className="trend-content">
                  <div className="trend-text1">{item.text1}</div>
                  <div className="trend-text2">{item.text2}</div>
                  <div className="trend-icon">
                    {item.icon ? (
                      <img className="trend-icon-1" src={item.icon} alt="" />
                    ) : null}
                    <div className="trend-icon-time">
                      {item.icon_time ? (
                        <img src={item?.icon_time} alt="" />
                      ) : null}
                      <div className="trend-icon-text-time">
                        {item.text_time}
                      </div>
                    </div>
                    {item.icon_line ? (
                      <img
                        className="trend-icon-line"
                        src={item.icon_icon_line}
                        alt=""
                      />
                    ) : null}
                    <div className="trend-icon-person">
                      {item.icon_person ? (
                        <img src={item.icon_person} alt="" />
                      ) : null}
                      <div className="trend-icon-text-person">
                        {item.text_view}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
          <img
            src={prevImg}
            alt=""
            className="btn-prev"
            onClick={() => handlePrev()}
          ></img>
          <div className={`trend-btn-slide ${btnItem ? '' : 'none-btn'}`}>
            <div className="slide-btn-item">
              <div className="slide-number">{indexOfList}</div>
              <p className="slide-number">/</p>
              <div className="slide-number">{hotTrendList.length}</div>
            </div>
          </div>
          <img
            src={nextImg}
            alt=""
            className="btn-next"
            onClick={() => handleNext()}
          ></img>
        </div>
      </Card>
    </div>
  );
};
export default HotTrend;
