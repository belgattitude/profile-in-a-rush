/**
 * This file is part of profile-in-a-rush, a personal hackaton for getting
 * my CV online and initiate the a quest of a wonderful job.
 *
 * @copyright Copyright (c) 2019-present Sébastien Vanvelthem. (https://github.com/belgattitude)
 * @license   https://github.com/belgattitude/profile-in-a-rush/blob/master/LICENSE.md MIT
 */

import React from 'react';
import styled from '@emotion/styled';
import css from '@emotion/css';

export const WorkStatus: React.FC<{
    available: boolean;
    statusText?: string;
    children?: never;
}> = props => {
    const { available, statusText } = props;
    return (
        <div css={[cssBase, available ? cssYes : cssNo]}>
            <span>{statusText}</span>
        </div>
    );
};

const cssBase = css`
    margin: 1em 0 1em 0;
    padding: 0.4em;
`;

const cssYes = css`
    color: green;
    padding: 0em 0;
    font-weight: 500;
    span {
        //border-bottom: 1px solid deeppink;
    }
`;

const cssNo = css`
    color: red;
    font-weight: 400;
    border: 1px solid red;
    border-radius: 5px;
`;
