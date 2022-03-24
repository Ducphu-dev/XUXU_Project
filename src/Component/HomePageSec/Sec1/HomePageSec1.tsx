import React from 'react';

import './HomePageSec1.scss';
import '../../../Assets/style/_grid.scss'
import ImgAbout from "../../../Assets/images/HomePage/main-01@2x.png"

import HeadMore from '../../HeadMore/HeadMore';
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
            <div className="home-about">
                <div className="w-7 home-about_left ">
                    <div className="image">
                        <div className="image-wrapper">
                            <img src={ImgAbout} alt="" />
                        </div>
                    </div>
                </div>
                <div className="w-3 home-about_right">
                    <div className="home-about_right-decs">
                        <p>XUXU is artist based in Califonia.</p>
                    </div>
                    <div className="home-about_right-link">
                        <a href="">View About</a>
                    </div>
                </div>
                
            </div>
            <div className="home-intro">
                <div className="w-7 home-intro_left ">
                    <div className="home-intro_left-decs">
                        {
                            decs.map((items: any)=>
                                <p>{items}</p>
                            )
                        }
                    </div>
                </div>
                <div className="w-3 home-intro_right">
                    <div className="home-intro_right-inside">
                        <h3>XUXU</h3>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default HomePageSec1;
