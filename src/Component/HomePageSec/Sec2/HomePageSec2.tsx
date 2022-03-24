import React from 'react';

import './HomePageSec2.scss';
// import ImgAbout from "../../Assets/images/HomePage/main-01@2x.png"

import HeadMore from '../../HeadMore/HeadMore';
function HomePageSec2(props:any) {
    

    const title =["Fine","art"]
    

    return (
        <div className= "home-section_2">
            <HeadMore
                Title={title}
            />
            
        </div>
        
    );
}

export default HomePageSec2;
