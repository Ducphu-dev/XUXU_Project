import React from 'react';
import { HotTrendList } from '../../../../Assets/data/HotTrend';
import { RecommendListImg } from '../../../../Assets/data/Recommend';
import {
  TopRecommendList,
  TopRecommendList_1,
} from '../../../../Assets/data/TopRecommend';
import { TopTrendingList } from '../../../../Assets/data/TopTrending';
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
import CallToActionButtons from '../../../../Component/CallToActionButtons/CallToActionButtons';
import HotTrend from '../../../../Component/HotTrend/HotTrend';
import Recommend from '../../../../Component/Recommend/Recommend';
import RecommendList from '../../../../Component/RecommendList/RecommendList';
import ScrollBanner from '../../../../Component/ScrollBanner/ScrollBanner';
import TrendingTop from '../../../../Component/TrendingTop/TrendingTop';
import VerticalCard from '../../../../Component/VerticalCard/VerticalCard';
import BannerAdv from '../../../../Component/BannerAdv/BannerAdv';

import BannerAdvImg from '../../../../Assets/images/BannerAdv/resource.png';
import BannerAdvImg_1 from '../../../../Assets/images/BannerAdv/resource (1).png';

function Home() {
  return (
    <>
      <HotTrend hotTrendList={HotTrendList} />
      <CallToActionButtons />
      <VerticalCard
        cardList={cardList1}
        title="기다리면 무료 웹툰"
        volume="( 3,577 )"
      />
      <VerticalCard cardList={cardList2} title="인기 웹툰" volume="( 124 )" />
      <VerticalCard
        cardList={cardList3}
        title="기다리면 무료 소설"
        volume="( 4,548 )"
      />
      <VerticalCard cardList={cardList4} title="인기 웹 소설" volume="( 82 )" />
      <ScrollBanner />
      <VerticalCard
        cardList={cardList5}
        title="실시간 랭킹"
        volume=""
        rank={true}
      />
      <BannerAdv BannerAdvImg={BannerAdvImg}/>
      
      <TrendingTop
        TopTrendingList={TopTrendingList}
        title="기다리면 무료 VOD"
        btn="btn"
        numberLimited={30}
      />
      <VerticalCard
        cardList={cardList6}
        title="도전 ! 밀리언 페이지 웹툰"
        volume=""
      
      />
      <VerticalCard cardList={cardList7} title="밀리언 페이지 소설" volume="" />
      <VerticalCard cardList={cardList8} title="화제 의 베스트셀러" volume="" />
      <BannerAdv BannerAdvImg={BannerAdvImg_1} bg="#9284b0"/>
      <RecommendList
        TopRecommendList={TopRecommendList}
        title={['기다리면 무료 VOD']}
        numberLimited={4}
        cols={'horizontal-4'}
        padding_mobile={'padding_mobile'}
      />
      <VerticalCard
        cardList={cardList9}
        title="화제 의 베스트셀러"
        volume=""
        title1="방송"
        title2="핫픽"
      />
      <RecommendList
        TopRecommendList={TopRecommendList_1}
        title={['영화', 'bold']}
        title_1="최신/인기"
        numberLimited={4}
        cols={'horizontal-4'}
        mobile_black={'mobile_black'}
        padding_mobile={'padding_mobile'}
      />
      <Recommend img={RecommendListImg} />
    </>
  );
}

export default Home;
