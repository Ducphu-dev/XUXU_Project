import React from 'react';
import icon_count from '../../../Assets/images/VerticalCard/icon_read_count.png';
import useWindowSize from '../useWindowSize';
import './VerticalCardItemFour.scss';
type Props = {
    cardItem: any;
};

const VerticalCardItemFour = ({ cardItem }: Props) => {
    const { width, height } = useWindowSize();
    return (
        <div className="card-item">
            <div className="card-left">
                <img className="card-left-img" src={cardItem.img} alt=""></img>
                <img className="card-left-icon" src={cardItem.icon_time} alt=""></img>
                {cardItem.icon_cup ? <img className="card-left-icon-cup" src={cardItem.icon_cup} alt=""></img> : null}
            </div>
            <div className="card-right">
                <div className="card-right-title">
                    {cardItem.icon ? <img className="title-icon" src={cardItem.icon} alt=""></img> : null}
                    {cardItem.icon_number ? <img className="title-icon" src={cardItem.icon_number} alt=""></img> : null}
                    {width < 768 && cardItem?.title.length > 4 ? (
                        <p className="title">{cardItem.title.substring(0, 8)}...</p>
                    ) : (
                        <p className="title">{cardItem.title}</p>
                    )}
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
                    {cardItem.author ? (
                        <>
                            <div className="vertical-dash"></div>
                            <div className="author">
                                <p className="author-name">{cardItem.author}</p>
                            </div>
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default VerticalCardItemFour;
