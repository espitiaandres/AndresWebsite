import React from 'react';
import ParticlesBg from "particles-bg";
import LandingPage from '../LandingPage/LandingPage';
import SkillsPage from '../SkillsPage/SkillsPage';

const Portfolio = () => {
    return (
        <div>
            <LandingPage />            
            {/*
                <Route path="/skills" exact render={() => (
                    <SkillsPage />
                )}/>
            */}
        </div>
    )
}

export default Portfolio;
