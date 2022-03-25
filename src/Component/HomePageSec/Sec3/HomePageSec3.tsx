import React,{ useEffect, useState } from 'react';
import useWindowSize from '../../../Utils/useWindowSize/useWindowSize';


import './HomePageSec3.scss';
import Img1 from "../../../Assets/images/HomePage/main-08@2x.png"
import Img2 from "../../../Assets/images/HomePage/main-09@2x.png"

import HeadMore from '../../HeadMore/HeadMore';
import TextUnderline from '../../../Component/TextUnderline/TextUnderline';
import ItemsBottom from './Sec3Items/Sec3Items';

function HomePageSec3(props:any) {
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
    const title1 ="Graphic deisgn".split(' ').map((item:any, index:any) => (
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
        color: '#111111',
        fontWeight: '400',
        marginRight: '5px',
    });
    const [borderHeightInfoDecs, setBorderHeightDecs] = useState<number>(1);

    const decs1 ="incididunt ut labore".split(' ').map((item:any, index:any) => (
        <>
            <TextUnderline bottom={0} key={index} style={styleInfoDecs} borderheight={borderHeightInfoDecs}>
                {item}
            </TextUnderline>
        </>
    ))
    const decs2 ="commodo consequat".split(' ').map((item:any, index:any) => (
        <>
            <TextUnderline bottom={0} key={index} style={styleInfoDecs} borderheight={borderHeightInfoDecs}>
                {item}
            </TextUnderline>
        </>
    ))
    
    const decs = <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor {decs1} et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea {decs2}. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, totam rem luptatem.</p>

    const titleItemsleft = "2020 SK CES LED FACADE"
    const titleItemsright = "2018 LG CES"
    
    useEffect(() => {
        if (width > 1024) {
            setStyleInfoDecs({
                fontSize: `18px`,
                fontFamily: '$montserrat',
                lineHeight: '0.8',
                color: '#111111',
                fontWeight: '400',
                marginRight: '5px',
            });
            setBorderHeightDecs(1);
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
                fontSize: `18px`,
                fontFamily: '$montserrat',
                lineHeight: '0.8',
                color: '#111111',
                fontWeight: '400',
                marginRight: '5px',
            });
            setBorderHeightDecs(1);
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
                fontSize: `18px`,
                fontFamily: '$montserrat',
                lineHeight: '0.8',
                color: '#111111',
                fontWeight: '400',
                marginRight: '5px',
            });
            setBorderHeightDecs(1);
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
                fontSize: `16px`,
                fontFamily: '$montserrat',
                lineHeight: '0.8',
                color: '#111111',
                fontWeight: '400',
                marginRight: '5px',
            });
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
        } else if (width <= 320) {
            setStyleInfoDecs({
                fontSize: `16px`,
                fontFamily: '$montserrat',
                lineHeight: '0.8',
                color: '#111111',
                fontWeight: '400',
                marginRight: '5px',
            });
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
        <div className= "home-section_3">
            <div className="home-section_3-wrapper">
                <HeadMore
                    Title={title}
                />
                <div className="home-3_title">
                    {
                        decs
                    }
                </div>
                <div className="home-3">
                    <div className="left home-3-items w-65">
                        <div className="home-3-img">
                            <div className="img-wrapper">
                                <img src={Img1} alt="" />
                            </div>
                        </div>
                        <ItemsBottom Title={titleItemsleft}/>
                    </div>
                    <div className="right home-3-items  w-35">
                        <div className="home-3-img">
                            <div className="img-wrapper">
                                <img src={Img2} alt="" />
                            </div>
                        </div>
                        <ItemsBottom Title={titleItemsright}/>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default HomePageSec3;
