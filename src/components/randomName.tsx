import React from 'react';
import { SocialsBar } from './socialbar';

interface RandomNameProps {}
export const RandomName = (props: RandomNameProps) => {
    return (
        <div>
            <div className="my-4 text-center">
                <h1>Random Name</h1>
                <SocialsBar />
            </div>
        </div>
    );
};
