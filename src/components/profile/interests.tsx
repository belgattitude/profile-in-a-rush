import { css } from '@emotion/core';

import React from 'react';
import styled from '@emotion/styled';
import { Block } from './block';
import { breakpoints } from '../../../config';
import { Summary } from '@components/summary';

type InterestsProps = {
    className?: string;
    children?: never;
};

const UnstyledInterests: React.FC<InterestsProps> = props => {
    const { className } = props;
    return (
        <Block>
            <div className={className}>
                <h1>What do I do ?</h1>
                <h2>things acquired with time and persistence</h2>
                <div>
                    <Summary />
                </div>
            </div>
        </Block>
    );
};

export const Interests = styled(UnstyledInterests)<InterestsProps>`
    div.card-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: stretch;
        flex-wrap: wrap;
        div {
            flex: 1 1 auto;

            width: 50%;
            @media all and (${breakpoints.large}) {
                width: 33.33%;
            }
            h3 {
                font-size: 1em;
                font-weight: 600;
                padding: 0;
            }
            > p {
                margin: 5px;
            }
        }
    }
`;
