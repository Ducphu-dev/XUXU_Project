import React,{ useEffect, useState } from 'react';

import './HomePageSec1.scss';
import '../../../Assets/style/_grid.scss'
import TextUnderline from '../../../Component/TextUnderline/TextUnderline';
import useWindowSize from '../../../Utils/useWindowSize/useWindowSize';


import ImgAbout from "../../../Assets/images/HomePage/main-01@2x.png"

import HeadMore from '../../HeadMore/HeadMore';
function HomePageSec1(props:any) {
    const { width, height } = useWindowSize();

    const [styleInfoDecs, setStyleInfoDecs] = useState<any>({
        fontSize: `24px`,
        fontFamily: '$montserrat',
        lineHeight: '0.8',
        color: '#111111',
        fontWeight: '400',
        marginRight: '5px',
    });
    const [borderHeightInfoDecs, setBorderHeightDecs] = useState<number>(1);

    const decs1 ="California".split(' ').map((item:any, index:any) => (
        
            <TextUnderline bottom={0} key={index} style={styleInfoDecs} borderheight={borderHeightInfoDecs}>
                {item}
            </TextUnderline>
        
    ))
    const decs2 ="fine arts".split(' ').map((item:any, index:any) => (
        
            <TextUnderline bottom={0} key={index} style={styleInfoDecs} borderheight={borderHeightInfoDecs}>
                {item}
            </TextUnderline>
        
    ))
    const decs3 ="graphic design".split(' ').map((item:any, index:any) => (
        
            <TextUnderline bottom={0} key={index} style={styleInfoDecs} borderheight={borderHeightInfoDecs}>
                {item}
            </TextUnderline>
        
    ))
    const decs4 ="illustration".split(' ').map((item:any, index:any) => (
        
            <TextUnderline bottom={0} key={index} style={styleInfoDecs} borderheight={borderHeightInfoDecs}>
                {item}
            </TextUnderline>
        
    ))
    const decs5 ="TV commercial".split(' ').map((item:any, index:any) => (
        
            <TextUnderline bottom={0} key={index} style={styleInfoDecs} borderheight={borderHeightInfoDecs}>
                {item}
            </TextUnderline>
        
    ))
    const decs6 ="game".split(' ').map((item:any, index:any) => (
        
            <TextUnderline bottom={0} key={index} style={styleInfoDecs} borderheight={borderHeightInfoDecs}>
                {item}
            </TextUnderline>
        
    ))
    
    const decs = <p>XUXU is artist based in {decs1}, where she currently works <br/> in the {decs2}, {decs3},{decs4}, {decs5}, and {decs6}.<br/>XUXU make things move, to help move people.</p>

    const [styleInfoTitle1, setStyleInfoTitle1] = useState<any>({
        fontSize: `24px`,
        fontFamily: '$montserrat',
        lineHeight: '0.8',
        color: '#111111',
        fontWeight: '600',
        marginRight: '5px',
    });
    const [borderHeightInfoTitle1, setBorderHeightTitle1] = useState<number>(3);
    const inforTitle1 = "About XUXU"
    const inforTitle2 = "Introduce"


    useEffect(() => {
        if (width > 1024) {
            setStyleInfoDecs({
                fontSize: `24px`,
                fontFamily: '$montserrat',
                lineHeight: '0.8',
                color: '#111111',
                fontWeight: '400',
                marginRight: '5px',
            });
            setBorderHeightDecs(1);
            setStyleInfoTitle1({
                fontSize: `24px`,
                fontFamily: '$montserrat',
                lineHeight: '0.8',
                color: '#111111',
                fontWeight: '600',
                marginRight: '5px',
            });
            setBorderHeightTitle1(3);
        }
        if (width <= 1024 && width > 900) {
            setStyleInfoDecs({
                fontSize: `22px`,
                fontFamily: '$montserrat',
                lineHeight: '0.8',
                color: '#111111',
                fontWeight: '400',
                marginRight: '5px',
            });
            setBorderHeightDecs(1);
            setStyleInfoTitle1({
                fontSize: `22px`,
                fontFamily: '$montserrat',
                lineHeight: '0.8',
                color: '#111111',
                fontWeight: '600',
                marginRight: '5px',
            });
            setBorderHeightTitle1(3);
        } else if (width <= 900 && width > 768) {
            setStyleInfoDecs({
                fontSize: `20px`,
                fontFamily: '$montserrat',
                lineHeight: '0.8',
                color: '#111111',
                fontWeight: '400',
                marginRight: '5px',
            });
            setBorderHeightDecs(1);
            setStyleInfoTitle1({
                fontSize: `20px`,
                fontFamily: '$montserrat',
                lineHeight: '0.8',
                color: '#111111',
                fontWeight: '600',
                marginRight: '5px',
            });
            setBorderHeightTitle1(2);
        } else if (width <= 768 && width > 480) {
            setStyleInfoDecs({
                fontSize: `16px`,
                fontFamily: '$montserrat',
                lineHeight: '0.8',
                color: '#111111',
                fontWeight: '400',
                marginRight: '5px',
            });
            setStyleInfoTitle1({
                fontSize: `16px`,
                fontFamily: '$montserrat',
                lineHeight: '0.8',
                color: '#111111',
                fontWeight: '600',
                marginRight: '5px',
            });
            setBorderHeightTitle1(1);
        } else if (width <= 320) {
            setStyleInfoDecs({
                fontSize: `16px`,
                fontFamily: '$montserrat',
                lineHeight: '0.8',
                color: '#111111',
                fontWeight: '400',
                marginRight: '5px',
            });
            setStyleInfoTitle1({
                fontSize: `16px`,
                fontFamily: '$montserrat',
                lineHeight: '0.8',
                color: '#111111',
                fontWeight: '600',
                marginRight: '5px',
            });
        }
    }, [width]);

    return (
        <div className= "home-section_1">
            <div className="home-section_1-wrapper">

                <HeadMore
                    Decs={decs}
                />
                <div className="title-head">
                    <div className="title-head_left w-7">
                        <h3>Artist</h3>
                        {
                            width <=768 ? 
                            <h3 className='mr-left'>XUXU</h3>
                            :
                            <h3 className='mr-left'>XU</h3>
                        }
                    </div>
                    <div className="title-head_right w-3">
                        <h3 className='mr-left'>XU</h3>
                    </div>
                </div>
                <div className="home-1-about">
                    <div className="w-7 home-1-about_left ">
                        <div className="image">
                            <div className="image-wrapper">
                                <img src={ImgAbout} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="w-3 home-1-about_right">
                        <div className="home-1-about_right-decs">
                            {inforTitle1.split(' ').map((item:any, index:any) => (
                                
                                    <TextUnderline bottom={0} key={index} style={styleInfoTitle1} borderheight={borderHeightInfoTitle1}>
                                        {item}
                                    </TextUnderline>
                                
                            ))}
                            <p>XUXU is artist based in Califonia.</p>
                        </div>
                        <div className="home-1-about_right-link">
                            <a href="">View About</a>
                        </div>
                    </div>
                    
                </div>
                <div className="home-1-intro">
                    <div className="w-7 home-1-intro_left ">
                        <div className="home-1-intro_left-decs">
                            {inforTitle2.split(' ').map((item:any, index:any) => (
                                
                                    <TextUnderline bottom={0} key={index} style={styleInfoTitle1} borderheight={borderHeightInfoTitle1}>
                                        {item}
                                    </TextUnderline>
                                
                            ))}
                            {decs}
                        </div>
                    </div>
                    <div className="w-3 home-1-intro_right">
                        <div className="home-1-intro_right-inside">
                            <h3>XUXU</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default HomePageSec1;
