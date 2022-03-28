import React from 'react';

import HomePageSec1 from '../../Component/HomePageSec/Sec1/HomePageSec1';
import HomePageSec2 from '../../Component/HomePageSec/Sec2/HomePageSec2';
import HomePageSec3 from '../../Component/HomePageSec/Sec3/HomePageSec3';
import HomePageSec4 from '../../Component/HomePageSec/Sec4/HomePageSec4';
import HomePageSec5 from '../../Component/HomePageSec/Sec5/HomePageSec5';
import HomePageSec6 from '../../Component/HomePageSec/Sec6/HomePageSec6';
import { BackTop } from 'antd';
import iconBack from "../../Assets/images/HomePage/36-px-bk-scrup@2x.png"

import Header from '../../Component/Header/Header';
import TextUnderline from '../../Component/TextUnderline/TextUnderline';

function Main(props: any) {
 
  return (
    <>
        <HomePageSec1/>
        <HomePageSec2/>
        <HomePageSec3/>
        <HomePageSec4/>
        <HomePageSec5/>
        <HomePageSec6/>
        
    </>
  );
}

export default Main;
