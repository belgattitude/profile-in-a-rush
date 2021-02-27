import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { appClassName, siteConfig, mdxConfig } from '@config/index';
import { MDXProvider } from '@mdx-js/react';
import { Footer } from '@components/layouts';
import { defaultTheme } from '@themes/theme';
import Head from 'next/head';
import { css } from '@emotion/react';
import { Block } from '@components/profile/block';
import dynamic from 'next/dist/next-server/lib/dynamic';
import { AboutMe, Features, Opensource, ProfileHero, TechnosProps } from '@components/profile';

const Technos = dynamic<TechnosProps>(
  () => import('@components/profile/technos').then((mod) => mod.Technos),
  {
    ssr: false,
  }
);


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
        <link rel="preload" href="/fonts/work-sans/work-sans-latin-400.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="/fonts/work-sans/work-sans-latin-300.woff2" as="font" crossOrigin="" />
      </Head>

      <ThemeProvider theme={defaultTheme}>
        <MDXProvider components={mdxConfig}>
          <ProfileHero
          /*avatarImg={siteConfig.profileImg}*/
          />
          <Block
            css={css`
              margin-top: 3.5em;
            `}
          >
            <AboutMe />
          </Block>
          <Block>
            <Features
              css={css`
                background-color: #fefefe;
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
              &nbsp;
              <i className="fab fa-linkedin" />
              &nbsp;linked.in
            </a>
            <p>No recruiters please !</p>
            <p>
              Want to see the
              <a href={siteConfig.githubRepo} target="_blank" rel="noreferrer">
                &nbsp;
                <i className="fab fa-github" />
                &nbsp;code&nbsp;
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
