import React, { useEffect, useState } from 'react';
import TextUnderline from '../../Component/TextUnderline/TextUnderline';
import useWindowSize from '../../Utils/useWindowSize/useWindowSize';
import './Works.scss';

import img1 from '../../Assets/images/Works/works-01.png';
import img2 from '../../Assets/images/Works/works-02.png';
import img3 from '../../Assets/images/Works/works-03.png';
import img4 from '../../Assets/images/Works/works-04.png';
import img5 from '../../Assets/images/Works/works-05.png';
import img6 from '../../Assets/images/Works/works-06.png';
import img7 from '../../Assets/images/Works/works-07.png';
import img8 from '../../Assets/images/Works/works-08.png';
import img9 from '../../Assets/images/Works/works-09.png';
import WorkCard from './WorkCard/WorkCard';

const listProduct = [
    {
        img: img1,
    },

    {
        img: img2,
    },
    {
        img: img3,
    },
    {
        img: img4,
    },
    {
        img: img5,
    },
    {
        img: img6,
    },
    {
        img: img7,
    },
    {
        img: img8,
    },
    {
        img: img9,
    },
];

type Props = {};

const underline1 = 'incididunt ut labore';
const underline2 = 'commodo consequat';

const Works = (props: Props) => {
    const [isMenuShow, setIsMenuShow] = useState(false);
    const { width, height } = useWindowSize();

    const [styleHeading, setStyleHeading] = useState({
        fontSize: `54px`,
        fontFamily: '$montserrat',
        marginRight: '25px',
        fontWeight: '600',
        lineHeight: '1.1',
        color: '#040404',
    });
    const [borderHeighHeading, setBorderHeading] = useState(5);

    const [styleUnderline1, setStyleUnderline1] = useState<any>({
        fontSize: `24px`,
        fontFamily: '$montserrat',
        marginRight: '10px',
        marginLeft: '10px',
        fontWeight: '400',
        marginBottom: '10px',
        lineHeight: '0.5',
    });
    const [borderHeight1, setBorderHeight1] = useState<number>(0.5);

    useEffect(() => {
        if (width > 1279) {
            setStyleHeading({
                fontSize: `54px`,
                fontFamily: '$montserrat',
                marginRight: '25px',
                fontWeight: '600',
                lineHeight: '1.1',
                color: '#040404',
            });
            setBorderHeading(5);
            setStyleUnderline1({
                fontSize: `24px`,
                fontFamily: '$montserrat',
                marginRight: '5px',
                marginLeft: '5px',
                fontWeight: '400',
                marginBottom: '10px',
                lineHeight: '0.5',
            });
            setBorderHeight1(0.5);
        }
        if (width <= 1279 && width > 768) {
        } else if (width <= 768 && width > 480) {
        } else if (width <= 480 && width > 320) {
        } else if (width <= 320) {
        }
    }, [width]);

    return (
        <div className="works">
            <nav className="nav">
                <ul className={`${isMenuShow ? 'nav-bar active' : 'nav-bar'}`}>
                    <li className="nav-item">
                        <a href="/about" className="nav-link">
                            All
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/works" className="nav-link">
                            Fineart
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact" className="nav-link">
                            Graphicdesign
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact" className="nav-link">
                            Illustration
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact" className="nav-link">
                            Advertising
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/contact" className="nav-link">
                            Game
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="works-desc">
                <div className="works-title">
                    <TextUnderline style={styleHeading} borderheight={borderHeighHeading}>
                        Fineart
                    </TextUnderline>
                </div>
                <div className="works-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius</p>
                    mod tempor
                    {underline1.split(' ').map((item: string, index: number) => (
                        <TextUnderline key={index} style={styleUnderline1} borderheight={borderHeight1}>
                            {item}
                        </TextUnderline>
                    ))}
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    {underline2.split(' ').map((item, index) => (
                        <TextUnderline key={index} style={styleUnderline1} borderheight={borderHeight1}>
                            {item}
                        </TextUnderline>
                    ))}
                    . Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, totam rem luptatem.
                </div>
            </div>

            <div className="works-product">
                {listProduct.map((item, index) => (
                    <div key={index} className="works-item">
                        <WorkCard card={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Works;
