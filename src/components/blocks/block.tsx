import React from 'react';
import styled from '@emotion/styled';
import { Avatar } from '../avatar';
import { breakpoints } from '../../../config';
import { ProfileHeader } from './profile-header';

type BlockProps = {
    className?: string;
};
const UnstyledBlock: React.FC<BlockProps> = props => {
    const { className, children } = props;
    return <div className={className}>{children}</div>;
};
export const Block = styled(UnstyledBlock)<BlockProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    > div:first-child {
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        text-align: center;
        padding: 45px 20px;
        @media (${breakpoints.large}) {
            font-size: 1em;
            max-width: 900px;
        }
        font-weight: 400;
        color: rgb(51, 51, 51);
        letter-spacing: -0.003em;
        line-height: 1.58;
        h1,
        p {
        }
        h1 {
            padding: 0;
            margin: 0;
            font-size: 1.6em;
            letter-spacing: 0;
            font-weight: 300;
        }
        p {
            font-size: 1em;
            padding: 0;
        }
    }
`;
