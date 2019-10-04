/**
 * This file is part of profile-in-a-rush, a personal hackaton for getting
 * my CV online and initiate the a quest of a wonderful job.
 *
 * @copyright Copyright (c) 2019-present Sébastien Vanvelthem. (https://github.com/belgattitude)
 * @license   https://github.com/belgattitude/profile-in-a-rush/blob/master/LICENSE.md MIT
 */

import React from 'react';
import styled from '@emotion/styled';

type AvatarProps = {
    src: string;
    size?: string | number;
};
export const UnstyledAvatar: React.FC<AvatarProps> = props => {
    return <img src={props.src} {...props} />;
};

export const Avatar = styled(UnstyledAvatar)(props => {
    // for default size
    //const { size="100%" }= props;
    return {
        borderRadius: '50%',
        width: props.size,
        height: props.size,
        objectFit: 'cover',
        border: '1px solid #E9E9E9',
    };
});
