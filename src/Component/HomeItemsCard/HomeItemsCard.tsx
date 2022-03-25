import React,{ useEffect, useState }  from 'react';
import useWindowSize from '../../Utils/useWindowSize/useWindowSize';


import TextUnderline from '../../Component/TextUnderline/TextUnderline';

import './HomeItemsCard.scss';
function HomeItemsCard(props:any) {
    
    const {items} = props
    const { width, height } = useWindowSize();


    const [styleInfoTitle, setStyleInfoTitle] = useState<any>({
        fontSize: `24px`,
        fontFamily: '$montserrat',
        marginRight: '5px',
        fontWeight: '600',
        marginTop: '30px',
        marginBottom: '20px',
        lineHeight: '0.7',
        color: '#111111',
    });
    const [borderHeightInfoTitle, setBorderHeightTitle] = useState<number>(2);

    useEffect(() => {
        if (width > 1024) {
            
            setStyleInfoTitle({
                fontSize: `24px`,
                fontFamily: '$montserrat',
                marginRight: '5px',
                fontWeight: '600',
                marginTop: '30px',
                marginBottom: '20px',
                lineHeight: '0.7',
                color: '#111111',
            });
            setBorderHeightTitle(2);
        }
        if (width <= 1024 && width > 900) {
            
            setStyleInfoTitle({
                fontSize: `22px`,
                fontFamily: '$montserrat',
                marginRight: '5px',
                fontWeight: '600',
                marginTop: '30px',
                marginBottom: '20px',
                lineHeight: '0.7',
                color: '#111111',
            });
            setBorderHeightTitle(2);
        } else if (width <= 900 && width > 768) {
            
            setStyleInfoTitle({
                fontSize: `20px`,
                fontFamily: '$montserrat',
                marginRight: '5px',
                fontWeight: '600',
                marginTop: '20px',
                marginBottom: '10px',
                lineHeight: '0.7',
                color: '#111111',
            });
            setBorderHeightTitle(2);
        } else if (width <= 768 && width > 480) {
            
            setStyleInfoTitle({
                fontSize: `16px`,
                fontFamily: '$montserrat',
                marginRight: '5px',
                fontWeight: '600',
                marginTop: '20px',
                marginBottom: '10px',
                lineHeight: '0.7',
                color: '#111111',
            });
            setBorderHeightTitle(1);
        } else if (width <= 320) {
            
            setStyleInfoTitle({
                fontSize: `16px`,
                fontFamily: '$montserrat',
                marginRight: '5px',
                fontWeight: '600',
                marginTop: '20px',
                marginBottom: '10px',
                lineHeight: '0.7',
                color: '#111111',
            });
        }
    }, [width]);

    return (
        <div className= "home-items_block">
            <div className="home-items">
                <a className="home-items_link" href=""></a>
                <div className="home-items_img" >
                    <div className="img-wrapper">
                        <img src={items.itemsImg} alt="" />
                    </div>
                </div>
                <div className="home-items_infor">
                    <div className="home-items_infor-title">
                        {
                            items.itemsTitle.split(' ').map((item:any, index:any) => (
                                <>
                                    <TextUnderline bottom={0} key={index} style={styleInfoTitle} borderheight={borderHeightInfoTitle}>
                                        {item}
                                    </TextUnderline>
                                </>
                            ))
                        }
                    </div>
                    <div className="home-items_infor-decs">
                        <p>{items.itemsDecs}</p>
                        
                    </div>
                </div>
            </div>

        </div>
        
    );
}

export default HomeItemsCard;
