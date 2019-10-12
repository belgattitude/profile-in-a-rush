/**
 * This file is part of profile-in-a-rush, a personal hackaton for getting
 * my CV online and initiate the a quest of a wonderful job.
 *
 * @copyright Copyright (c) 2019-present Sébastien Vanvelthem. (https://github.com/belgattitude)
 * @license   https://github.com/belgattitude/profile-in-a-rush/blob/master/LICENSE.md MIT
 */

import React, { useEffect, useState } from 'react';
import GithubApi, { RepoItems } from './github.api';
import styled from '@emotion/styled';
import { RepoItem } from './repo-item';

const UnstyledRepoList: React.FC<{
    githubQuery: string;
    filters?: Array<[string, string[]]>;
    className?: string;
    children?: never;
}> = props => {
    /**
     * Example with hooks and an abortcontoller
     *
     * BTW, got a love/hate relationship with hooks regarding async mode...
     * (stale closure problem, memo, callbacks...) It's probably gonna be better
     * in future versions of react.
     * I wrote this example with an AbortController (was not needed), just
     * to illustrate the flow (imagine an autocomplete...).
     * For real life, react-async does a very nice job. Otherwise extract
     * in a custom hook. That's were hooks shines.
     */

    const [repos, setRepos] = useState<RepoItems>([]);
    const [query, setQuery] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const { filters = [], className, githubQuery } = props;

    useEffect(() => {
        let mounted = true;
        const abortController = new AbortController();
        const fetchData = async () => {
            const api = GithubApi.createFromDefaults();
            setIsError(false);
            setLoading(true);
            const { payload } = await api.getMyRepos({
                githubQuery,
                signal: abortController.signal,
                filterOnly: filters,
            });
            if (mounted) {
                if (payload.isError) {
                    setIsError(true);
                } else {
                    setRepos(payload.value);
                }
                setLoading(false);
            }
        };
        fetchData();
        return () => {
            abortController.abort();
            mounted = false;
        };
    }, [query, filters, githubQuery]);

    if (loading) {
        return <div className={className}>Loading...</div>;
    }

    if (isError) {
        return <div className={className}>Cannot reach github, please retry.</div>;
    }

    return (
        <div className={className}>
            <ul>
                {repos.map(repoData => {
                    return (
                        <li key={repoData.id}>
                            <RepoItem repo={repoData} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export const RepoList = styled(UnstyledRepoList)`
    margin: 0;
    padding: 0;
    line-height: 1em;
    ul {
        margin: 0;
        padding: 0;
        li {
            list-style: none;
            border-bottom: 1px solid #eeeeee;
            margin: 0;
            padding: 5px 5px 5px 0px;
            display: flex;
            //text-align: left;
            // for ssr :first-child becomes
            :last-of-type {
                border-bottom: none;
            }
        }
    }
`;
