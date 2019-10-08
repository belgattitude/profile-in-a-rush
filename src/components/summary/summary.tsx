/**
 * This file is part of profile-in-a-rush, a personal hackaton for getting
 * my CV online and initiate the a quest of a wonderful job.
 *
 * @copyright Copyright (c) 2019-present Sébastien Vanvelthem. (https://github.com/belgattitude)
 * @license   https://github.com/belgattitude/profile-in-a-rush/blob/master/LICENSE.md MIT
 */

import * as React from 'react';

import MDXContent from './summary.mdx';
import styled from '@emotion/styled';

const StyledSummary = styled(MDXContent)`
    font-family: 'Andale Mono';
    zoom: 0.2;
`;

export const Summary: React.FC = () => {
    return (
        <div>
            <StyledSummary />
        </div>
    );
};
