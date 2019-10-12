import React from 'react';
import styled from '@emotion/styled';
import { Block } from './block';
import { defaultSection, githubQuery, reposToShow, skillsRecords } from '../../../config';
import dynamic from 'next/dist/next-server/lib/dynamic';
import { SkillsPanelProps } from '../skills';
import { RepoList } from '../github';

type OpensourceProps = {
    className?: string;
    children?: never;
};

const UnstyledOpensource: React.FC<OpensourceProps> = props => {
    const { className } = props;
    return (
        <Block>
            <div className={className}>
                <h1>
                    <a href={'https://github.com/belgattitude'} target={'_blank'} rel={'noreferrer'}>
                        <i className="fab fa-github" />
                    </a>
                </h1>
                <h1>Opensource</h1>
                <h2>Some code I committed once upon a time...</h2>
                <RepoList githubQuery={githubQuery} filters={reposToShow} />
            </div>
        </Block>
    );
};

export const Opensource = styled(UnstyledOpensource)<OpensourceProps>`
    align-items: stretch;
    > div {
        max-width: 500px;
        margin-top: 30px;
        //text-align: center;
    }
    > h1 {
        i {
            font-size: 2em;
        }
    }
    > p {
    }
`;
