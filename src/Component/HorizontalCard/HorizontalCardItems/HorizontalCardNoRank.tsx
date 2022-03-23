import React from 'react';

import Time_icon from '../../../Assets/images/HorizontalCard/time-icon.svg';
import Viewer_icon from '../../../Assets/images/HorizontalCard/viewer-icon.png';
import './HorizontalCardItems.scss';
import '../../../Assets/style/_reset.scss';



function HorizontalCardFourItems(props:any) {
    
    const {items,index,noRank}= props

    return (
        <div  className={`block-horizon_card ${noRank} `  } key={index}>
            <a href='' className="block-horizon_wrapper">
                <div className='horizon_card-top'>
                    <div className="card-img">
                        <div className="img">
                            <img src={items.Card_image} alt="" />
                        </div>
                    </div>
                    <div className="card-badge">
                        
                        {
                            items.Card_badgeTop ? 
                            <div className="card-badge_top">
                                <img src={items.Card_badgeTop} alt="" />
                            </div> : ""
                        }
                        {
                            items.Card_badgeBottom ? 
                            <div className="card-badge_bottom">
                                {items.Card_badgeBottom}
                            </div> : ""
                        }
                        
                    </div>
                </div>
                <div className='horizon_card-bottom'>
                    <div className='card-title'>
                        {
                            items.Card_title.Card_title_badge ? 
                            <div className="card-title_badge">
                                <img src={items.Card_title.Card_title_badge} alt="" />
                            </div>: ""
                        }
                        
                        <h3>{items.Card_title.Card_title_name}</h3>
                    </div>
                    <div className='card-viewer'>
                        <img src={Viewer_icon} alt="" />
                        <p>{items.Card_viewer}만명</p>
                    </div>
                </div>
            </a>
            {/* <a className='horizon_card-link' href=""></a> */}
            
        </div>
        
    );
}

export default HorizontalCardFourItems;
