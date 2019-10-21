import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { Avatar } from '../avatar';
import { breakpoints } from '../../../config';
import { useViewportScroll, useTransform, useSpring, motion } from 'framer-motion';
import { css } from '@emotion/core';
import { circIn } from '@popmotion/easing';

type ProfileHeroProps = {
    className?: string;
    children?: never;
    avatarImg?: string;
};

const UnstyledProfileHero: React.FC<ProfileHeroProps> = props => {
    const { avatarImg, className } = props;
    const { scrollY } = useViewportScroll();

    const [elementRect, setElementRect] = useState<ClientRect | null>(null);

    // just because useRef and useLayoutEffect won't do it.
    const measuredRef = useCallback((node: HTMLDivElement | null) => {
        if (node !== null) {
            setElementRect(node.getBoundingClientRect());
        }
    }, []);

    const springConfig = {
        damping: 14,
        stiffness: 90,
        mass: 1,
    };

    const { width } = elementRect || { width: 600 };
    const { height } = elementRect || { height: 400 };
    console.log('height', height);
    const x = useSpring(useTransform(scrollY, [0, height], [0, -Math.ceil(width * 1.1)]), springConfig);
    const x2 = useSpring(useTransform(scrollY, [0, height / 2], [0, Math.ceil(width / 4)]), springConfig);
    const y = useTransform(scrollY, [0, height], [0, Math.ceil(height / 1.1)]);
    /*
    const y2 = useSpring(useTransform(scrollY, [0, height / 2], [0, Math.ceil(height / 2.4)]), {
        damping: 100,
        stiffness: 100
    });

     */
    const y2 = useTransform(scrollY, [0, height / 2], [0, Math.ceil(height / 2.4)]);
    const opacity = useTransform(scrollY, [0, height], [1, 1], {
        ease: circIn,
    });
    const opacity2 = useTransform(scrollY, [0, height], [0.15, 1]);
    const zoom = useTransform(scrollY, [0, height], [1, 0.4]);
    const xAvatar = useSpring(useTransform(scrollY, [0, height], [0, Math.ceil(width / 2)]), springConfig);
    const opacityAvatar = useTransform(scrollY, [0, height], [0, 1]);

    //const img = '/images/red-unsplash.jpg';
    //const img = '/images/blue-unsplash.jpg';
    const img = '/images/leafs-unsplash2.jpg';
    //const img = '/images/picos.jpg';

    //const img = '/images/autumn-unsplash.jpg';
    //const img = '/images/dancer-dark-unsplash.jpg';

    return (
        <div ref={measuredRef} className={className} css={{ overflowX: 'hidden' }}>
            <div
                className={'background'}
                css={css`
                    background: white;
                    background-image: url(${img});
                    background-size: cover;
                    background-attachment: scroll;
                    background-position: top;
                    position: absolute;
                    bottom: 0;
                    top: 0;
                    left: 0;
                    right: 0;
                `}
            ></div>
            <motion.div
                className={'background-overlay'}
                css={css`
                    position: absolute;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    //background: linear-gradient(45deg, rgb(45, 11, 30) 0%, rgb(45, 11, 30) 49%,rgb(78, 19, 25) 49%, rgb(78, 19, 25) 67%,rgb(111, 27, 19) 67%, rgb(111, 27, 19) 76%,rgb(143, 36, 14) 76%, rgb(143, 36, 14) 81%,rgb(176, 44, 8) 81%, rgb(176, 44, 8) 82%,rgb(209, 52, 3) 82%, rgb(209, 52, 3) 100%);
                    //background: linear-gradient(0deg, rgb(0, 11, 58) 0%, rgb(0, 11, 58) 20%,rgb(50, 23, 56) 20%, rgb(50, 23, 56) 40%,rgb(100, 35, 53) 40%, rgb(100, 35, 53) 60%,rgb(150, 47, 51) 60%, rgb(150, 47, 51) 80%,rgb(200, 59, 48) 80%, rgb(200, 59, 48) 100%);
                    //background: linear-gradient(102deg, rgba(249, 249, 249, 0.1) 0%, rgba(249, 249, 249, 0.1) 14%,rgba(161, 161, 161, 0.1) 14%, rgba(161, 161, 161, 0.1) 100%),linear-gradient(310deg, rgba(26, 26, 26, 0.03) 0%, rgba(26, 26, 26, 0.03) 71%,rgba(189, 189, 189, 0.03) 71%, rgba(189, 189, 189, 0.03) 100%),linear-gradient(133deg, rgba(132, 132, 132, 0.1) 0%, rgba(132, 132, 132, 0.1) 8%,rgba(95, 95, 95, 0.1) 8%, rgba(95, 95, 95, 0.1) 100%),linear-gradient(142deg, rgba(110, 110, 110, 0.03) 0%, rgba(110, 110, 110, 0.03) 46%,rgba(8, 8, 8, 0.03) 46%, rgba(8, 8, 8, 0.03) 100%),linear-gradient(346deg, rgba(231, 231, 231, 0.05) 0%, rgba(231, 231, 231, 0.05) 6%,rgba(71, 71, 71, 0.05) 6%, rgba(71, 71, 71, 0.05) 100%),linear-gradient(118deg, rgba(251, 251, 251, 0.07) 0%, rgba(251, 251, 251, 0.07) 72%,rgba(24, 24, 24, 0.07) 72%, rgba(24, 24, 24, 0.07) 100%),linear-gradient(338deg, rgba(75, 75, 75, 0.08) 0%, rgba(75, 75, 75, 0.08) 37%,rgba(213, 213, 213, 0.08) 37%, rgba(213, 213, 213, 0.08) 100%),linear-gradient(90deg, rgb(199, 202, 132),rgb(25, 94, 125));
                    background: linear-gradient(
                            50deg,
                            rgba(146, 146, 146, 0.02) 0%,
                            rgba(146, 146, 146, 0.02) 25%,
                            rgba(82, 82, 82, 0.02) 25%,
                            rgba(82, 82, 82, 0.02) 50%,
                            rgba(217, 217, 217, 0.02) 50%,
                            rgba(217, 217, 217, 0.02) 75%,
                            rgba(41, 41, 41, 0.02) 75%,
                            rgba(41, 41, 41, 0.02) 100%
                        ),
                        linear-gradient(
                            252deg,
                            rgba(126, 126, 126, 0.01) 0%,
                            rgba(126, 126, 126, 0.01) 25%,
                            rgba(117, 117, 117, 0.01) 25%,
                            rgba(117, 117, 117, 0.01) 50%,
                            rgba(219, 219, 219, 0.01) 50%,
                            rgba(219, 219, 219, 0.01) 75%,
                            rgba(41, 41, 41, 0.01) 75%,
                            rgba(41, 41, 41, 0.01) 100%
                        ),
                        linear-gradient(
                            272deg,
                            rgba(166, 166, 166, 0.01) 0%,
                            rgba(166, 166, 166, 0.01) 20%,
                            rgba(187, 187, 187, 0.01) 20%,
                            rgba(187, 187, 187, 0.01) 40%,
                            rgba(238, 238, 238, 0.01) 40%,
                            rgba(238, 238, 238, 0.01) 60%,
                            rgba(204, 204, 204, 0.01) 60%,
                            rgba(204, 204, 204, 0.01) 80%,
                            rgba(5, 5, 5, 0.01) 80%,
                            rgba(5, 5, 5, 0.01) 100%
                        ),
                        linear-gradient(
                            86deg,
                            rgba(143, 143, 143, 0.02) 0%,
                            rgba(143, 143, 143, 0.02) 12.5%,
                            rgba(36, 36, 36, 0.02) 12.5%,
                            rgba(36, 36, 36, 0.02) 25%,
                            rgba(23, 23, 23, 0.02) 25%,
                            rgba(23, 23, 23, 0.02) 37.5%,
                            rgba(223, 223, 223, 0.02) 37.5%,
                            rgba(223, 223, 223, 0.02) 50%,
                            rgba(101, 101, 101, 0.02) 50%,
                            rgba(101, 101, 101, 0.02) 62.5%,
                            rgba(94, 94, 94, 0.02) 62.5%,
                            rgba(94, 94, 94, 0.02) 75%,
                            rgba(148, 148, 148, 0.02) 75%,
                            rgba(148, 148, 148, 0.02) 87.5%,
                            rgba(107, 107, 107, 0.02) 87.5%,
                            rgba(107, 107, 107, 0.02) 100%
                        ),
                        linear-gradient(
                            25deg,
                            rgba(2, 2, 2, 0.02) 0%,
                            rgba(2, 2, 2, 0.02) 16.667%,
                            rgba(51, 51, 51, 0.02) 16.667%,
                            rgba(51, 51, 51, 0.02) 33.334%,
                            rgba(26, 26, 26, 0.02) 33.334%,
                            rgba(26, 26, 26, 0.02) 50.001000000000005%,
                            rgba(238, 238, 238, 0.02) 50.001%,
                            rgba(238, 238, 238, 0.02) 66.668%,
                            rgba(128, 128, 128, 0.02) 66.668%,
                            rgba(128, 128, 128, 0.02) 83.33500000000001%,
                            rgba(21, 21, 21, 0.02) 83.335%,
                            rgba(21, 21, 21, 0.02) 100.002%
                        ),
                        linear-gradient(
                            325deg,
                            rgba(95, 95, 95, 0.03) 0%,
                            rgba(95, 95, 95, 0.03) 14.286%,
                            rgba(68, 68, 68, 0.03) 14.286%,
                            rgba(68, 68, 68, 0.03) 28.572%,
                            rgba(194, 194, 194, 0.03) 28.572%,
                            rgba(194, 194, 194, 0.03) 42.858%,
                            rgba(51, 51, 51, 0.03) 42.858%,
                            rgba(51, 51, 51, 0.03) 57.144%,
                            rgba(110, 110, 110, 0.03) 57.144%,
                            rgba(110, 110, 110, 0.03) 71.42999999999999%,
                            rgba(64, 64, 64, 0.03) 71.43%,
                            rgba(64, 64, 64, 0.03) 85.71600000000001%,
                            rgba(31, 31, 31, 0.03) 85.716%,
                            rgba(31, 31, 31, 0.03) 100.002%
                        ),
                        linear-gradient(90deg, hsl(80, 0%, 14%), hsl(80, 0%, 14%));
                    //background: linear-gradient(0deg, rgb(94, 5, 4),rgb(253, 19, 61));
                `}
                initial={{ opacity: 0.3 }}
                style={{ opacity: opacity2 }}
            ></motion.div>
            {avatarImg && (
                <motion.div
                    css={css`
                        position: absolute;
                        bottom: 0;
                    `}
                    initial={{ x: 0, opacity: 0 }}
                    style={{ x: xAvatar, opacity: opacityAvatar }}
                >
                    <Avatar src={avatarImg} size={'80px'} />
                </motion.div>
            )}

            <div className={'content'}>
                <motion.h1 initial={{ y: 0, x: 0, opacity: 0 }} style={{ y, x, opacity, zoom }}>
                    Sébastien Vanvelthem
                </motion.h1>
                <motion.p initial={{ x: 0, y: 0 }} style={{ x: x2, y: y2 }}>
                    Developer in React, Typescript and PHP.
                </motion.p>
            </div>
        </div>
    );
};

export const ProfileHero = styled(UnstyledProfileHero)<ProfileHeroProps>`
    position: relative;
    height: 60vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    > * {
        z-index: 1;
    }
    div.content {
        text-align: center;
        font-size: 1em;
        color: white;
        @media (${breakpoints.large}) {
            font-size: 1.1em;
        }
        h1 {
            font-size: 1.6em;
            letter-spacing: 0.1em;
            font-weight: 300;
            margin: 5px;
        }
        p {
            font-size: 1em;
            font-variant: all-small-caps;
            margin: 0;
            letter-spacing: 0.19em;
        }
    }
`;
