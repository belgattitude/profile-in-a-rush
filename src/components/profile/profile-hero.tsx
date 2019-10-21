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
    const x = useSpring(useTransform(scrollY, [0, height], [0, -Math.ceil(width * 1.7)]), springConfig);
    const x2 = useSpring(useTransform(scrollY, [0, height / 2], [0, Math.ceil(width / 4)]), springConfig);
    const y = useTransform(scrollY, [0, height], [0, Math.ceil(height / 1.1)]);
    const y2 = useTransform(scrollY, [0, height / 2], [0, Math.ceil(height / 2.4)]);
    const opacity = useTransform(scrollY, [0, height], [1, 1], {
        ease: circIn,
    });
    const opacity2 = useTransform(scrollY, [0, height / 2], [0.1, 1]);
    const zoom = useTransform(scrollY, [0, height], [1, 0.2]);
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
                    background: #0f0c29;
                    background: linear-gradient(to right, #24243e, #302b63, #0f0c29);
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
    height: 50vh;

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
