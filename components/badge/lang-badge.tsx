/**
 * This file is part of profile-in-a-rush, a personal hackaton for getting
 * my CV online and initiate the a quest of a wonderful job.
 *
 * @copyright Copyright (c) 2019-present Sébastien Vanvelthem. (https://github.com/belgattitude)
 * @license   https://github.com/belgattitude/profile-in-a-rush/blob/master/LICENSE.md MIT
 */

import React from 'react';
import styled from '@emotion/styled';

const UnstyledLangBadge: React.FC<{
    className?: string;
    title: string;
    children?: never;
}> = props => {
    const { className, title } = props;
    return <span className={className}>{title}</span>;
};

export const LangBadge = styled(UnstyledLangBadge)`
    font-weight: 300;
    font-size: 0.7em;
    color: #888;
    border: 1px #eee solid;
    //background-color: rgba(220, 220, 220, 0.2);
    padding: 2px 5px;
    border-radius: 2px;
    min-width: 3rem;
    text-align: center;
    line-height: 25px;
    height: 25px;
    margin: 0px 3px;
    box-sizing: border-box;
    :first-of-type {
        margin-left: 0;
    }
`;
