import React from 'react';

import './HorizotalCard.scss';
import '../../Assets/style/_reset.scss';

import HorizontalCardItems from './HorizontalCardItems/HorizontalCardItems';



function HorizontalCard(props:any) {
    
    const {HorizontalCard, cols, numberLimited,toggleTabs,padding_mobile} = props

    return (
        <div className= {`block-horizon ${ cols }`}>
            {
                HorizontalCard.map((items:any, index:any) => {
                    return (
                        <HorizontalCardItems
                            items={items}
                            index={index}
                            key={index}
                        />
                    )
                })
                .filter((product:any,index:any) => index < numberLimited)
            }
        </div>
        
    );
}

export default HorizontalCard;
