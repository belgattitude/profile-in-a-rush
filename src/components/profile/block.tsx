import styled from '@emotion/styled';
import React from 'react';
import { breakpoints } from '@/config';

type BlockProps = {
  className?: string;
};

export const UnstyledBlock: React.FC<BlockProps> = (props) => {
  const { children, className } = props;
  return <div className={className}>{children}</div>;
};

export const Block = styled(UnstyledBlock)`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.page.background};
  color: ${(props) => props.theme.colors.primary};
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 45px 20px 45px 20px;
    @media (${breakpoints.large}) {
      font-size: 1em;
      max-width: 900px;
    }
    font-weight: 400;
    letter-spacing: -0.003em;
    line-height: 1.58;
    h1,
    h2,
    h3,
    p {
      color: ${(props) => props.theme.colors.primary};
    }
    h1 {
      padding: 0;
      margin: 0;
      font-size: 1.6em;
      letter-spacing: 0;
      font-weight: 300;
    }
    h2 {
      letter-spacing: 0.015em;
      font-weight: 500;
    }
    p {
      font-size: 1em;
      padding: 0;
    }
  }
`;
