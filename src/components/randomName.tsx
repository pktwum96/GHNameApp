import React from 'react';
import { SocialsBar } from './SocialAppsBar';

interface RandomNameProps {}
export const RandomName = (props: RandomNameProps) => {
    return (
        <div>
            <div className="my-4 text-center">
                <h1>Random Name</h1>

                <SocialsBar
                    displayText={
                        'Share your Ghanaian name with your friends!'
                    }
                />
            </div>
        </div>
    );
};
