/**
 * This file is part of profile-in-a-rush, a personal hackaton for getting
 * my CV online and initiate the a quest of a wonderful job.
 *
 * @copyright Copyright (c) 2019-present Sébastien Vanvelthem. (https://github.com/belgattitude)
 * @license   https://github.com/belgattitude/profile-in-a-rush/blob/master/LICENSE.md MIT
 */

import * as React from 'react';
import './about.scss';

export const About: React.FC = () => {
    return (
        <div className="about-ctn">
            <h4 className="about-ctn__subheading">Professional experience</h4>
            <div className="about-ctn__details">&gt; 15 years</div>
            <h4 className="about-ctn__subheading">Contract</h4>
            <div className="about-ctn__details">
                <p>Freelance</p>
                <p>Full or part time</p>
            </div>

            <h4 className="about-ctn__subheading">Work location</h4>
            <div className="about-ctn__details">Brussels</div>

            <h4 className="about-ctn__subheading">Frontend</h4>
            <div className="about-ctn__details">React, Typescript</div>

            <h4 className="about-ctn__subheading">Backend</h4>
            <div className="about-ctn__details">PHP, Typescript, NodeJs</div>

            <h4 className="about-ctn__subheading">Database</h4>
            <div className="about-ctn__details">MySQL, MariaDB</div>

            <h4 className="about-ctn__subheading">Languages</h4>
            <div className="about-ctn__details">
                <p>French (Fluent)</p>
                <p>English (Working proficiency)</p>
            </div>
        </div>
    );
};
