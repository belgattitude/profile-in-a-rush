/**
 * This file is part of profile-in-a-rush, a personal hackaton for getting
 * my CV online and initiate the a quest of a wonderful job.
 *
 * @copyright Copyright (c) 2019-present Sébastien Vanvelthem. (https://github.com/belgattitude)
 * @license   https://github.com/belgattitude/profile-in-a-rush/blob/master/LICENSE.md MIT
 */

import React from 'react';
import styled from '@emotion/styled';

type FooterProps = {
    className?: string;
};

const UnstyledFooter: React.FC<FooterProps> = props => {
    const { children, className } = props;
    return (
        <div className={className}>
            <div>{children}</div>
        </div>
    );
};

export const Footer = styled(UnstyledFooter)`
    display: flex;
    flex-direction: row;
    color: white;
    background-color: deeppink;
    position: static;
    z-index: 1000;
    bottom: 0;
    right: 0;
    left: 0;
    margin-top: 5em;
    height: 17em;
    line-height: 1.9em;
    padding: 10px;
    justify-content: center;
    align-items: center;
    a,
    a:visited {
        color: white;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
`;
