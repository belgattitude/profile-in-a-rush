/**
 * This file is part of profile-in-a-rush, a personal hackaton for getting
 * my CV online and initiate the a quest of a wonderful job.
 *
 * @copyright Copyright (c) 2019-present Sébastien Vanvelthem. (https://github.com/belgattitude)
 * @license   https://github.com/belgattitude/profile-in-a-rush/blob/master/LICENSE.md MIT
 */

import React from 'react';
import '../styles/styles.scss';
import '@emotion/core';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import { Avatar } from '../components/avatar';
import { MDXProvider } from '@mdx-js/react';
import { Box, BoxContent, BoxTitle } from '../components/box';
import { mdxProviderConfig } from '../components/mdx-provider.config';
import { appClassName } from '../config/styles.config';
import { reposToShow } from '../config/repos.config';
import { RepoList } from '../components/github';
import { SkillsPanel } from '../components/skills';
import { defaultSection, skillsRecords } from '../config/skills.config';
import { About } from '../components/about';
import { Summary } from '../components/summary';
import { Footer, Header } from '../components/layout';
import Head from 'next/dist/next-server/lib/head';

// Actually theme system not really implemented ;)
const theme = {
    colors: {
        primary: '#333',
        link: '#3685D6',
    },
};

const breakpoints = {
    small: `min-width: ${576}px`,
    large: `min-width: ${768}px`,
};

const GridContainer = styled.div`
    display: grid;
    grid-gap: 1em;

    grid-template-areas:
        'header'
        'sidebar'
        'roles'
        'skills'
        'summary'
        'experience'
        'education';
    grid-template-columns: 1fr;
    max-width: 1024px;
    margin: 15px 15px;
    margin-top: 2.4em;
    @media (${breakpoints.large}) {
        margin: 0em auto;
        margin-top: 2.4em;
        grid-template-columns: 4fr 9fr;
        grid-row-start: auto;
        grid-template-areas:
            'header   header   header'
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

const profileImg = '/static/images/me.png';

const Page: React.FC = () => {
    return (
        <div css={appClassName}>
            <Head>
                <title>Sébastien Vanvelthem - CV</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
            </Head>
            <ThemeProvider theme={theme}>
                <MDXProvider components={mdxProviderConfig}>
                    <Header>
                        C.V. experiment, curious ?{' '}
                        <b>
                            <a
                                href="https://github.com/belgattitude/profile-in-a-rush"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i className="fab fa-github" /> See the code
                            </a>
                        </b>{' '}
                        !
                    </Header>
                    <GridContainer>
                        <GridItem area="header" css={{ overflow: 'hidden' }}>
                            <Box css={{ flexDirection: 'row' }}>
                                <div>
                                    <Avatar src={profileImg} size={'100px'} />
                                </div>
                                <div css={{ marginLeft: '15px' }}>
                                    <h3>Sébastien Vanvelthem</h3>
                                    <span>Developer, Brussels</span>
                                    <p css={{ border: '1px solid green', padding: '15px' }}>
                                        Currently open for opportunities.
                                    </p>
                                </div>
                            </Box>
                        </GridItem>
                        <GridItem area="sidebar">
                            <SidebarContainer>
                                <GridItem area="about">
                                    <Box>
                                        <BoxTitle>
                                            <h2>About</h2>
                                        </BoxTitle>
                                        <About />
                                    </Box>
                                </GridItem>
                                <GridItem area="contributions">
                                    <Box>
                                        <BoxTitle>
                                            <i className="fab fa-github" />
                                            <h3>Contributions</h3>
                                        </BoxTitle>
                                        <RepoList filters={reposToShow} />
                                    </Box>
                                </GridItem>
                            </SidebarContainer>
                        </GridItem>
                        <GridItem area="roles">
                            <Box>
                                <BoxTitle>
                                    <h2>Ideal roles</h2>
                                </BoxTitle>

                                <BoxContent>
                                    React Frontend Developer - Backend engineer (PHP or Node) - Project advisor
                                    (contract)
                                </BoxContent>
                            </Box>
                        </GridItem>
                        <GridItem area="skills">
                            <Box>
                                <BoxContent>
                                    <SkillsPanel skills={skillsRecords} defaultSection={defaultSection} />
                                </BoxContent>
                            </Box>
                        </GridItem>
                        <GridItem area="summary">
                            <Box>
                                <BoxTitle>
                                    <h2>Summary</h2>
                                </BoxTitle>
                                <BoxContent>
                                    <Summary />
                                </BoxContent>
                            </Box>
                        </GridItem>
                        <GridItem area="experience">
                            <Box>
                                <BoxTitle>
                                    <h2>Experience</h2>
                                </BoxTitle>
                                <BoxContent>Complete C.V. on request only.</BoxContent>
                            </Box>
                        </GridItem>
                        <GridItem area="education">
                            <Box>
                                <BoxTitle>
                                    <h2>Education</h2>
                                </BoxTitle>
                                <BoxContent>
                                    Graduated in 2000, bachelor in "Informatique de gestion", IPL, Brussels
                                </BoxContent>
                            </Box>
                        </GridItem>
                    </GridContainer>
                    <Footer>
                        Contact me on
                        <a
                            href="https://www.linkedin.com/in/s%C3%A9bastien-v-b369565/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            &nbsp;<i className="fab fa-linkedin"></i> linked.in
                        </a>
                        <div>No recruiters please, I already have the ones.</div>
                        <div>
                            <i>BTW, this page does not use cookies or tracking.</i>
                        </div>
                        <div>
                            <i>Logos belongs to their respective owners.</i>
                        </div>
                    </Footer>
                </MDXProvider>
            </ThemeProvider>
        </div>
    );
};

export default Page;
