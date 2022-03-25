import React,{ useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import useWindowSize from '../../../Utils/useWindowSize/useWindowSize';

// Import  styles
import 'swiper/css';
import 'swiper/css/navigation';
import './HomePageSec4.scss';

import Img1 from "../../../Assets/images/HomePage/main-10@2x.png"
import Img2 from "../../../Assets/images/HomePage/main-03@2x.png"

import HeadMore from '../../HeadMore/HeadMore';
import TextUnderline from '../../../Component/TextUnderline/TextUnderline';
import HomeItemsCard from '../../HomeItemsCard/HomeItemsCard';

function HomePageSec4(props:any) {
    
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
    const title1 ="Illustaration".split(' ').map((item:any, index:any) => (
        
            <TextUnderline bottom={0} key={index} style={styleInfoTitle} borderheight={borderHeightInfoTitle}>
                {item}
            </TextUnderline>
        
    ))

    const title = <p>{title1}</p>

    useEffect(() => {
        if (width > 1024) {
           
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


    const itemsSec4 = [
        {
            itemsRatio: 60,
            itemsImg:Img1,
            itemsTitle: "Bespoke",
            itemsDecs: "Lorem ipsum dolor sit amet, consecteturadipisicinelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim v eniam,"
        },
        {
            itemsRatio: 60,
            itemsImg:Img2,
            itemsTitle: "Bespoke",
            itemsDecs: "Lorem ipsum dolor sit amet, consecteturadipisicinelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim v eniam,"
        }
    ]


    
    return (
        <div className= "home-section_4">
            <div className="home-section_4-wrapper">
                <HeadMore
                    Title={title}
                />
                <div className="home-4">
                    <div className="home-4_title">
                        <p>Work 2021</p>
                    </div>
                    <Swiper
                        modules={[Navigation]}
                        navigation
                        spaceBetween={15}
                        slidesPerView={1.1}
                        breakpoints={{
                            768: {
                                slidesPerView: 1.3,
                                spaceBetween:30
                            },
                        }}
                        
                        >
                        {
                            itemsSec4.map((items:any,index:any)=>
                                <SwiperSlide key={index}>
                                    <HomeItemsCard items={items} />
                                </SwiperSlide>
                            )
                        }
                        
                    </Swiper>
                </div>
            </div>
        </div>
        
    );
}

export default HomePageSec4;
