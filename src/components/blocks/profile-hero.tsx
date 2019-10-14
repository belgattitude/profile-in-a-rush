import React from 'react';
import styled from '@emotion/styled';
import { Avatar } from '../avatar';
import { breakpoints } from '../../../config';

type ProfileHeroProps = {
    className?: string;
    children?: never;
    avatarImg?: string;
};

const UnstyledProfileHero: React.FC<ProfileHeroProps> = props => {
    const { avatarImg, className } = props;
    return (
        <div className={className}>
            <div>
                {avatarImg && <Avatar src={avatarImg} size={'100px'} />}
                <h1>Sébastien Vanvelthem</h1>
                <p>Developer in React, Typescript and PHP.</p>
            </div>
        </div>
    );
};

export const ProfileHero = styled(UnstyledProfileHero)<ProfileHeroProps>`
    background: url('/static/images/bg-atomium3.jpg');
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
        opacity: 0.5;
        content: '';
    }
    > * {
        z-index: 1;
    }
    div {
        text-align: center;
        font-size: 1em;
        @media (${breakpoints.large}) {
            font-size: 1.1em;
        }
        h1,
        p {
            padding: 0;
            margin: 0;
            color: white;
            font-weight: 200;
        }
        h1 {
            font-size: 1.6em;
            letter-spacing: 0;
            font-weight: 300;
        }
        p {
            font-size: 1em;
            font-variant: all-small-caps;
            padding: 0;
            margin: 5px;
            letter-spacing: 0.19em;
        }
    }
`;
