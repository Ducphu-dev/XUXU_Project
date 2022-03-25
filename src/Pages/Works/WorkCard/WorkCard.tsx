import React, { useState } from 'react';
import TextUnderline from '../../../Component/TextUnderline/TextUnderline';
import './WorkCard.scss';

type Props = {
    card: any;
};

const WorkCard = ({ card }: Props) => {
    const [hover, setHover] = useState<boolean>(false);
    const [styleUnderline, setStyleUnderline] = useState({
        fontSize: `36px`,
        fontFamily: '$montserrat',
        fontWeight: '500',
        lineHeight: '1',
        color: '#fff',
    });
    return (
        <div className="work-card" onMouseLeave={() => setHover(false)} onMouseOver={() => setHover(true)}>
            <img className="card-img" src={card.img} alt=""></img>

            {hover && (
                <div className="card-info">
                    <div className="card-title">
                        <TextUnderline style={styleUnderline} borderheight={5}>
                            Champignon
                        </TextUnderline>
                    </div>
                    <div className="card-content">
                        <p>Mixed medida on Canvas, 60 x 80</p>
                        <p>2021</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WorkCard;
