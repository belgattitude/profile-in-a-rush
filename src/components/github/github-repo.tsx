import React from 'react';
import { RepoItemDTO } from './github.api';
import styled from '@emotion/styled';
import { truncateText } from '../../utils/utils';
import { CustomTag } from '@components/github/custom-tag';

const getRepoHomePage = (repo: RepoItemDTO): string => {
    const { homepage, html_url, custom_tags = [] } = repo;
    return !homepage || custom_tags.includes('pwa') ? html_url : homepage;
};

const UnstyledGithubRepo: React.FC<{
    className?: string;
    repo: RepoItemDTO;
    limitChars?: number;
    children?: never;
}> = props => {
    const { repo, className, limitChars = 40 } = props;
    return (
        <div className={className}>
            <div>
                <a href={getRepoHomePage(repo)} target="_blank" rel="noreferrer">
                    {repo.name}
                    {repo.homepage ? <i className="fas fa-home" /> : <i className="fab fa-github" />}
                </a>
                <p>{truncateText(repo.description, limitChars, false)}</p>
                {(repo.custom_tags || []).map(label => (
                    <CustomTag key={label} title={label} />
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

export const GithubRepo = styled(UnstyledGithubRepo)`
    display: flex;
    margin: 0;
    padding: 5px 5px;
    width: 100%;
    text-align: left;
    div {
        // for ssr &:first-child should be
        :first-of-type {
            flex: 1 1 100%;
        }
        // The stargazers
        :last-child {
            float: right;
            right: 0;
            display: flex;
            font-size: 0.8em;
            color: #777;
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
        font-weight: 400;
        i {
            font-size: inherit;
            color: #444;
            text-align: start;
            margin-left: 5px;
            opacity: 0.3;
            transition: opacity 0.4s ease-in-out;
            &:hover {
                opacity: 0.8;
            }
        }
    }
    p {
        color: #444;
        font-size: 0.8em;
        font-weight: lighter;
        padding: 0;
        margin: 5px 0;
    }
    i {
        color: #444;
    }
`;
