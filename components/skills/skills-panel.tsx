/**
 * This file is part of profile-in-a-rush, a personal hackaton for getting
 * my CV online and initiate the a quest of a wonderful job.
 *
 * @copyright Copyright (c) 2019-present Sébastien Vanvelthem. (https://github.com/belgattitude)
 * @license   https://github.com/belgattitude/profile-in-a-rush/blob/master/LICENSE.md MIT
 */

import React, { useState } from 'react';
import styled from '@emotion/styled';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { skillSections, skillType } from '../../config/skills.config';
import { SkillLabel } from './skill-label';

export type SkillSections = typeof skillSections[number];
export type SkillType = typeof skillType[number];

export type SkillRecord = {
    name: string;
    logo: string;
    homepage?: string;
    years?: number;
    rating?: number;
    sections: SkillSections[];
    type: SkillType;
};

// For animation
const variants: Variants = {
    initial: {
        opacity: 0,
        rotate: 0,
        scale: 0.2,
    },
    enter: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: {
            staggerChildren: 0.4,
            beforeChildren: false,
            duration: 0.9,
        },
    },
    exit: {
        opacity: 0,
        scale: 0,
        flexGrow: 0,
        transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] },
    },
};

// Utilitary
const isSectionsActive = (activeSections: SkillSections[]) => (sections: SkillSections[]): boolean => {
    if (activeSections === null || activeSections.length === 0) {
        return false;
    }
    return sections.some(s => activeSections.includes(s));
};

const UnstyledSkillsPanel: React.FC<{
    skills: SkillRecord[];
    defaultSection: SkillSections;
    className?: string;
    children?: never;
}> = props => {
    const { className, skills } = props;
    const [activeSections, setActiveSections] = useState<SkillSections[]>(['Overview']);
    const sectionActive = isSectionsActive(activeSections);
    return (
        <div className={className}>
            <div className="section">
                {skillSections.map(section => {
                    const cls = sectionActive([section]) ? 'tab__active' : '';
                    return (
                        <div
                            role={'tab'}
                            key={section}
                            className={`tab ${cls}`}
                            onClick={e => {
                                if (sectionActive([section])) {
                                    setActiveSections([]);
                                } else {
                                    setActiveSections([section]);
                                }
                            }}
                        >
                            {section}
                        </div>
                    );
                })}
            </div>
            <div className="card-container">
                <AnimatePresence initial={true}>
                    <motion.div
                        className="animation-container"
                        key={`${activeSections.join(',')}`}
                        variants={variants}
                        initial="initial"
                        animate="enter"
                        exit="exit"
                    >
                        {skills.map((skill, idx) => {
                            if (activeSections.length > 0 && !sectionActive(skill.sections)) {
                                return false;
                            }
                            return (
                                <motion.article className="card" key={`${skill.name}`} variants={variants}>
                                    <div className={'card-picture'}>
                                        <a href={skill.homepage} target="_blank" rel="noreferrer">
                                            <img src={skill.logo} alt={skill.name} />
                                        </a>
                                    </div>
                                    <div className={'card-footer'}>
                                        <SkillLabel skill={skill} />
                                    </div>
                                </motion.article>
                            );
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export const SkillsPanel = styled(UnstyledSkillsPanel)`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
    div.section {
        align-self: flex-start;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 30px;
        div.tab {
            padding: 5px;
            background-color: white;
            border-bottom: 2px solid #eee;
            margin: 5px;
            &:hover {
                cursor: pointer;
            }
            &.tab__active {
                border-bottom: 2px solid deeppink;
            }
        }
    }
    // container
    div.card-container {
        flex: 1 1 auto;
        display: flex;
        flex-direction: column;
        width: 100%;
        // because of animation, need one more div
        .animation-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: stretch;
            padding: 15px 0px 15px 0px;

            // the actual card
            article.card {
                flex: 1 1 auto;
                width: 33.33%;
                @media all and (max-width: 900px) {
                    width: 50%;
                }

                display: flex;
                flex-direction: column;
                align-items: center;
                .card-picture {
                    text-align: center;
                    img {
                        filter: grayscale(75%);
                        max-width: 80px;
                        height: 65px;
                        object-fit: scale-down;
                        transition: filter 0.5s ease-in-out;
                        :hover {
                            filter: grayscale(0%);
                        }
                    }
                }
                .card-footer {
                    display: flex;
                    width: 100%;
                    padding: 5px 5px 20px 5px;
                }
            }
        }
    }
`;
