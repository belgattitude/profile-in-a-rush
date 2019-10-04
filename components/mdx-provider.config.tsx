/**
 * This file is part of profile-in-a-rush, a personal hackaton for getting
 * my CV online and initiate the a quest of a wonderful job.
 *
 * @copyright Copyright (c) 2019-present Sébastien Vanvelthem. (https://github.com/belgattitude)
 * @license   https://github.com/belgattitude/profile-in-a-rush/blob/master/LICENSE.md MIT
 */

import styled from '@emotion/styled';

const MyH1 = styled.h1``;
const MyH2 = styled.h2`
    font-weight: bold;
`;
const MyParagraph = styled.p`
    font-weight: 300;
`;
export const mdxProviderConfig = {
    h1: MyH1,
    h2: MyH2,
    p: MyParagraph,
};
