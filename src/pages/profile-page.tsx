import React from 'react';
import '../assets/styles/styles.scss';

import { ThemeProvider } from 'emotion-theming';
import { appClassName, siteConfig, mdxConfig } from '@config/index';
import { MDXProvider } from '@mdx-js/react';
import { Footer } from '@components/layouts';
import { defaultTheme } from '@themes/theme';
import { AboutMe, Features, Opensource, ProfileHero, Technos } from '@components/profile';
import Head from 'next/head';
import { css } from '@emotion/core';
import { Block } from '@components/profile/block';

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
                <link rel="apple-touch-icon" href="/favicon.ico" />
                <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
            </Head>

            <ThemeProvider theme={defaultTheme}>
                <MDXProvider components={mdxConfig}>
                    <ProfileHero />
                    <Block>
                        <AboutMe />
                    </Block>
                    <Block>
                        <Features
                            css={css`
                                background-color: #fbfbfb;
                            `}
                        />
                    </Block>
                    <Block>
                        <Technos />
                    </Block>
                    <Block>
                        <Opensource />
                    </Block>
                    <Footer>
                        Contact me on
                        <a href={siteConfig.linkedIn} target="_blank" rel="noreferrer">
                            &nbsp;<i className="fab fa-linkedin"></i> linked.in
                        </a>
                        <p>No recruiters please !</p>
                        <p>
                            Want to see the
                            <a href={siteConfig.githubRepo} target="_blank" rel="noreferrer">
                                &nbsp;<i className="fab fa-github"></i>code&nbsp;
                            </a>
                            ?
                        </p>
                    </Footer>
                </MDXProvider>
            </ThemeProvider>
        </div>
    );
};

export default ProfilePage;
