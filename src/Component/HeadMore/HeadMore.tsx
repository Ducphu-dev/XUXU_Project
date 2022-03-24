import React,{ useEffect, useState }  from 'react';
import TextUnderline from '../../Component/TextUnderline/TextUnderline';

import './HeadMore.scss';
function HeadMore(props:any) {
    
    const {Title,Decs} = props

    let leftHead 

    
    

    if(Title) {
        leftHead = <div className="head-more_title">
                        {Title}
                    </div>
    } else if (Decs){
        leftHead = <div className="head-more_decs">
                        {
                            <>
                                {Decs}
                            </>
                        }
                    </div>
    } else{
        leftHead = ""
    }

    return (
        <div className= "head-more">
            {leftHead}
            <div className="head-more_link">
                <a href="">More</a>
            </div>

        </div>
        
    );
}

export default HeadMore;
