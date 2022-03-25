import React,{ useEffect, useState } from 'react';
import useWindowSize from '../../../Utils/useWindowSize/useWindowSize';
// Import  styles
import './HomePageSec6.scss';

import Img1 from "../../../Assets/images/HomePage/main-16@2x.png"
import Img2 from "../../../Assets/images/HomePage/main-17@2x.png"
import Img3 from "../../../Assets/images/HomePage/main-18@2x.png"
import arrow from '../../../Assets/images/About/arrow.png';

import HeadMore from '../../HeadMore/HeadMore';
import TextUnderline from '../../../Component/TextUnderline/TextUnderline';
import { Link } from 'react-router-dom';
function HomePageSec6(props:any) {
    
    const { width, height } = useWindowSize();


    const [styleInfoTitle, setStyleInfoTitle] = useState<any>({
        fontSize: `54px`,
        fontFamily: '$montserrat',
        marginRight: '20px',
        fontWeight: '600',
        marginBottom: '20px',
        // lineHeight: '0.5',
        color: '#000000',
    });
    const [borderHeightInfoTitle, setBorderHeightTitle] = useState<number>(5);
    const title1 ="Game art".split(' ').map((item:any, index:any) => (
        
            <TextUnderline bottom={0} key={index} style={styleInfoTitle} borderheight={borderHeightInfoTitle}>
                {item}
            </TextUnderline>
        
    ))

    const title = <p>{title1}</p>
    const titleLink = <p>{title1}</p>

    

    const decs1 = "Game Art"
    const decs2 = "Movie Art"
    const [styleInfoDecs, setStyleInfoDecs] = useState<any>({
        fontSize: `24px`,
        fontFamily: '$montserrat',
        marginRight: '5px',
        fontWeight: '600',
        marginBottom: '0',
        lineHeight: '1',
        color: '#111111',
    });
    const [borderHeightInfoDecs, setBorderHeightDecs] = useState<number>(3);

    
    useEffect(() => {
        if (width > 1024) {
            setStyleInfoDecs({
                fontSize: `24px`,
                fontFamily: '$montserrat',
                marginRight: '5px',
                fontWeight: '600',
                marginBottom: '0',
                lineHeight: '1',
                color: '#111111',
            });
            setBorderHeightDecs(3);
            setStyleInfoTitle({
                fontSize: `54px`,
                fontFamily: '$montserrat',
                marginRight: '20px',
                fontWeight: '600',
                marginBottom: '20px',
                // lineHeight: '0.5',
                color: '#000000',
            });
            setBorderHeightTitle(5);
        }
        if (width <= 1024 && width > 900) {
            setStyleInfoDecs({
                fontSize: `22px`,
                fontFamily: '$montserrat',
                marginRight: '5px',
                fontWeight: '600',
                marginBottom: '0',
                lineHeight: '1',
                color: '#111111',
            });
            setBorderHeightDecs(3);
            setStyleInfoTitle({
                fontSize: `50px`,
                fontFamily: '$montserrat',
                marginRight: '20px',
                fontWeight: '600',
                marginBottom: '18px',
                lineHeight: '1.3',
                color: '#000000',
            });
            setBorderHeightTitle(4);
        } else if (width <= 900 && width > 768) {
            setStyleInfoDecs({
                fontSize: `20px`,
                fontFamily: '$montserrat',
                marginRight: '5px',
                fontWeight: '600',
                marginBottom: '0',
                lineHeight: '1',
                color: '#111111',
            });
            setBorderHeightDecs(2);
            setStyleInfoTitle({
                fontSize: `45px`,
                fontFamily: '$montserrat',
                marginRight: '20px',
                fontWeight: '600',
                marginBottom: '16px',
                lineHeight: '1',
                color: '#000000',
            });
            setBorderHeightTitle(3);
        } else if (width <= 768 && width > 480) {
            setStyleInfoDecs({
                fontSize: `18px`,
                fontFamily: '$montserrat',
                marginRight: '5px',
                fontWeight: '600',
                marginBottom: '0',
                lineHeight: '1',
                color: '#111111',
            });
            setBorderHeightDecs(2);
            setStyleInfoTitle({
                fontSize: `40px`,
                fontFamily: '$montserrat',
                marginRight: '10px',
                fontWeight: '600',
                marginBottom: '14px',
                lineHeight: '0.9',
                color: '#000000',
            });
            setBorderHeightTitle(3);
        }else if (width <= 480 && width > 320) {
            setStyleInfoDecs({
                fontSize: `18px`,
                fontFamily: '$montserrat',
                marginRight: '5px',
                fontWeight: '600',
                marginBottom: '0',
                lineHeight: '1',
                color: '#111111',
            });
            setBorderHeightDecs(2);
            setStyleInfoTitle({
                fontSize: `35px`,
                fontFamily: '$montserrat',
                marginRight: '10px',
                fontWeight: '600',
                marginBottom: '14px',
                lineHeight: '0.9',
                color: '#000000',
            });
            setBorderHeightTitle(3);
        } else if (width <= 320) {
            setStyleInfoDecs({
                fontSize: `16px`,
                fontFamily: '$montserrat',
                marginRight: '5px',
                fontWeight: '600',
                marginBottom: '0',
                lineHeight: '1',
                color: '#111111',
            });
            setBorderHeightDecs(2);
            setStyleInfoTitle({
                fontSize: `35px`,
                fontFamily: '$montserrat',
                marginRight: '10px',
                fontWeight: '600',
                marginBottom: '14px',
                lineHeight: '0.9',
                color: '#000000',
            });
        }
    }, [width]);
   
    return (
        <div className= "home-section_6">
            <div className="home-section_6-wrapper">
                <HeadMore
                    Title={title}
                />
                <div className="home-6">
                    <div className="home-6_wdecs">
                        <div className="home-6_wdecs-img w-35">
                            <img src={Img1} alt="" />
                        </div>
                        <div className="home-6_wdecs-decs w-65">
                            <div className='home-6_wdecs-infor'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veni am, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                            <div className="home-6_wdecs-items">
                                {
                                    decs1.split(' ').map((item:any, index:any) => (
                                        
                                            <TextUnderline bottom={0} key={index} style={styleInfoDecs} borderheight={borderHeightInfoDecs}>
                                                {item}
                                            </TextUnderline>
                                        
                                    ))
                                }
                                <div className="decs">
                                    <p>Loremconsectetur adipisicing elit, sed do eiusmod tempor incididunzt</p>
                                </div>
                            </div>
                            <div className="home-6_wdecs-items">
                                {
                                    decs2.split(' ').map((item:any, index:any) => (
                                    
                                            <TextUnderline bottom={0} key={index} style={styleInfoDecs} borderheight={borderHeightInfoDecs}>
                                                {item}
                                            </TextUnderline>
                                        
                                    ))
                                }
                                <div className="decs">
                                    <p>Loremconsectetur adipisicing elit, sed do eiusmod tempor incididunzt</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home-6_imgs">
                        <div className="home-6_imgs-items w-65">
                            <div className="home-6_imgs-image">
                                <div className="img-wrapper">
                                    <img src={Img2} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="home-6_imgs-items w-35">
                            <div className="home-6_imgs-image">
                                <div className="img-wrapper">
                                    <img src={Img3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/contact" className="home-6_contactLink">
                    <TextUnderline bottom={0} style={styleInfoTitle} borderheight={borderHeightInfoTitle}>
                        <img className="img-arrow" src={arrow} alt=""/>
                    </TextUnderline>

                    <TextUnderline bottom={0} style={styleInfoTitle} borderheight={borderHeightInfoTitle}>
                        Contact
                    </TextUnderline>
                </Link>
                
            </div>
            
        </div>
        
    );
}

export default HomePageSec6;
