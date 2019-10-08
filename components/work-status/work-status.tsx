/**
 * This file is part of profile-in-a-rush, a personal hackaton for getting
 * my CV online and initiate the a quest of a wonderful job.
 *
 * @copyright Copyright (c) 2019-present Sébastien Vanvelthem. (https://github.com/belgattitude)
 * @license   https://github.com/belgattitude/profile-in-a-rush/blob/master/LICENSE.md MIT
 */

import React from 'react';
import styled from '@emotion/styled';

export const UnstyledWorkStatus: React.FC<{
    available: boolean;
    className?: string;
    statusText?: string;
    children?: never;
}> = props => {
    const { available, statusText, className } = props;
    return (
        <div className={`${className} ${available ? 'open' : 'close'}`}>
            {statusText}
        </div>
    );
};

export const WorkStatus = styled(UnstyledWorkStatus)`    
    margin: 1em 0 1em 0;
    padding: 0em;
    &.open {
      color: white;
      border: 1px solid green;
      border-radius: 5px;
      background-color: green;
      text-align: center;      
    }
    &.close {
    }
`

