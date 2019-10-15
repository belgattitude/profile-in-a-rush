import React from 'react';
import styled from '@emotion/styled';
import { Block } from './block';

type AboutMeProps = {
    className?: string;
    children?: never;
};

const UnstyledAboutMe: React.FC<AboutMeProps> = props => {
    const { className } = props;
    return (
        <Block css={{ color: 'red' }}>
            <div className={className}>
                <h1>About me</h1>
                <p>
                    I'm a passionate developer with more than 15 years experience in backend and frontend technologies.
                    Over the years I acquired some acquaintance with best practices, testing, q&a, architecture,... and
                    hopefully survived the javascript fatigue. I live in Brussels and work as a freelancer.
                </p>
            </div>
        </Block>
    );
};

export const AboutMe = styled(UnstyledAboutMe)<AboutMeProps>``;
