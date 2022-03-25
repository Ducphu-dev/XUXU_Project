import React from 'react';

import HomePageSec1 from '../../Component/HomePageSec/Sec1/HomePageSec1';
import HomePageSec2 from '../../Component/HomePageSec/Sec2/HomePageSec2';
import HomePageSec3 from '../../Component/HomePageSec/Sec3/HomePageSec3';

import Header from '../../Component/Header/Header';
import TextUnderline from '../../Component/TextUnderline/TextUnderline';

function Main(props: any) {
  return (
    <>
      <HomePageSec1/>
      <HomePageSec2/>
      <HomePageSec3/>
      <Header />
    </>
  );
}

export default Main;
