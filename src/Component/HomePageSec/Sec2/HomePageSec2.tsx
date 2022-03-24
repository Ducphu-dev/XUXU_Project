import React from 'react';

import './HomePageSec2.scss';
import Img1 from "../../../Assets/images/HomePage/main-02@2x.png"
import Img2 from "../../../Assets/images/HomePage/main-03@2x.png"
import Img3 from "../../../Assets/images/HomePage/main-04@2x.png"
import Img5 from "../../../Assets/images/HomePage/main-05@2x.png"
import Img6 from "../../../Assets/images/HomePage/main-06@2x.png"
import Img7 from "../../../Assets/images/HomePage/main-07@2x.png"

import HeadMore from '../../HeadMore/HeadMore';
function HomePageSec2(props:any) {
    

    const title =["Fine","art"]
    

    return (
        <div className= "home-section_2">
            <div className="home-section_2-wrapper">
                <HeadMore
                    Title={title}
                />
                <div className="home-2_title">
                    <p>Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor incidid dolore magna aliqua. Ut enim ad min veniam,</p>
                </div>
                <div className="home-2_images-1">
                    <div className="left">
                        <div className="img-1">
                            <img src={Img1} alt="" />
                        </div>
                        <div className="img-3">
                            <img src={Img3} alt="" />
                        </div>
                    </div>
                    <div className="right">
                        <div className="img-2">
                            <img src={Img2} alt="" />
                        </div>
                        <div className="decs">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing  elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam,</p>
                        </div>
                    </div>
                </div>
                <div className="home-2_images-2">
                    <div className="left">
                        <div className="img-5">
                            <img src={Img6} alt="" />
                        </div>
                        <div className="decs">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing  elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam,</p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="img-6">
                            <img src={Img5} alt="" />
                        </div>
                    </div>
                </div>
                <div className="home-2_images-3">
                    <div className="left">
                        <div className="decs">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing  elit, sed do eiusmod tempor incididunt ut labore et  dolore magna aliqua. Ut enim ad minim veniam, </p>
                        </div>
                    </div>
                    <div className="right">
                        <div className="img-7">
                            <img src={Img7} alt="" />
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
}

export default HomePageSec2;
