import React, { useCallback, useState } from 'react';
import styled from '@emotion/styled';
import { Avatar } from '../avatar';
import { breakpoints } from '../../../config';
import { useViewportScroll, useTransform, useSpring, motion } from 'framer-motion';
import { css } from '@emotion/react';
import { circIn, circOut, backOut, easeInOut } from '@popmotion/easing';

type ProfileHeroProps = {
  className?: string;
  children?: never;
  avatarImg?: string;
};

const UnstyledProfileHero: React.FC<ProfileHeroProps> = (props) => {
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
    damping: 17,
    stiffness: 60,
    mass: 3,
  };

  const minWidth = 600;
  const minHeight = 400;
  const { width } = elementRect || { width: minWidth };
  const { height } = elementRect || { height: minHeight };
  const x = useSpring(
    useTransform(scrollY, [0, height], [0, -Math.ceil(Math.max(width * 1.7, minWidth))]),
    springConfig
  );
  const x2 = useSpring(
    useTransform(scrollY, [0, height / 2], [0, Math.ceil(width > minWidth ? width / 4 : 0)]),
    springConfig
  );
  const y = useTransform(scrollY, [0, height], [0, Math.ceil(height / 1.1)]);
  const y2 = useTransform(scrollY, [0, height / 2], [0, Math.ceil(height / 2.75)]);

  const opacity = useTransform(scrollY, [0, height], [1, 0.3], {
    ease: backOut,
  });
  const opacity2 = useTransform(scrollY, [0, height / 2], width < 500 ? [1, 0.1] : [0.1, 1]);
  const zoom = useTransform(scrollY, [0, height], [1, 0.2]);
  const xAvatar = useSpring(useTransform(scrollY, [0, height], [0, Math.ceil(width / 2)]), springConfig);
  const opacityAvatar = useTransform(scrollY, [0, height], [0, 1]);

  const img = '/images/unsplash-bigrock.jpg';

  return (
    <div ref={measuredRef} className={className} css={{ overflow: 'hidden' }}>
      <div
        className={'background'}
        css={css`
          height: 100%;
          background: white;
          background-size: cover;
          background-image: url(${img});
          background-attachment: fixed;
          background-position: center;
          position: absolute;
          bottom: 0;
          top: 0;
          left: 0;
          right: 0;
          @media (${breakpoints.large}) {
            background-size: cover;
            background-attachment: fixed;
            background-position: top;
            background-clip: content-box;
            transform: skew(10deg) rotate(10deg);
          }
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
        initial={{ opacity: 0 }}
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
        <motion.h1 initial={{ x: 0, y: 0, opacity: 0 }} style={{ y, x, opacity, zoom }}>
          Sébastien Vanvelthem
        </motion.h1>
        <motion.p
          initial={{ x: 0, y: 0, opacity: 0.7 }}
          style={{ x: x2, y: y2 }}
          animate={{
            opacity: 1,
            transition: { duration: 1 },
            transitionEnd: {},
          }}
        >
          Developer in React, Typescript and PHP.
        </motion.p>
      </div>
    </div>
  );
};

export const ProfileHero = styled(UnstyledProfileHero)<ProfileHeroProps>`
  position: relative;
  height: 50vh;
  // min-height: -webkit-fill-available;
  @media (${breakpoints.large}) {
    height: 50vh;
    min-height: unset;
  }
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
      font-weight: 400;
      margin: 5px;
    }
    p {
      font-size: 0.9em;
      font-variant: all-small-caps;
      margin: 0;
      letter-spacing: 0.17em;
      @media (${breakpoints.large}) {
        font-size: 1em;
        letter-spacing: 0.19em;
      }
    }
  }
`;
