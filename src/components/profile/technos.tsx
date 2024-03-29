import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import React from 'react';
import { defaultSection, skillsRecords } from '@/config';
import type { SkillsPanelProps } from '../skills';

export type TechnosProps = {
  className?: string;
  children?: never;
};

const SkillsPanel = dynamic<SkillsPanelProps>(
  () => import('../skills/skills-panel').then((mod) => mod.SkillsPanel),
  {
    loading: () => <div>Loading...</div>,
    ssr: false,
  }
);

const UnstyledTechnos: React.FC<TechnosProps> = (props) => {
  const { className } = props;
  return (
    <div className={className}>
      <h1>Technos</h1>
      <h2>what do I work with (and relics) ?</h2>
      <SkillsPanel skills={skillsRecords} defaultSection={defaultSection} />
      <h3>Frontend</h3>
      <p>
        When working on frontend I mainly code with the <strong>react</strong>/
        <strong>typescript</strong> combo and its associated ecosystem (redux,
        css-in-js, jest, webpack, babel...). Initially got my hands on them
        around 2015 moving away from AngularJs and ExtJs.
      </p>

      <h3>Backend</h3>

      <p>
        Occasionally in <strong>node / express</strong>, but most of the time in{' '}
        <strong>PHP</strong>. Been through frameworks like Zend or Symfony after
        having committed my own in a very past life. Concepts like MVC, DI, IoC,
        ORM, SOLID... have been slowly integrated along the years. Nowadays and
        following the api centric trends, I generally work with micro-frameworks
        (psr) and prefer thinking of architecture than style.
      </p>

      <h3>Database</h3>

      <p>
        Have a long story with SQL and relational databases (complex queries,
        optimizations, triggers, procedures, architecture...). Had to deal with
        analytics and ecommerce for a while...
      </p>

      <h3>Architecture</h3>
      <p>
        In the recent years, I sensed the need to improve my knowledge of
        application architecture (DDD...), something that I always felt missing
        or too partially understood. A lifetime process...
      </p>

      <p>I usually share my time between frontend and backend.</p>
    </div>
  );
};

export const Technos = styled(UnstyledTechnos)<TechnosProps>`
  > div {
    width: 100%;
    max-width: 650px;
  }
  > h3 {
    font-weight: 300;
  }
  > p {
    width: 80%;
    margin: 20px 0;
    text-align: left;
    > strong {
      color: black;
      font-weight: 500;
    }
  }
`;
