/**
 * This file is part of profile-in-a-rush, a personal hackaton for getting
 * my CV online and initiate the a quest of a wonderful job.
 *
 * @copyright Copyright (c) 2019-present Sébastien Vanvelthem. (https://github.com/belgattitude)
 * @license   https://github.com/belgattitude/profile-in-a-rush/blob/master/LICENSE.md MIT
 */

import css from '@emotion/css';

export const appClassName = css`
    margin: 0;
    padding: 0;
    color: #333;
    background-color: white;
`;

export const breakpoints = {
    small: `min-width: ${576}px`,
    large: `min-width: ${768}px`,
};
