import { Card } from 'antd';
import React from 'react';
import VerticalCardItemFour from './VerticalCardItemFour/VerticalCardItemFour';
import './VerticalCard.scss';
import iconArrow from '../../Assets/images/VerticalCard/icon-arrow.svg';
import VerticalCardItemThree from './VerticalCardItemThree/VerticalCardItemThree';
import VerticalCardRank from './VerticalCardRank/VerticalCardRank';

type Props = {
  cardList: any;
  title: string;
  volume: string;
  title1?: string;
  title2?: string;
  rank?: boolean;
};

const VerticalCard = ({
  cardList,
  title,
  volume,
  title1,
  title2,
  rank,
}: Props) => {
  return (
    <div className="vertical-card">
      <Card>
        <div className="vertical-card-header">
          <div className="vertical-card-header-left">
            {title1 ? (
              <>
                <a className="vertical-card-header-left-title-1" href="/#">
                  {title1}
                </a>
                <div className="vertical-card-header-left-title-dash">|</div>

                <a className="vertical-card-header-left-title" href="/#">
                  {title2}
                </a>
              </>
            ) : (
              <>
                <a className="vertical-card-header-left-title" href="/#">
                  {title}
                </a>
                <a className="vertical-card-header-left-volume" href="/#">
                  {volume}
                </a>
              </>
            )}
          </div>
          <div className="vertical-card-header-right">
            <p className="vertical-card-header-right-more">더보기</p>
            <img src={iconArrow} alt="" className="icon-arrow" />
          </div>
        </div>
        {cardList.length % 2 === 0 && !cardList.rank ? (
          <div className="card-list">
            {cardList.map((item: any, index: number) => (
              <VerticalCardItemFour key={index} cardItem={item} />
            ))}
          </div>
        ) : null}
        {cardList.length % 2 === 1 && rank === true ? (
          <div className="card-list-rank">
            {cardList.map((item: any, index: number) => (
              <VerticalCardRank key={index} cardItem={item} />
            ))}
          </div>
        ) : null}
        {cardList.length % 2 === 1 && !rank ? (
          <div className="card-list-three">
            {cardList.map((item: any, index: number) => (
              <VerticalCardItemThree key={index} cardItem={item} />
            ))}
          </div>
        ) : null}
      </Card>
    </div>
  );
};

export default VerticalCard;
