import React,{ useEffect, useState } from 'react';
import useWindowSize from '../../../Utils/useWindowSize/useWindowSize';

// Import  styles
import './HomePageSec5.scss';

import Img1 from "../../../Assets/images/HomePage/main-12@2x.png"
import Img2 from "../../../Assets/images/HomePage/main-13@2x.png"
import Img3 from "../../../Assets/images/HomePage/main-14@2x.png"
import Img4 from "../../../Assets/images/HomePage/main-15@2x.png"

import HeadMore from '../../HeadMore/HeadMore';
import TextUnderline from '../../../Component/TextUnderline/TextUnderline';
import HomeItemsCard from '../../HomeItemsCard/HomeItemsCard';

function HomePageSec5(props:any) {
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
    const title1 ="Advertising".split(' ').map((item:any, index:any) => (
    
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

    const itemsSec5_1 = {
            itemsImg:Img1,
            itemsTitle: "Bespoke",
            itemsDecs: "Lorem ipsum dolor sit amet, consecteturadipisicinelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim v eniam,"
    }
    const itemsSec5_2 = {
            itemsImg:Img2,
            itemsTitle: "Bespoke",
            itemsDecs: "Lorem ipsum dolor sit amet, consecteturadipisicinelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim v eniam,"
    }
    const itemsSec5_3 = {
            itemsImg:Img3,
            itemsTitle: "Bespoke",
            itemsDecs: "Lorem ipsum dolor sit amet, consecteturadipisicinelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim v eniam,"
    }

    const itemsSec5_4 = 
        {
            itemsImg:Img4,
            itemsTitle: "Bespoke",
            itemsDecs: "Lorem ipsum dolor sit amet, consecteturadipisicinelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim v eniam,"
        }
    

    
    return (
        <div className= "home-section_5">
            <div className="home-section_5-wrapper">
                <HeadMore
                    Title={title}
                />
                <div className="home-5">
                    <div className="home-5_wrapper">
                        <div className='home-5_items w-65'>
                            <HomeItemsCard items={itemsSec5_1} />
                        </div>
                        <div className='home-5_items w-35'>
                            <HomeItemsCard items={itemsSec5_2}/>
                        </div>
                    </div>
                    <div className="home-5_wrapper">
                        <div className='home-5_items w-65'>
                            <HomeItemsCard items={itemsSec5_3}/>
                        </div>
                        <div className='home-5_items w-35'>
                            <HomeItemsCard items={itemsSec5_4}/>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        
    );
}

export default HomePageSec5;
