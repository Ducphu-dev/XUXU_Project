import React from 'react';

import './HomePageSec1.scss';

import HeadMore from '../HeadMore/HeadMore';
function HomePageSec1(props:any) {
    

    const decs =["XUXU is artist based in Califonia, where she currently works","in the fine arts, graphic design, illustration, TV commercial, and game.","XUXU make things move, to help move people."]
    

    return (
        <div className= "home-section_1">
            <HeadMore
                Decs={decs}
            />
            <div className="title-head">
                <div className="title-head_left w-7">
                    <h3>Artist</h3>
                    <h3 className='mr-left'>XU</h3>
                </div>
                <div className="title-head_right w-3">
                    <h3 className='mr-left'>XU</h3>
                </div>
            </div>
        </div>
        
    );
}

export default HomePageSec1;
