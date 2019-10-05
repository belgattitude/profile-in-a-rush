/**
 * This file is part of profile-in-a-rush, a personal hackaton for getting
 * my CV online and initiate the a quest of a wonderful job.
 *
 * @copyright Copyright (c) 2019-present Sébastien Vanvelthem. (https://github.com/belgattitude)
 * @license   https://github.com/belgattitude/profile-in-a-rush/blob/master/LICENSE.md MIT
 */

import { SkillRecord } from '../components/skills';

/**
 * Configure sections and skill types
 */
export const skillSections = ['Overview', 'Frontend', 'PHP', 'Node', 'DB', 'Dev', 'Emerging', 'Relics'] as const;
export const defaultSection: typeof skillSections[number] = 'Overview';

export const skillType = ['language', 'library', 'database', 'design', 'architecture', 'tooling'] as const;

/**
 * Here add the skills
 */
export const skillsRecords: SkillRecord[] = [
    {
        name: 'ReactJs',
        logo: './static/logos/reactjs.png',
        homepage: 'https://reactjs.org',
        years: 3,
        rating: 4,

        sections: ['Frontend', 'Overview'],
        type: 'library',
    },
    {
        name: 'Typescript',
        logo: './static/logos/typescript.png',
        homepage: 'https://www.typescriptlang.org',
        years: 3,
        rating: 4,

        sections: ['Node', 'Frontend', 'Overview'],
        type: 'language',
    },
    {
        name: 'Redux',
        logo: './static/logos/redux.svg',
        homepage: 'https://reactjs.org',
        rating: 4,
        sections: ['Frontend'],
        type: 'library',
    },
    {
        name: 'React Router',
        logo: './static/logos/react-router.png',
        homepage: 'https://reacttraining.com/react-router',
        rating: 4,
        sections: ['Frontend'],
        type: 'library',
    },

    {
        name: 'Jest',
        logo: './static/logos/jest.png',
        homepage: 'https://jestjs.io',
        rating: 3,
        sections: ['Frontend', 'Node'],
        type: 'library',
    },
    {
        name: 'Webpack',
        logo: './static/logos/webpack.png',
        homepage: 'https://webpack.js.org',
        years: 4,
        rating: 4,
        sections: ['Frontend'],
        type: 'library',
    },
    {
        name: 'Javascript',
        logo: './static/logos/ecmascript.png',
        years: 8,
        rating: 4,
        sections: ['Frontend'],
        type: 'language',
    },
    {
        name: 'Scss',
        logo: './static/logos/sass.png',
        homepage: 'https://sass-lang.com',
        years: 6,
        rating: 4,
        sections: ['Frontend', 'Overview'],
        type: 'design',
    },
    {
        name: 'HTML5 & CSS3',
        logo: './static/logos/html5-css3.svg',
        homepage: 'https://www.w3c.org',
        rating: 4,
        sections: ['Frontend'],
        type: 'design',
    },
    {
        name: 'PHP',
        logo: './static/logos/php.svg',
        homepage: 'https://php.net',
        years: 15,
        rating: 5,
        sections: ['PHP', 'Overview'],
        type: 'language',
    },
    {
        name: 'Doctrine',
        logo: './static/logos/doctrine.png',
        homepage: 'https://doctine-project.org',
        rating: 4,
        sections: ['PHP'],
        type: 'library',
    },
    {
        name: "PSR's & FIG",
        logo: './static/logos/php-fig.png',
        homepage: 'https://php-fig.org',
        rating: 5,
        sections: ['PHP'],
        type: 'library',
    },
    {
        name: 'Zend 2+',
        logo: './static/logos/zf.jpg',
        homepage: 'https://zend.com',
        years: 2,
        rating: 4,

        sections: ['PHP'],
        type: 'library',
    },
    {
        name: 'SF components',
        logo: './static/logos/symfony.png',
        homepage: 'https://symfony.com',
        years: 4,
        rating: 3,
        sections: ['PHP'],
        type: 'library',
    },
    {
        name: 'PHPUnit',
        logo: './static/logos/phpunit.png',
        homepage: 'https://phpunit.de',
        years: 8,
        rating: 4,
        sections: ['PHP'],
        type: 'library',
    },
    {
        name: 'PHPStan',
        logo: './static/logos/phpstan.png',
        homepage: 'https://github.com/phpstan',
        rating: 4,
        sections: ['PHP'],
        type: 'library',
    },
    {
        name: 'Psalm',
        logo: './static/logos/psalm.png',
        homepage: 'https://github.com/vimeo/psalm',
        rating: 4,
        sections: ['PHP'],
        type: 'library',
    },
    {
        name: 'SQL',
        logo: './static/logos/sql.png',
        homepage: 'https://en.wikipedia.org/wiki/SQL',
        years: 15,
        rating: 5,

        sections: ['DB', 'Overview'],
        type: 'language',
    },

    {
        name: 'Express',
        logo: './static/logos/express.png',
        homepage: 'https://expressjs.com',
        rating: 3,
        sections: ['Node', 'Overview'],
        type: 'library',
    },
    {
        name: 'TypeORM',
        logo: './static/logos/typeorm.png',
        homepage: 'https://typeorm.io',
        rating: 3,
        sections: ['Node'],
        type: 'library',
    },
    {
        name: 'Emotion',
        logo: './static/logos/emotion-styled.png',
        homepage: 'https://emotion.sh',
        rating: 1,
        sections: ['Emerging'],
        type: 'library',
    },
    {
        name: 'MDX',
        logo: './static/logos/mdx.png',
        homepage: 'https://nextjs.org',
        years: 0.1,
        rating: 1,
        sections: ['Emerging'],
        type: 'library',
    },
    {
        name: 'NextJs',
        logo: './static/logos/nextjs.png',
        homepage: 'https://nextjs.org',
        years: 0.1,
        rating: 1,
        sections: ['Emerging'],
        type: 'library',
    },
    {
        name: 'NestJs',
        logo: './static/logos/nestjs.svg',
        homepage: 'https://nestjs.com',
        years: 0.1,
        rating: 1,
        sections: ['Emerging'],
        type: 'library',
    },
    {
        name: 'Lerna',
        logo: './static/logos/lerna.png',
        homepage: 'https://github.com/lerna',
        years: 0.1,
        rating: 1,
        sections: ['Emerging'],
        type: 'library',
    },
    {
        name: 'Docker',
        logo: './static/logos/docker.png',
        homepage: 'https://docker.com',
        years: 0.1,
        rating: 1,
        sections: ['Emerging'],
        type: 'tooling',
    },
    {
        name: 'MySQL',
        logo: './static/logos/mysql.png',
        homepage: 'https://mysql.com',
        years: 8,
        rating: 5,
        sections: ['DB'],
        type: 'database',
    },
    {
        name: 'MariaDB',
        logo: './static/logos/mariadb.png',
        homepage: 'https://mariadb.com',
        years: 4,
        rating: 5,
        sections: ['DB'],
        type: 'database',
    },
    {
        name: 'PHPStorm...',
        logo: './static/logos/phpstorm.png',
        homepage: 'https://jetbrains.com',
        rating: 4,
        sections: ['Dev'],
        type: 'tooling',
    },
    {
        name: 'Github',
        logo: './static/logos/github.png',
        homepage: 'https://github.com',
        rating: 4,
        sections: ['Dev'],
        type: 'tooling',
    },
    {
        name: 'Travis CI',
        logo: './static/logos/travis.png',
        homepage: 'https://travis-ci.org',
        rating: 4,
        sections: ['Dev'],
        type: 'tooling',
    },

    {
        name: 'Gitlab',
        logo: './static/logos/gitlab.png',
        homepage: 'https://gitlab.com',
        rating: 4,
        sections: ['Dev'],
        type: 'tooling',
    },

    {
        name: 'Apache',
        logo: './static/logos/apache.png',
        homepage: 'https://httpd.apache.org',
        rating: 4,
        sections: ['Dev'],
        type: 'tooling',
    },
    {
        name: 'Nginx',
        logo: './static/logos/nginx.png',
        homepage: 'https://nginx.org',
        rating: 4,
        sections: ['Dev'],
        type: 'tooling',
    },

    {
        name: 'Linux',
        logo: './static/logos/linux.png',
        homepage: 'https://linux.org',
        years: 20,
        rating: 4,
        sections: ['Dev'],
        type: 'tooling',
    },
    {
        name: 'Ubuntu',
        logo: './static/logos/ubuntu.png',
        homepage: 'https://ubuntu.org',
        rating: 4,
        sections: ['Dev'],
        type: 'tooling',
    },
    {
        name: 'Bind9',
        logo: './static/logos/bind9.jpg',
        homepage: 'https://www.isc.org/bind/',
        rating: 4,
        sections: ['Dev'],
        type: 'tooling',
    },

    {
        name: 'Zend v1',
        logo: './static/logos/zf.jpg',
        homepage: 'https://zend.com',
        years: 3,
        rating: 4,
        sections: ['Relics'],
        type: 'library',
    },
    {
        name: 'AngularJs',
        logo: './static/logos/angularjs.svg',
        homepage: 'https:/angular.io',
        years: 3,
        rating: 4,
        sections: ['Relics'],
        type: 'library',
    },
    {
        name: 'ExtJs 3.x',
        logo: './static/logos/extjs.png',
        homepage: 'https://sencha.com',
        years: 4,
        rating: 4,
        sections: ['Relics'],
        type: 'library',
    },
    {
        name: 'Boostrap',
        logo: './static/logos/bootstrap.png',
        homepage: 'https://getbootstrap.com',
        rating: 4,
        sections: ['Relics'],
        type: 'library',
    },
    {
        name: 'JQuery',
        logo: './static/logos/jquery.png',
        homepage: 'https://jquery.com',
        rating: 4,
        sections: ['Relics'],
        type: 'library',
    },
];
