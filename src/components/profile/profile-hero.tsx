import React, { RefObject, useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { Avatar } from '../avatar';
import { breakpoints } from '../../../config';
import { useViewportScroll, useTransform, useSpring, motion } from 'framer-motion';

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
    const x = useSpring(useTransform(scrollY, [0, 500], [0, -Math.ceil(width / 1.1)]), springConfig);
    const y = useTransform(scrollY, [0, 500], [0, Math.ceil(height / 1.05)]);
    const opacity = useTransform(scrollY, [0, 500], [1, 0]);
    const zoom = useTransform(scrollY, [0, 500], [1, 0.4]);

    return (
        <div ref={measuredRef} className={className}>
            <motion.div initial={{ y: 0, x: 0, opacity: 0 }} style={{ y, x, opacity, zoom }}>
                <div>
                    {avatarImg && <Avatar src={avatarImg} size={'100px'} />}
                    <h1>Sébastien Vanvelthem</h1>
                    <p>Developer in React, Typescript and PHP.</p>
                </div>
            </motion.div>
        </div>
    );
};

export const ProfileHero = styled(UnstyledProfileHero)<ProfileHeroProps>`
    background: url('/images/bg-atomium3.jpg');
    background-attachment: fixed;
    background-position: center;
    position: relative;
    background-size: cover;
    height: 33vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    :after {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: inline-block;
        background: black;
        opacity: 0.4;
        content: '';
    }
    > * {
        z-index: 1;
    }
    div {
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
