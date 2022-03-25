import React,{ useEffect, useState } from 'react';

import './HomePageSec2.scss';
import Img1 from "../../../Assets/images/HomePage/main-02@2x.png"
import Img2 from "../../../Assets/images/HomePage/main-03@2x.png"
import Img3 from "../../../Assets/images/HomePage/main-04@2x.png"
import Img5 from "../../../Assets/images/HomePage/main-05@2x.png"
import Img6 from "../../../Assets/images/HomePage/main-06@2x.png"
import Img7 from "../../../Assets/images/HomePage/main-07@2x.png"

import HeadMore from '../../HeadMore/HeadMore';
import TextUnderline from '../../../Component/TextUnderline/TextUnderline';

function HomePageSec2(props:any) {
    
    const [styleInfoTitle, setStyleInfoTitle] = useState<any>({
        fontSize: `54px`,
        fontFamily: '$montserrat',
        marginRight: '20px',
        fontWeight: '600',
        marginBottom: '20px',
        // lineHeight: '0.5',
        color: '#ffffff',
    });
    const [borderHeightInfoTitle, setBorderHeightTitle] = useState<number>(5);
    const title1 ="Fine art".split(' ').map((item:any, index:any) => (
        <>
            <TextUnderline bottom={0} key={index} style={styleInfoTitle} borderheight={borderHeightInfoTitle}>
                {item}
            </TextUnderline>
        </>
    ))

    const title = <p>{title1}</p>
    

    const [styleInfoDecs, setStyleInfoDecs] = useState<any>({
        fontSize: `18px`,
        fontFamily: '$montserrat',
        lineHeight: '0.8',
        color: '#ffffff',
        fontWeight: '400',
        marginRight: '5px',
    });
    const [borderHeightInfoDecs, setBorderHeightDecs] = useState<number>(1);

    const decs1 ="do eiusmod".split(' ').map((item:any, index:any) => (
        <>
            <TextUnderline bottom={0} key={index} style={styleInfoDecs} borderheight={borderHeightInfoDecs}>
                {item}
            </TextUnderline>
        </>
    ))
    
    const decs = <p>Lorem ipsum dolor sit amet, elit, sed {decs1} tempor incidid dolore magna aliqua. Ut enim ad min veniam,</p>

    

    return (
        <div className= "home-section_2">
            <div className="home-section_2-wrapper">
                <HeadMore
                    Title={title}
                />
                <div className="home-2_title">
                    {
                        decs
                    }
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
                            {
                                decs
                            }
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
