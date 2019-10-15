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
    return {
        borderRadius: '50%',
        width: props.size,
        height: props.size,
        objectFit: 'cover',
        border: '1px solid #E9E9E9',
    };
});
