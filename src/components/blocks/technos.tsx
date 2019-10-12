import React from 'react';
import styled from '@emotion/styled';
import { Block } from './block';
import { defaultSection, githubQuery, reposToShow, skillsRecords } from '../../../config';
import dynamic from 'next/dist/next-server/lib/dynamic';
import { SkillsPanelProps } from '../skills';

type TechnosProps = {
    className?: string;
    children?: never;
};

const SkillsPanelNoSSR = dynamic<SkillsPanelProps>(() => import('../skills/skills-panel-no-ssr') as any, {
    ssr: false,
});

const UnstyledTechnos: React.FC<TechnosProps> = props => {
    const { className } = props;
    return (
        <Block>
            <div className={className}>
                <h1>Technos</h1>
                <h2>What do I work with (and relics) ?</h2>
                <SkillsPanelNoSSR skills={skillsRecords} defaultSection={defaultSection} />
                <h3>Frontend</h3>
                <p>
                    When working on frontend I mainly code with the <strong>react</strong>/<strong>typescript</strong>{' '}
                    combo and its associated ecosystem (redux, jest, webpack, babel...). Initially got my hands on them
                    around 2015 moving away from AngularJs and ExtJs.
                </p>

                <h3>Backend</h3>

                <p>
                    Occasionally in <strong>node / express</strong>, but most of the time in <strong>PHP</strong>. Been
                    through frameworks like Zend or Symfony after having committed my own in a very past life. Concepts
                    like MVC, DI, IoC, ORM, SOLID... have been slowly integrated along the years. Nowadays and following
                    the api centric trends, I generally work with micro-frameworks such as expressive (psr) and prefer
                    thinking of architecture than style.
                </p>

                <h3>Database</h3>

                <p>
                    Have a long story with SQL and relational databases (complex queries, optimizations, triggers,
                    procedures, architecture...).
                </p>

                <h3>Architecture</h3>
                <p>
                    In the recent years, I sensed the need to improve my knowledge of application architecture (DDD...),
                    something that I always felt missing or too partially understood. Figured out it can take a lifetime
                    but at least I better see how it could have impacted some past projects. At the time of writing, I
                    really recommend <strong>khalilstemmler.com</strong> for the typescript addicts. Kudos to him.
                </p>

                <p>I usually share my time between frontend and backend.</p>
            </div>
        </Block>
    );
};

export const Technos = styled(UnstyledTechnos)<TechnosProps>`
    > div {
        width: 100%;
        max-width: 650px;
        // text-align: center;
    }
    > p {
        width: 80%;
        margin: 20px 0;
        text-align: left;
    }
`;
