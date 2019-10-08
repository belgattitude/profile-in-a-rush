/**
 * This file is part of profile-in-a-rush, a personal hackaton for getting
 * my CV online and initiate the a quest of a wonderful job.
 *
 * @copyright Copyright (c) 2019-present Sébastien Vanvelthem. (https://github.com/belgattitude)
 * @license   https://github.com/belgattitude/profile-in-a-rush/blob/master/LICENSE.md MIT
 */

import { Result } from '../../core/result';
import ky from 'ky/umd';
import {JsonObject} from "../../core/json.interface";

export type RepoItemDTO = {
    id: number;
    name: string;
    description: string;
    private: boolean;
    fork: boolean;
    homepage: string;
    html_url: string;
    stargazers_count: number;
    url: string;
} & {
    // added locally, see filters
    extra_techs: string[];
};
export type RepoItems = RepoItemDTO[];

export default class GithubApi {
    private ky: typeof ky;

    constructor(token?: string) {
        this.ky = ky.create({
            prefixUrl: 'https://api.github.com',
            hooks: {
                beforeRequest: [
                    (input, options) => {
                        if (token) {
                            options.headers.set('Authorization', `Bearer ${token}`);
                        }
                    },
                ],
            },
        });
    }

    async getMyRepos(props: {
        githubQuery: string;
        signal?: AbortSignal;
        filterOnly?: Array<[string, string[]]>;
    }): Promise<Result<RepoItems>> {
        const { filterOnly = [], githubQuery } = props;

        return (
            this.ky
                // Specific github syntax, using URLParams encoding won't work ;)
                .get(githubQuery, {
                    signal: props.signal,
                })
                .json()
                .then(response => {
                    const { items = false } = response as JsonObject;
                    if (items && this.isValidRepoResponse(items)) {
                        if (filterOnly.length > 0) {
                            // Filtering by order of filterOnly
                            const filtered: RepoItems = [];
                            for (const [name, techs] of filterOnly) {
                                const repo = items.find(item => item.name === name);
                                if (repo) {
                                    repo.extra_techs = techs;
                                    filtered.push(repo);
                                }
                            }
                            return Result.ok<RepoItems>(filtered);
                        }
                        return Result.ok<RepoItems>(items);
                    }
                    return Result.fail<RepoItems>(`Returned response shape is not supported`);
                })
                .catch(e => Result.fail<RepoItems>(e))
        );
    }

    static createFromDefaults() {
        // maybe defaults / env later in the constructor
        return new GithubApi();
    }

    // Utilitary typeguards

    private isValidRepoResponse(response: unknown): response is RepoItems {
        // Yes it's very basic ;)
        return response instanceof Array;
    }
}
