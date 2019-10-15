import { css } from '@emotion/core';

import React from 'react';
import styled from '@emotion/styled';
import { Block } from './block';
import { breakpoints } from '../../../config';
import { ThemeProviderProps, useTheme } from 'emotion-theming';
import { Theme } from '../../themes/theme';

type InterestsProps = {
    className?: string;
    children?: never;
};

const UnstyledInterests: React.FC<InterestsProps> = props => {
    const { className } = props;
    const theme = useTheme<Theme>();
    return (
        <Block>
            <div
                css={css`
                    background-color: ${theme.colors.primary};
                `}
                className={className}
            >
                <h1>What do I do ?</h1>
                <h2>things acquired with time and persistence</h2>
                <div className={'card-container'}>
                    <div>
                        <h3>Programming</h3>
                        <p>Enthusiast coder but product minded first. I like to see something come to life.</p>
                    </div>

                    <div>
                        <h3>Quality and review</h3>
                        <p>
                            Code review and implementation of test practices. Cause I did not in the past and it hurts
                            ;)
                        </p>
                    </div>

                    <div>
                        <h3>Modern Tooling</h3>
                        <p>Modern tools to facilitate project workflows, ensure quality and improve developer life.</p>
                    </div>

                    <div>
                        <h3>Documentation</h3>
                        <p>Doc and technical writer, markdown addict and learning by doing...</p>
                    </div>
                    <div>
                        <h3>Experience</h3>
                        <p>B2B ecommerce • logistics & geo • statistics & BI • SPA/PWA • track & trace • ...</p>
                    </div>
                    <div>
                        <h3>Integration</h3>
                        <p>Developing integrations can reveal useful. Got my hands on few of them, even SAP...</p>
                    </div>
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
