import { SkillSections } from './skills-panel';
import { Variants } from 'framer-motion';
import { sectionAnimations } from '../../../config';

/**
 * This file is part of profile-in-a-rush, a personal hackaton for getting
 * my CV online and initiate the a quest of a wonderful job.
 *
 * @copyright Copyright (c) 2019-present Sébastien Vanvelthem. (https://github.com/belgattitude)
 * @license   https://github.com/belgattitude/profile-in-a-rush/blob/master/LICENSE.md MIT
 */

export type AnimationType = 'none' | 'adrenaline' | 'soft' | 'topdown';
export type SectionAnimationConfig = Partial<{ [k in AnimationType]: SkillSections[] }>;

// For animation
export const getListVariants = (type: AnimationType = 'none'): Variants => {
    switch (type) {
        case 'topdown':
            return {
                initial: {},
                enter: {
                    transition: {
                        staggerChildren: 0,
                    },
                },
            };

        case 'adrenaline':
            return {
                initial: {
                    filter: 'grayscale(100%)',
                },
                enter: {
                    transitionEnd: {
                        opacity: 1,
                        filter: 'none',
                    },
                    transition: {
                        staggerChildren: 0.3,
                        ease: 'easeOut',
                    },
                },
                exit: {
                    flexGrow: 0,
                    transition: { duration: 0.2, ease: [0.48, 0.15, 0.25, 0.96] },
                },
            };
        case 'none':
        default:
            return { initial: {}, enter: {}, exit: {} };
    }
};

export const getItemVariants = (type: AnimationType = 'none'): Variants => {
    const vw = window !== undefined ? Math.ceil(window.innerWidth / 4.9) : 800;
    const vh = window !== undefined ? Math.ceil(window.innerWidth / 4.9) : 800;

    const initialX = Math.random() > 0.5 ? vw : -vw;
    const initialY = Math.random() > 0.5 ? vh : -vh;

    switch (type) {
        case 'soft':
            return {
                initial: {
                    opacity: 0.6,
                    x: Math.ceil(Math.random() * 100) * (Math.random() > 0.5 ? -1 : 1),
                    y: Math.ceil(Math.random() * 2) * (Math.random() > 0.5 ? -1 : 1),
                    scale: 1.01,
                },
                enter: {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    scale: 1,
                    transition: {
                        //staggerChildren: 0.20,
                        //beforeChildren: false,
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

        case 'topdown':
            return {
                initial: {
                    opacity: 0,

                    scale: 0.1,
                    x: initialX,
                    y: -800,
                },
                enter: {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                    transition: {
                        //staggerChildren: 0.12,
                        beforeChildren: false,
                    },
                },
                exit: {
                    opacity: 0,
                    scale: 0,
                    flexGrow: 0,
                    transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] },
                },
            };
        case 'adrenaline':
            return {
                initial: {
                    opacity: 0,
                    scale: 4,
                    x: initialX,
                    y: initialY,
                },
                enter: {
                    opacity: 0.4,
                    scale: 1,
                    x: 0,
                    y: 0,
                    transitionEnd: {
                        opacity: 0.5,
                    },
                    transition: {
                        duration: 0.3,
                        ease: [0.48, 0.15, 0.25, 0.96],
                    },
                },
                exit: {
                    opacity: 0,
                    scale: 0,
                    flexGrow: 0,
                    transition: { duration: 0.3, ease: [0.48, 0.15, 0.25, 0.96] },
                },
            };
        case 'none':
        default:
            return { initial: {}, enter: {}, exit: {} };
    }
};

export const getAnimationType = (section: SkillSections): AnimationType => {
    for (const [animType, sections = []] of Object.entries(sectionAnimations)) {
        if (sections.includes(section)) {
            return animType as AnimationType;
        }
    }
    return 'none';
};