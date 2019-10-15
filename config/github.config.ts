/**
 * @link GithubRepoList
 */
import { GithubRepoListProps } from '@components/github/github-repo-list';

export const githubQuery = 'search/repositories?q=user:belgattitude+org:soluble-io+org:contredanse+repo:doctrine/dbal';

export const filteredRepos: GithubRepoListProps['filters'] = [
    ['soluble-japha', ['php7.1']],
    ['soluble-mediatools', ['php7.1', 'ffmpeg']],
    ['bluewind', ['typescript', 'express', 'react', 'lerna']],
    ['dbal', ['doctrine', 'contributor']],
    ['mfts', ['typescript', 'react', 'pwa', 'spare-time']],
    ['soluble-jasper', ['php7.1', 'reports', 'pdf']],
    //['soluble-metadata', ['php7.1', 'db']],
    //['php-java-bridge', ['java', 'fork!']],
];
