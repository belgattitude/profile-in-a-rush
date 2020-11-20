import React from 'react';
import styled from '@emotion/styled';

type AvatarProps = {
  src: string;
  size?: string | number;
  testId?: string;
  alt?: string;
};
export const UnstyledAvatar: React.FC<AvatarProps> = (props) => {
  const { src, alt = '', ...restProps } = props;
  return <img src={props.src} alt={alt} {...restProps} />;
};

export const Avatar = styled(UnstyledAvatar)((props: AvatarProps) => {
  return {
    borderRadius: '50%',
    width: props.size,
    height: props.size,
    objectFit: 'cover',
    border: '1px solid #E9E9E9',
  };
});
