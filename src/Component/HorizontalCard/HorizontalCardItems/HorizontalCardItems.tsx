import React from 'react';

import Time_icon from '../../../Assets/images/HorizontalCard/time-icon.svg';
import Viewer_icon from '../../../Assets/images/HorizontalCard/viewer-icon.png';
import './HorizontalCardItems.scss';
import '../../../Assets/style/_reset.scss';
import useWindowSize from "../../VerticalCard/useWindowSize"



function HorizontalCardItems(props:any) {
    
    const {items,index}= props
    
    const { width, height } = useWindowSize();
    let Div;
    if (width > 480) {
        Div = <div className="card-overlay_rank">
            {
                index >= 5 ? 
                <div className='rank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                        <path fill="#FFD200" fillRule="evenodd" stroke="#FFD200" strokeLinejoin="round" d="M6.5.747L4.553 5.221.069 5.33l3.278 3.195-.757 4.416 3.91-2.35 3.91 2.35-.757-4.416L12.93 5.33l-4.484-.108L6.5.747z"/>
                    </svg>
                    <p>{items.Card_rank}</p>
                </div>
                : index+1  + `위` 
            }
        </div>
      } else {
        Div = <div className="card-overlay_rank">
            {
                index >= 3 ? 
                <div className='rank'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                        <path fill="#FFD200" fillRule="evenodd" stroke="#FFD200" strokeLinejoin="round" d="M6.5.747L4.553 5.221.069 5.33l3.278 3.195-.757 4.416 3.91-2.35 3.91 2.35-.757-4.416L12.93 5.33l-4.484-.108L6.5.747z"/>
                    </svg>
                    <p>{items.Card_rank}</p>
                </div>
                : index+1  + `위` 
            }
        </div>
      }
    return (

       

        <div  className='block-horizon_card' key={index}>
            <a href='' className="block-horizon_wrapper">
                <div className='horizon_card-top'>
                    <div className="card-img">
                        <div className="img">
                            <img src={items.Card_image} alt="" />
                        </div>
                    </div>
                    <div className="card-overlay">
                        <div className="card-overlay_rank">
                            {Div}
                        </div>
                        <div className="card-overlay_time">
                            <img src={Time_icon} alt="" />
                        </div>
                        
                    </div>
                </div>
                <div className='horizon_card-bottom'>
                    <div className='card-title'>
                        <h3>{items.Card_title}</h3>
                        
                    </div>
                    <div className='card-viewer'>
                        {
                            items.Card_badge.Card_badge_1 ? 
                            <img src={items.Card_badge.Card_badge_1} alt="" />
                            : ""

                        }
                        {
                            items.Card_badge.Card_badge_2 ? 
                            <img src={items.Card_badge.Card_badge_2} alt="" />
                            : ""

                        }
                        <img src={Viewer_icon} alt="" />
                        <p>{items.Card_viewer}만명</p>
                    </div>
                </div>
            </a>
            {/* <a className='horizon_card-link' href=""></a> */}
            
        </div>
        
    );
}

export default HorizontalCardItems;
