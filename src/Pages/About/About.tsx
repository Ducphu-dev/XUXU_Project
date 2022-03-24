import React, { useEffect, useState } from 'react';
import './About.scss';
import about1 from '../../Assets/images/About/about-01.png';
import about2 from '../../Assets/images/About/about-02-mov.png';
import about3 from '../../Assets/images/About/about-02.png';
import { ArrowRightOutlined } from '@ant-design/icons';
import TextUnderline from '../../Component/TextUnderline/TextUnderline';
import useWindowSize from '../../Utils/useWindowSize/useWindowSize';

type Props = {};

const textUnderline1 = 'XUXU Profile';
const textUnderline21 = 'This is XUXU,';
const textUnderline22 = 'Excutive Creatvie Director';
const textUnderline23 = 'at Huge Oakland, Artist';
const textUnderline24 = 'and Designer based in';
const textUnderline25 = 'Califonia.';

const textUnderline3 = 'Awwards Conference — Amsterdam.Awwards Conference — San Francisco.IngeniUX — Seattle.Digital Design Days 2019 — Milan';

const textUnderline41 = 'I consult &';
const textUnderline42 = [
    {
        text: 'design',
    },
    {
        text: 'product :',
    },
];

const About = (props: Props) => {
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

    const [styleInfo1, setStyleInfo1] = useState<any>({
        fontSize: `54px`,
        fontFamily: '$montserrat',
        marginRight: '20px',
        fontWeight: '600',
        marginBottom: '10px',
        color: '#040404',
    });
    const [borderHeightInfo1, setBorderHeightInfo1] = useState<number>(5);
    const [styleInfo2, setStyleInfo2] = useState<any>({
        fontSize: `24px`,
        fontFamily: '$montserrat',
        marginRight: '20px',
        fontWeight: '400',
        marginBottom: '20px',
        lineHeight: '0.5',
    });
    const [borderHeightInfo2, setBorderHeightInfo2] = useState<number>(0.5);
    const [styleInfo3, setStyleInfo3] = useState<any>({
        fontSize: `54px`,
        fontFamily: '$montserrat',
        marginRight: '20px',
        fontWeight: '600',
        marginBottom: '20px',
        // lineHeight: '0.5',
        color: '#040404',
    });
    const [borderHeightInfo3, setBorderHeightInfo3] = useState<number>(5);
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
            setStyleInfo1({
                fontSize: `54px`,
                fontFamily: '$montserrat',
                marginRight: '20px',
                fontWeight: '600',
                marginBottom: '10px',
                color: '#040404',
            });
            setBorderHeightInfo1(5);
            setStyleInfo2({
                fontSize: `24px`,
                fontFamily: '$montserrat',
                marginRight: '20px',
                fontWeight: '400',
                marginBottom: '20px',
                lineHeight: '0.5',
            });
            setBorderHeightInfo2(0.5);
            setStyleInfo3({
                fontSize: `54px`,
                fontFamily: '$montserrat',
                marginRight: '20px',
                fontWeight: '600',
                marginBottom: '20px',
                // lineHeight: '0.5',
                color: '#040404',
            });
            setBorderHeightInfo3(5);
        }
        if (width <= 1279 && width > 768) {
            setStyleInfo1({
                ...styleInfo1,
                fontSize: '24px',
                fontWeight: '600',
                marginBottom: '15px',
                lineHeight: '1',
                color: '#040404',
            });
            setBorderHeightInfo1(3);
            setStyleInfo2({
                ...styleInfo2,
                fontSize: '23.1px',
                marginBottom: '20px',
            });

            setStyleInfo3({
                ...styleInfo3,
                fontSize: '24px',
                marginRight: '10px',
                marginBottom: '10px',
                lineHeight: '1',
            });
            setBorderHeightInfo3(3);
        } else if (width <= 768 && width > 480) {
            setStyleInfo1({
                ...styleInfo1,
                fontSize: '16px',
                marginRight: '10px',
                marginBottom: '10px',
                color: '#040404',
                lineHeight: '1',
            });
            setBorderHeightInfo1(2);
            setStyleHeading({
                ...styleHeading,
                fontSize: `30px`,
                marginRight: '15px',
                lineHeight: '1.2',
            });
            setBorderHeading(3);

            setStyleInfo2({
                ...styleInfo2,
                fontSize: '16px',
            });
            setStyleInfo3({
                ...styleInfo3,
                fontSize: '16px',
                marginRight: '10px',
                marginBottom: '10px',
                lineHeight: '1',
            });
            setBorderHeightInfo3(2);
        } else if (width <= 480 && width > 320) {
            setStyleInfo1({
                ...styleInfo1,
                fontSize: '24px',
                fontWeight: '600',
                marginRight: '10px',
                marginBottom: '15px',
                lineHeight: '1',
            });
            setBorderHeightInfo1(3);

            setStyleHeading({
                ...styleHeading,
                fontSize: `24px`,
                marginRight: '10px',
                lineHeight: '1.2',
            });
            setBorderHeading(3);
            setStyleInfo2({
                ...styleInfo2,
                fontSize: '16px',
                marginBottom: '10px',
            });

            setStyleInfo3({
                ...styleInfo3,
                fontSize: '24px',
                fontWeight: '600',
                marginBottom: '15px',
                marginRight: '10px',
                lineHeight: '1',
            });
            setBorderHeightInfo3(3);
        } else if (width <= 320) {
            setStyleInfo2({
                ...styleInfo2,
                fontSize: '14px',
                marginBottom: '10px',
            });
        }
    }, [width]);
    return (
        <div className="about-container">
            <div className="about-heading">
                {textUnderline1.split(' ').map((item, index) => (
                    <>
                        <TextUnderline bottom={0} key={index} style={styleHeading} borderheight={borderHeighHeading}>
                            {item}
                        </TextUnderline>
                    </>
                ))}
            </div>
            <div className="about-banner1">
                <img src={about1} alt="" />
            </div>
            <div className="about-info1">
                <div className="about-info1-left">
                    <div>
                        {textUnderline21.split(' ').map((item, index) => (
                            <>
                                <TextUnderline bottom={0} key={index} style={styleInfo1} borderheight={borderHeightInfo1}>
                                    {item}
                                </TextUnderline>
                            </>
                        ))}
                    </div>
                    <div>
                        {textUnderline22.split(' ').map((item, index) => (
                            <>
                                <TextUnderline bottom={0} key={index} style={styleInfo1} borderheight={borderHeightInfo1}>
                                    {item}
                                </TextUnderline>
                            </>
                        ))}
                    </div>
                    <div>
                        {textUnderline23.split(' ').map((item, index) => (
                            <>
                                <TextUnderline bottom={0} key={index} style={styleInfo1} borderheight={borderHeightInfo1}>
                                    {item}
                                </TextUnderline>
                            </>
                        ))}
                    </div>
                    <div>
                        {textUnderline24.split(' ').map((item, index) => (
                            <>
                                <TextUnderline bottom={0} key={index} style={styleInfo1} borderheight={borderHeightInfo1}>
                                    {item}
                                </TextUnderline>
                            </>
                        ))}
                    </div>
                    <div>
                        {textUnderline25.split(' ').map((item, index) => (
                            <>
                                <TextUnderline bottom={0} key={index} style={styleInfo1} borderheight={borderHeightInfo1}>
                                    {item}
                                </TextUnderline>
                            </>
                        ))}
                    </div>
                </div>
                <div className="about-info1-right">
                    <div className="about-info1-text1">
                        <p>
                            I currently lead the Experience Design team of Huge Inc. in Oakland where I do hands-on work and lead teams working for
                            clients such as Google, Samsung, Playstation and Shipt in projects that span from pure upstream concept work to ready to
                            ship products. At Huge I’ve been fortunate as well to work on physical spaces and interactive installations.
                        </p>
                    </div>

                    <div className="about-info1-text2">
                        <p>
                            Prior to Huge I worked at Microsoft where I led a team working on the future of audio experiences and afterwards the
                            visual design efforts of Fluent Design, the new groundbreaking design system based on leveraging our understanding of the
                            real world to improve how we use our computers. This work was specifically guided by how we can use depth to articulate
                            hierarchy, materials to communicate object properties and language’s musical patterns to communicate intent. I was able to
                            tell the full story and rationale at TEDx Berkeley.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about-video">
                <img src={about2} alt="" />
            </div>
            <div className="about-info2">
                <div className="about-info2-left">
                    <div className="about-info2-left-text">
                        <p>
                            The idea for this talk came up while I was ending an intense “future vision” project where my team and I were asked to
                            come up with a vast range of ideas around a really specific problem. While doing so I started recalling my college days
                            when I studied the many psychological theories of creativity and dove deeper into the various ways in which you can
                            stimulate someone’s creativity and how looking at a subject from different angles, realistic or not, can help find unique
                            points of views in which a problem can be solved.
                        </p>
                    </div>
                    <p className="about-info2-left-text">
                        <p>
                            I was able to present this talk internally at Huge, online at DDD and at a couple of live events during 2020. See all the
                            versions below:
                        </p>
                    </p>
                    <div>
                        {textUnderline3.split('.').map((item, index) => (
                            <>
                                <TextUnderline bottom={0} key={index} style={styleInfo2} borderheight={borderHeightInfo2}>
                                    {item}.
                                </TextUnderline>
                                <br />
                            </>
                        ))}
                    </div>
                </div>
                <div className="about-info2-right">
                    <div className="about-info2-right-text">
                        <p>
                            “Creativity” and “creative” are words we hear and use left and right in the service industry; sometimes to evaluate work
                            and other times to call out full departments. Our industry celebrates creativity but in general shops do really little to
                            train this ability or to increase the performance of our brains. Ultimately it's up to each person to figure it out on
                            their own. The purpose of this 30 minute talk is to go over the basics and not so basic aspects that enable creativity in
                            the workplace. We will cover what I believe are the most important barriers and opportunities to ignite your creativity
                            and at the end of it you will hopefully have learned or relearned ways to approach new challenges and nurture your
                            creativity.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about-banner2">
                <img src={about3} alt="" />
            </div>
            <div className="about-info3">
                <div className="about-info3-left">
                    <div>
                        {textUnderline41.split(' ').map((item, index) => (
                            <>
                                <TextUnderline bottom={0} key={index} style={styleInfo3} borderheight={borderHeightInfo3}>
                                    {item}
                                </TextUnderline>
                            </>
                        ))}
                    </div>
                    <div>
                        {textUnderline42.map((item, index) => (
                            <>
                                <TextUnderline bottom={0} key={index} style={styleInfo3} borderheight={borderHeightInfo3}>
                                    {item.text}
                                </TextUnderline>
                            </>
                        ))}
                    </div>
                </div>
                <div className="about-info3-right">
                    <div className="about-info3-right-text">
                        <div className="line1">
                            <TextUnderline bottom={0} style={styleInfo3} borderheight={borderHeightInfo3}>
                                <ArrowRightOutlined />
                            </TextUnderline>

                            <TextUnderline bottom={0} style={styleInfo3} borderheight={borderHeightInfo3}>
                                Fine art :{' '}
                            </TextUnderline>
                        </div>
                        <div className="line2">
                            <p className="">
                                I define brand
                                <TextUnderline
                                    borderheight={1}
                                    style={{ fontSize: `${width <= 768 ? '16px' : '24px'}`, lineHeight: '0.5', fontWeight: '400', margin: '0 5px' }}
                                >
                                    characteristics
                                </TextUnderline>
                                to anchor them in people’s consciousness.
                            </p>
                        </div>
                    </div>
                    <div className="about-info3-right-text">
                        <div className="line1">
                            <TextUnderline bottom={0} style={styleInfo3} borderheight={borderHeightInfo3}>
                                <ArrowRightOutlined />
                            </TextUnderline>

                            <TextUnderline bottom={0} style={styleInfo3} borderheight={borderHeightInfo3}>
                                Graphic design :
                            </TextUnderline>
                        </div>
                        <div className="line2">
                            <p className="">
                                I define brand characteristics to
                                <TextUnderline
                                    borderheight={1}
                                    style={{ fontSize: `${width <= 768 ? '16px' : '24px'}`, lineHeight: '0.5', fontWeight: '400', margin: '0 5px' }}
                                >
                                    anchor
                                </TextUnderline>
                                them in people’s consciousness.
                            </p>
                        </div>
                    </div>
                    <div className="about-info3-right-text">
                        <div className="line1">
                            <TextUnderline bottom={0} style={styleInfo3} borderheight={borderHeightInfo3}>
                                <ArrowRightOutlined />
                            </TextUnderline>

                            <TextUnderline bottom={0} style={styleInfo3} borderheight={borderHeightInfo3}>
                                Illustration :
                            </TextUnderline>
                        </div>
                        <div className="line2">
                            <p className="">
                                I define
                                <TextUnderline
                                    borderheight={1}
                                    style={{ fontSize: `${width <= 768 ? '16px' : '24px'}`, lineHeight: '0.5', fontWeight: '400', margin: '0 5px' }}
                                >
                                    brand
                                </TextUnderline>
                                characteristics to anchor them in people’s consciousness.
                            </p>
                        </div>
                    </div>
                    <div className="about-info3-right-text">
                        <div className="line1">
                            <TextUnderline bottom={0} style={styleInfo3} borderheight={borderHeightInfo3}>
                                <ArrowRightOutlined />
                            </TextUnderline>

                            <TextUnderline bottom={0} style={styleInfo3} borderheight={borderHeightInfo3}>
                                Advertising :
                            </TextUnderline>
                        </div>
                        <div className="line2">
                            <p className="">
                                I define brand characteristics to anchor them in
                                <TextUnderline
                                    borderheight={1}
                                    style={{ fontSize: `${width <= 768 ? '16px' : '24px'}`, lineHeight: '0.5', fontWeight: '400', margin: '0 5px' }}
                                >
                                    people’s
                                </TextUnderline>
                                consciousness.
                            </p>
                        </div>
                    </div>
                    <div className="about-info3-right-text">
                        <div className="line1">
                            <TextUnderline bottom={0} style={styleInfo3} borderheight={borderHeightInfo3}>
                                <ArrowRightOutlined />
                            </TextUnderline>

                            <TextUnderline bottom={0} style={styleInfo3} borderheight={borderHeightInfo3}>
                                Game :
                            </TextUnderline>
                        </div>
                        <div className="line2">
                            <p className="">
                                I define brand characteristics to anchor them in people’s
                                <TextUnderline
                                    borderheight={1}
                                    style={{ fontSize: `${width <= 768 ? '16px' : '24px'}`, lineHeight: '0.5', fontWeight: '400', margin: '0 5px' }}
                                >
                                    consciousness.
                                </TextUnderline>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
