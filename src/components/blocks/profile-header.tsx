import React from 'react';
import styled from '@emotion/styled';
import { Avatar } from '../avatar';
import { breakpoints } from '../../../config';

type ProfileHeaderProps = {
    className?: string;
    children?: never;
    avatarImg?: string;
};

const UnstyledProfileHeader: React.FC<ProfileHeaderProps> = props => {
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

export const ProfileHeader = styled(UnstyledProfileHeader)<ProfileHeaderProps>`
    background: url('/static/images/bg-atomium3.jpg');
    //background: url('/static/images/keyboard.jpg');
    //background: url('/static/images/code.jpg');
    //background: url('/static/images/code.jpg');
    //background: url('/static/images/flowers.jpg');
    background-attachment: fixed;
    background-position: center;
    position: relative;
    background-size: cover;

    height: 33vh;
    /*
  min-height: 100vh;
  // Hack for mobile
  min-height: -webkit-fill-available;
 
   */

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
        //text-stroke: 1px white;
        h1,
        p {
            padding: 0;
            margin: 0;
            color: white;
            //text-shadow: 1px -0px 0 #555, -1px 1px 0 #666, 1px 1px 0 #444, -1px -1px 0 #444;
            font-family: 'Work Sans', sans-serif;
            font-weight: 200;

            //
        }
        h1 {
            font-size: 1.6em;
            //font-size: 62px;
            letter-spacing: 0;
            font-weight: 300;
            //letter-spacing: 0.05em;
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
