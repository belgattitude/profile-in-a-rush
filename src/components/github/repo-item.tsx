/**
 * This file is part of profile-in-a-rush, a personal hackaton for getting
 * my CV online and initiate the a quest of a wonderful job.
 *
 * @copyright Copyright (c) 2019-present Sébastien Vanvelthem. (https://github.com/belgattitude)
 * @license   https://github.com/belgattitude/profile-in-a-rush/blob/master/LICENSE.md MIT
 */

import React from 'react';
import { RepoItemDTO } from './github.api';
import styled from '@emotion/styled';
import { truncateText } from '../../utils/utils';
import { LangBadge } from '../badge';

const getRepoHomePage = (repo: RepoItemDTO): string => {
    const { homepage, html_url, extra_techs = [] } = repo;
    return !homepage || extra_techs.includes('pwa') ? html_url : homepage;
};

const UnstyledRepoItem: React.FC<{
    className?: string;
    repo: RepoItemDTO;
    limitChars?: number;
    children?: never;
}> = props => {
    const { repo, className, limitChars = 30 } = props;
    return (
        <div className={className}>
            <div>
                <a href={getRepoHomePage(repo)} target="_blank" rel="noreferrer">
                    {repo.name}
                    {repo.homepage ? <i className="fas fa-home" /> : <i className="fab fa-github" />}
                </a>
                <p>{truncateText(repo.description, limitChars, false)}</p>
                {(repo.extra_techs || []).map(label => (
                    <LangBadge key={label} title={label} />
                ))}
            </div>
            <div>
                <div>{repo.stargazers_count}</div>
                <div>
                    <i className="fas fa-star" />
                </div>
            </div>
        </div>
    );
};

export const RepoItem = styled(UnstyledRepoItem)`
    display: flex;
    margin: 0;
    padding: 5px 5px;
    width: 100%;
    div {
        // for ssr &:first-child should be
        :first-of-type {
            flex: 1 1 100%;
        }
        // The stargazers
        :last-child {
            display: flex;
            font-size: 0.8em;
            color: #999999;
            text-align: right;
            i {
                margin: 2px;
                color: inherit;
            }
        }
    }
    a,
    &:link,
    &:visited {
        color: ${props => props.theme.colors.link};
        text-decoration: none;
        padding: 0;
        font-size: 1em;
        font-weight: 300;
        i {
            font-size: inherit;
            color: #999999;
            text-align: start;
            margin-left: 5px;
            opacity: 0.5;
            transition: opacity 0.4s ease-in-out;
            &:hover {
                opacity: 0.8;
            }
        }
    }
    p {
        color: #333333;
        font-size: 0.8em;
        font-weight: lighter;
        padding: 0;
        margin: 5px 0px;
    }
    i {
        color: #333333;
    }
`;
