declare module 'react-social-icons' {
    import * as React from 'react';

    export interface SocialIconProps {
        url?: string;
        network?: string;
        bgColor?: string;
        fgColor?: string;
        label?: string;
        className?: string;
        defaultSVG?: Object;
        target?: string;
        style?: React.CSSProperties;
    }

    export class SocialIcon extends React.Component<
        SocialIconProps,
        {}
    > {}
}
