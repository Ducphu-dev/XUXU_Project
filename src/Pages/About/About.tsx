import React from 'react';
import './About.scss';
import about1 from '../../Assets/images/About/about-01.png';
import about2 from '../../Assets/images/About/about-02-mov.png';
import about3 from '../../Assets/images/About/about-02.png';
import { ArrowRightOutlined } from '@ant-design/icons';
import TextUnderline from '../../Component/TextUnderline/TextUnderline';

type Props = {};

const textUnderline1 = 'XUXU Profile';
const textUnderline2 = [
    {
        text: 'This',
    },
    {
        text: 'is',
    },
    {
        text: 'XUXU,',
    },
    {
        text: 'Excutive',
    },
    {
        text: 'Creative',
    },
    {
        text: 'Director',
    },
    {
        text: 'at',
    },
    {
        text: 'Huge',
    },
    {
        text: 'Oakland,',
    },
    {
        text: 'Artist',
    },
    {
        text: 'and',
    },
    {
        text: 'Designer',
    },
    {
        text: 'based',
    },
    {
        text: 'in',
    },
    {
        text: 'California.',
    },
];

const textUnderline3 = [
    {
        text: 'Awwards Conference — Amsterdam.',
    },
    {
        text: 'Awwards Conference — San Francisco.',
    },
    {
        text: 'IngeniUX — Seattle.',
    },
    {
        text: 'Digital Design Days 2019 — Milan.',
    },
];

const textUnderline4 = [
    {
        text: 'I',
    },
    {
        text: 'consult',
    },
    {
        text: '&',
    },
    {
        text: 'design',
    },
    {
        text: 'product :',
    },
];

const About = (props: Props) => {
    return (
        <div className="about-container">
            <div className="about-heading">
                {textUnderline1.split(' ').map((item, index) => (
                    <>
                        <TextUnderline bottom={0} key={index} style={{ fontSize: '54px', fontFamily: 'Montserrat-SemiBold', marginRight: '25px' }} borderheight={5}>
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
                    <p>This is XUXU,</p>
                    <p>Excutive Creatvie Director</p>
                    <p>at Huge Oakland, Artist</p>
                    <p>and Designer based in </p>
                    <p>Califonia.</p>
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
                    <p className="about-info2-left-text">Awwards Conference — Amsterdam.</p>
                    <p className="about-info2-left-text">Awwards Conference — San Francisco.</p>
                    <p className="about-info2-left-text">IngeniUX — Seattle.</p>
                    <p className="about-info2-left-text">Digital Design Days 2019 — Milan.</p>
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
                    <p className="about-info3-left-text">I consult </p>
                    <p className="about-info3-left-text">design product : </p>
                </div>
                <div className="about-info3-right">
                    <div className="about-info3-right-text">
                        <div className="line1">
                            <ArrowRightOutlined />
                            <p className="">Fine art :</p>
                        </div>
                        <div className="line2">
                            <p className="">I define brand characteristics to anchor them in people’s consciousness.</p>
                        </div>
                    </div>
                    <div className="about-info3-right-text">
                        <div className="line1">
                            <ArrowRightOutlined />
                            <p className="">Graphic design :</p>
                        </div>
                        <div className="line2">
                            <p className="">I define brand characteristics to anchor them in people’s consciousness.</p>
                        </div>
                    </div>
                    <div className="about-info3-right-text">
                        <div className="line1">
                            <ArrowRightOutlined />
                            <p className="">Illustration :</p>
                        </div>
                        <div className="line2">
                            <p className="">I define brand characteristics to anchor them in people’s consciousness.</p>
                        </div>
                    </div>
                    <div className="about-info3-right-text">
                        <div className="line1">
                            <ArrowRightOutlined />
                            <p className="">Advertising :</p>
                        </div>
                        <div className="line2">
                            <p className="">I define brand characteristics to anchor them in people’s consciousness.</p>
                        </div>
                    </div>
                    <div className="about-info3-right-text">
                        <div className="line1">
                            <ArrowRightOutlined />
                            <p className="">Game :</p>
                        </div>
                        <div className="line2">
                            <p className="">I define brand characteristics to anchor them in people’s consciousness.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
