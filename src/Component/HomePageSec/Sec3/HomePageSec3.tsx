import React from 'react';

import './HomePageSec3.scss';
import Img1 from "../../../Assets/images/HomePage/main-02@2x.png"

import HeadMore from '../../HeadMore/HeadMore';
function HomePageSec3(props:any) {
    

    const title =["Graphic","deisgn"]
    

    return (
        <div className= "home-section_3">
            <div className="home-section_3-wrapper">
                <HeadMore
                    Title={title}
                />
                <div className="home-3_title">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, totam rem luptatem.</p>
                </div>
                <div className="home-3_left">
                    <div className="home-3_left-img">
                        <img src="" alt="" />
                    </div>
                    <div className="home-3_left-bottom .bottom-decs">
                        
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default HomePageSec3;
