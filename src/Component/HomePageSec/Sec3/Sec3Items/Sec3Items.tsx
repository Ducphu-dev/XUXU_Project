import React,{ useEffect, useState } from 'react';
import useWindowSize from '../../../../Utils/useWindowSize/useWindowSize';


import './Sec3Items.scss';
import Img1 from "../../../Assets/images/HomePage/main-08@2x.png"
import Img2 from "../../../Assets/images/HomePage/main-09@2x.png"
import TextUnderline from '../../../../Component/TextUnderline/TextUnderline';


function HomePageSec3(props:any) {
    
    const { width, height } = useWindowSize();

    const {Title} = props
    const [styleInfoTitle, setStyleInfoTitle] = useState<any>({
        fontSize: `24px`,
        fontFamily: '$montserrat',
        marginRight: '5px',
        fontWeight: '600',
        marginBottom: '0',
        lineHeight: '0.7',
        color: '#111111',
    });
    const [borderHeightInfoTitle, setBorderHeightTitle] = useState<number>(2);
    useEffect(() => {
        if (width > 1024) {
            
            setStyleInfoTitle({
                fontSize: `24px`,
                fontFamily: '$montserrat',
                lineHeight: '0.7',
                color: '#111111',
                fontWeight: '600',
                marginRight: '5px',
            });
            setBorderHeightTitle(2);
        }
        if (width <= 1024 && width > 900) {
            
            setStyleInfoTitle({
                fontSize: `22px`,
                fontFamily: '$montserrat',
                lineHeight: '0.7',
                color: '#111111',
                fontWeight: '600',
                marginRight: '5px',
            });
            setBorderHeightTitle(2);
        } else if (width <= 900 && width > 768) {
            
            setStyleInfoTitle({
                fontSize: `20px`,
                fontFamily: '$montserrat',
                lineHeight: '0.7',
                color: '#111111',
                fontWeight: '600',
                marginRight: '5px',
            });
            setBorderHeightTitle(2);
        } else if (width <= 768 && width > 480) {
            
            setStyleInfoTitle({
                fontSize: `16px`,
                fontFamily: '$montserrat',
                lineHeight: '0.7',
                color: '#111111',
                fontWeight: '600',
                marginRight: '5px',
            });
            setBorderHeightTitle(1);
        } else if (width <= 320) {
            
            setStyleInfoTitle({
                fontSize: `16px`,
                fontFamily: '$montserrat',
                lineHeight: '0.7',
                color: '#111111',
                fontWeight: '600',
                marginRight: '5px',
            });
        }
    }, [width]);
    return (
        <div className= "sec-3_bottom center" >
            <div className="sec-3_bottom-title">
                {
                    Title.split(' ').map((item:any, index:any) => (
                        
                            <TextUnderline bottom={0} key={index} style={styleInfoTitle} borderheight={borderHeightInfoTitle}>
                                {item}
                            </TextUnderline>
                        
                    ))
                }
            </div>
            <div className="sec-3_bottom-items">
                <p>Ilwall</p>
            </div>
            <div className="sec-3_bottom-items">
                <p>Service</p>
            </div>
        </div>
        
    );
}

export default HomePageSec3;
