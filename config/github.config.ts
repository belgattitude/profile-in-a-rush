/**
 * This file is part of profile-in-a-rush, a personal hackaton for getting
 * my CV online and initiate the a quest of a wonderful job.
 *
 * @copyright Copyright (c) 2019-present Sébastien Vanvelthem. (https://github.com/belgattitude)
 * @license   https://github.com/belgattitude/profile-in-a-rush/blob/master/LICENSE.md MIT
 */

export const githubQuery =
    'search/repositories?q=user:belgattitude+org:soluble-io+org:contredanse+is:public+is:fork:false';

export const reposToShow: Array<[string, string[]]> = [
    ['soluble-mediatools', ['php7.1', 'ffmpeg']],
    ['soluble-japha', ['php7.1']],
    ['mfts', ['typescript', 'react', 'pwa']],
    ['bluewind', ['typescript', 'express', 'react', 'lerna']],
    ['soluble-jasper', ['php7.1', 'reports', 'pdf']],
    ['php-java-bridge', ['java', 'fork!']],
];
