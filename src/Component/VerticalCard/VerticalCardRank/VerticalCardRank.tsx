import React from 'react';
import './VerticalCardRank.scss';
import icon_count from '../../../Assets/images/VerticalCard/icon_read_count.png';
import useWindowSize from '../useWindowSize';
type Props = {
    cardItem: any;
};

const VerticalCardRank = ({ cardItem }: Props) => {
    const { width, height } = useWindowSize();
    return (
        <div className="card-item-rank">
            <div className="card-number">{cardItem.number}</div>
            <div className="card-left">
                <img className="card-left-img" src={cardItem.img} alt=""></img>
                <img className="card-left-icon" src={cardItem.icon_time} alt=""></img>
                {cardItem.icon_cup ? <img className="card-left-icon-cup" src={cardItem.icon_cup} alt=""></img> : null}
            </div>
            <div className="card-right">
                <div className="card-right-title">
                    {cardItem.icon ? <img className="title-icon" src={cardItem.icon} alt=""></img> : null}
                    {cardItem.icon_number ? <img className="title-icon" src={cardItem.icon_number} alt=""></img> : null}
                    <p className="title">{cardItem.title}</p>
                </div>

                <div className="card-right-author">
                    <div className="view">
                        <img className="view-icon" src={icon_count} alt=""></img>
                        <p className="count">{cardItem.text1}</p>
                    </div>
                    <div className="vertical-dash"></div>
                    <div className="author">
                        <p className="author-name">{cardItem.text2}</p>
                    </div>
                    <div className="vertical-dash"></div>
                    <div className="author">
                        <p className="author-name">{cardItem.text3}</p>
                    </div>
                    {width > 768 ? (
                        <>
                            <div className="vertical-dash"></div>
                            <div className="author">
                                <p className="author-name">{cardItem.text4}</p>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="vertical-dash"></div>
                            <div className="author">
                                <p className="author-name">...</p>
                            </div>
                        </>
                    )}
                </div>

                {cardItem.calendar ? (
                    <div className="card-right-calendar">
                        <p className="calendar">{cardItem.calendar}</p>
                    </div>
                ) : (
                    <div className="card-right-calendar">
                        <p className="calendar"></p>
                    </div>
                )}
            </div>
            <div className="card-rank-up">
                <img className="rank-up-img" src={cardItem.icon_rank_up} alt=""></img>
                <div className="rank-up-number">{cardItem.up}</div>
            </div>
        </div>
    );
};

export default VerticalCardRank;
