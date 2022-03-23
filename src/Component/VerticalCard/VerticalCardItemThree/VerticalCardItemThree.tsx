import React from 'react';
import icon_count from '../../../Assets/images/VerticalCard/icon_read_count.png';
import './VerticalCardItemThree.scss';
type Props = {
    cardItem: any;
};

const VerticalCardItemThree = ({ cardItem }: Props) => {
    return (
        <div className="card-item-three">
            <div className="card-left">
                <img className="card-left-img" src={cardItem.img} alt=""></img>
                <img className="card-left-icon" src={cardItem.icon_time} alt=""></img>
                {cardItem.icon_cup ? (
                    
                    <img className="card-left-icon-cup" src={cardItem.icon_cup} alt=""></img>
                ): null}
            </div>
            <div className="card-right">
                <div className="card-right-title">
                    {cardItem.icon ? <img className="title-icon" src={cardItem.icon} alt=""></img> : null}
                    {cardItem.icon_number ? <img className="title-icon" src={cardItem.icon_number} alt=""></img> : null}
                    <p className="title">{cardItem.title}</p>
                </div>
                {cardItem.content ? (
                    <div className="card-right-content">
                        <p className="content">{cardItem.content}</p>
                    </div>
                ) : (
                    <div className="card-right-content">
                        <p className="content"></p>
                    </div>
                )}
                <div className="card-right-author">
                    <div className="view">
                        <img className="view-icon" src={icon_count} alt=""></img>
                        <p className="count">{cardItem.view}</p>
                    </div>
                    <div className="vertical-dash"></div>
                    <div className="author">
                        <p className="author-name">{cardItem.author}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerticalCardItemThree;
