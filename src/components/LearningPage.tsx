import React from 'react';
import { SocialsBar } from './socialbar';

interface LearnMoreProps {}
export const LearnMore = (props: LearnMoreProps) => {
    return (
        <div>
            <div className="my-4 text-center">
                <h1>Learn More</h1>
                <SocialsBar />
            </div>
        </div>
    );
};
