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
import { skillSections, skillsRecords, skillType } from '../../config/skills.config';
import { SkillRecord } from './skills-panel';

const UnstyledSkillLabel: React.FC<{
    skill: SkillRecord;
    className?: string;
    chilren?: never;
}> = props => {
    const { skill, className } = props;
    const { name, years, type, rating, sections } = skill;
    return (
        <div className={className}>
            {name} {years && years >= 1 && <span className="years"> &gt;{years}y</span>}
        </div>
    );
};

export const SkillLabel = styled(UnstyledSkillLabel)`
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    font-size: 0.9em;
    flex: 1 1 100%;
    span.years {
        padding-left: 5px;
        background-color: #eee;
    }
`;
