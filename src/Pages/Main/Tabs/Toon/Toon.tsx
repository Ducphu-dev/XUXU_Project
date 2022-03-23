import React from 'react';
import { TopTrendingList } from '../../../../Assets/data/TopTrending';
import { HotTrendList } from '../../../../Assets/data/HotTrend';
import {
  cardList1,
  cardList2,
  cardList3,
  cardList4,
  cardList5,
  cardList6,
  cardList7,
  cardList8,
  cardList9,
} from '../../../../Assets/data/verticalCard';
import { RecommendListImg } from '../../../../Assets/data/Recommend';

// Page
import TrendingTop from '../../../../Component/TrendingTop/TrendingTop';
import TrendingNoNav from '../../../../Component/TrendingTop/TrendingNoNav';
import HotTrend from '../../../../Component/HotTrend/HotTrend';
import CallToActionButtons from '../../../../Component/CallToActionButtons/CallToActionButtons';
import ScrollBanner from '../../../../Component/ScrollBanner/ScrollBanner';
import VerticalCard from '../../../../Component/VerticalCard/VerticalCard';
import Recommend from '../../../../Component/Recommend/Recommend';



function Toon() {
  return <div>
    <HotTrend hotTrendList={HotTrendList} />
    <CallToActionButtons />
    <ScrollBanner />

    <TrendingTop
      TopTrendingList={TopTrendingList}
      title="요일 연재 TOP"
      // btn="btn"
      numberLimited={10}
    />
    <TrendingNoNav
      TopTrendingList={TopTrendingList}
      title="기대신작 TOP"
      // btn="btn"
      numberLimited={5}
    />
    <TrendingNoNav
      TopTrendingList={TopTrendingList}
      title="로맨스 TOP"
      // btn="btn"
      numberLimited={5}
    />
    <TrendingNoNav
      TopTrendingList={TopTrendingList}
      title="로판 TOP"
      // btn="btn"
      numberLimited={5}
    />
    <TrendingNoNav
      TopTrendingList={TopTrendingList}
      title="드라마 TOP"
      // btn="btn"
      numberLimited={5}
    />
    <TrendingNoNav
      TopTrendingList={TopTrendingList}
      title="BL/GL TOP"
      // btn="btn"
      numberLimited={5}
    />
    <TrendingNoNav
      TopTrendingList={TopTrendingList}
      title="소년 TOP"
      // btn="btn"
      numberLimited={5}
    />
    <VerticalCard
        cardList={cardList5}
        title="실시간 랭킹"
        volume=""
        rank={true}
      />
    <Recommend img={RecommendListImg} />
  </div>;
}

export default Toon;
