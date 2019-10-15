import React from 'react';
import '../assets/styles/styles.scss';
import '@emotion/core';

import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import { appClassName, siteConfig, breakpoints, mdxConfig } from '@config/index';
import Head from 'next/dist/next-server/lib/head';
import { MDXProvider } from '@mdx-js/react';
import { Footer } from '@components/layout';

import { defaultTheme } from '@themes/theme';
import { AboutMe, Features, Interests, Opensource, ProfileHero, Technos } from '@components/profile';

const GridContainer = styled.div`
    display: grid;
    grid-gap: 1em;

    grid-template-areas:
        //'header'
        'sidebar'
        'roles'
        'skills'
        'summary'
        'experience'
        'education';

    grid-template-columns: 1fr;
    max-width: 1024px;
    margin: 15px 15px;
    margin-top: 1.5em;
    @media (${breakpoints.large}) {
        margin: 0em auto;
        margin-top: 1.5em;
        padding: 5px;
        grid-template-columns: 4fr 9fr;
        grid-row-start: auto;
        grid-template-areas:
            //'header   header   header'
            'sidebar  roles    roles'
            'sidebar  skills  skills'
            'sidebar  summary  summary'
            'sidebar  experience  experience'
            'sidebar  education  education';
    }
`;

const SidebarContainer = styled.div`
    display: grid;
    grid-gap: 1em;
    grid-template-areas:
        'about'
        'contributions';
    grid-template-columns: 1fr;
    @media (${breakpoints.large}) {
        grid-template-areas:
            'about'
            'contributions';
    }
`;

const GridItem = styled.div<{
    area: string;
}>`
    grid-area: ${props => props.area};
`;

const ProfilePage: React.FC = () => {
    return (
        <div css={appClassName}>
            <Head>
                <title>{siteConfig.siteTitle}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta name="description" content={siteConfig.siteDesc} />
                <meta property="og:url" content={siteConfig.canonical} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={siteConfig.siteTitle} />
                <meta property="og:description" content={siteConfig.siteDesc} />
                <meta property="og:image" content={siteConfig.siteImg} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={siteConfig.siteTitle} />
                <meta name="twitter:description" content={siteConfig.siteDesc} />
                <meta name="twitter:image" content={siteConfig.siteImg} />
                <link rel="apple-touch-icon" href="/public/favicon.ico" />
                <link rel="shortcut icon" type="image/x-icon" href="/public/favicon.ico" />
            </Head>
            <ThemeProvider theme={defaultTheme}>
                <MDXProvider components={mdxConfig}>
                    <ProfileHero />
                    <AboutMe />
                    <Features />
                    <Interests />
                    <Technos />
                    <Opensource />
                    <Footer>
                        Contact me on
                        <a href={siteConfig.linkedIn} target="_blank" rel="noreferrer">
                            &nbsp;<i className="fab fa-linkedin"></i> linked.in
                        </a>
                        <div>No recruiters please, I already have the ones.</div>
                    </Footer>
                </MDXProvider>
            </ThemeProvider>
        </div>
    );
};

export default ProfilePage;
