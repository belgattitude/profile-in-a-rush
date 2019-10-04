/**
 * This file is part of profile-in-a-rush, a personal hackaton for getting
 * my CV online and initiate the a quest of a wonderful job.
 *
 * @copyright Copyright (c) 2019-present Sébastien Vanvelthem. (https://github.com/belgattitude)
 * @license   https://github.com/belgattitude/profile-in-a-rush/blob/master/LICENSE.md MIT
 */

import Head from 'next/head';
import './page.scss';

export const Page: React.FC = ({ children }) => (
    <div className="resume-page">
        <div className="resume-layout">
            <Head>
                <title>Who's this ?</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
            </Head>
            <div>{children}</div>
        </div>
    </div>
);
