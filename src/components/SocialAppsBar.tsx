import React from 'react';

import { SocialIcon } from 'react-social-icons';

interface SocialsBarProps {
    displayText?: string;
    additionalShareText?: string;
}
export const SocialsBar = (props: SocialsBarProps) => {
    interface SocialMediaInterface {
        network: string;
        URL: string;
    }
    const websiteURL = encodeURIComponent(window.location.origin);
    const URIMessage = encodeURIComponent(
        props.additionalShareText
            ? props.additionalShareText
            : `Look at this cool website I found where you can find out your Ghanaian name. Lol `,
    );

    const socialMediaLinks: SocialMediaInterface[] = [
        {
            network: 'twitter',
            URL: `http://twitter.com/intent/tweet?text=${URIMessage}${websiteURL}`,
        },
        {
            network: 'facebook',
            URL: `https://www.facebook.com/sharer/sharer.php?u=${websiteURL}`,
        },
        {
            // TODO: Fix Link
            network: 'whatsapp',
            URL: `http://twitter.com/intent/tweet?text=${URIMessage}`,
        },
        {
            // TODO: Fix Link
            network: 'reddit',
            URL: `http://twitter.com/intent/tweet?text=${URIMessage}`,
        },
        {
            // TODO: Fix Link
            network: 'telegram',
            URL: `http://twitter.com/intent/tweet?text=${URIMessage}`,
        },
        {
            // TODO: Fix Link
            network: 'instagram',
            URL: `http://twitter.com/intent/tweet?text=${URIMessage}`,
        },
        {
            // TODO: Check if link works
            network: 'linkedin',
            URL: `https://www.linkedin.com/shareArticle?mini=true&url=${websiteURL}`,
        },
        {
            network: 'pinterest',
            URL: `https://pinterest.com/pin/create/button/?url=${websiteURL}&media=&description=${URIMessage}`,
        },
    ];
    return (
        <>
            <p>{props.displayText}</p>
            <div className="text-center my-4">
                {socialMediaLinks.map((link, index) => {
                    return (
                        <SocialIcon
                            url={link.URL}
                            network={link.network}
                            key={index}
                            target={'_blank'}
                            style={{
                                height: 30,
                                width: 30,
                                margin: 5,
                            }}
                        />
                    );
                })}
            </div>
        </>
    );
};
