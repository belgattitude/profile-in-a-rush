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
    return <div css={[cssBase, available ? cssYes : cssNo]}>{statusText}</div>;
};

const cssBase = css`
    margin: 1.3em 0 1em 0;
    padding: 1em;
    font-weight: 500;
    border-radius: 5px;
`;

const cssYes = css`
    color: #108030;
    border: 1px solid #358029;
`;

const cssNo = css`
    color: red;
    border: 2px solid red;
`;
