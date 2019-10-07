/**
 * This file is part of profile-in-a-rush, a personal hackaton for getting
 * my CV online and initiate the a quest of a wonderful job.
 *
 * @copyright Copyright (c) 2019-present Sébastien Vanvelthem. (https://github.com/belgattitude)
 * @license   https://github.com/belgattitude/profile-in-a-rush/blob/master/LICENSE.md MIT
 */

export const githubQuery = 'search/repositories?q=user:belgattitude+org:soluble-io+org:contredanse+repo:doctrine/dbal';

export const reposToShow: Array<[string, string[]]> = [
    ['soluble-mediatools', ['php7.1', 'ffmpeg']],
    ['soluble-japha', ['php7.1']],
    ['soluble-jasper', ['php7.1', 'reports', 'pdf']],
    ['bluewind', ['typescript', 'express', 'react', 'lerna']],
    ['mfts', ['typescript', 'react', 'pwa']],
    //['php-java-bridge', ['java', 'fork!']],
    ['dbal', ['doctrine', 'contributor']],
];
