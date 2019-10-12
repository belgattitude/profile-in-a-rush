/**
 * This file is part of profile-in-a-rush, a personal hackaton for getting
 * my CV online and initiate the a quest of a wonderful job.
 *
 * @copyright Copyright (c) 2019-present Sébastien Vanvelthem. (https://github.com/belgattitude)
 * @license   https://github.com/belgattitude/profile-in-a-rush/blob/master/LICENSE.md MIT
 */

export const githubQuery = 'search/repositories?q=user:belgattitude+org:soluble-io+org:contredanse+repo:doctrine/dbal';

export const reposToShow: Array<[string, string[]]> = [
    ['soluble-japha', ['php7.1']],
    ['soluble-mediatools', ['php7.1', 'ffmpeg']],

    ['bluewind', ['typescript', 'express', 'react', 'lerna']],

    ['dbal', ['doctrine', 'contributor']],
    ['mfts', ['typescript', 'react', 'pwa', 'spare-time']],
    ['soluble-jasper', ['php7.1', 'reports', 'pdf']],
    //['soluble-metadata', ['php7.1', 'db']],
    //['php-java-bridge', ['java', 'fork!']],
];
