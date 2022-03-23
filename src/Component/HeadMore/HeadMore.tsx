import React from 'react';

import './HeadMore.scss';
function HeadMore(props:any) {
    
    const {Title,Decs} = props

    let leftHead 

    if(Title) {
        leftHead = <div className="head-more_title">
                        <p>{Title}</p>
                    </div>
    } else if (Decs){
        leftHead = <div className="head-more_decs">
                        {
                            Decs.map((items: any)=>
                                <p>{items}</p>
                            )
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
