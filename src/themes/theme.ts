// Actually theme system not really implemented ;)

//export type Theme = typeof theme;

export interface Theme {
    colors: {
        primary: string;
        link: string;
    };
}

export const theme: Theme = {
    colors: {
        primary: '#333',
        link: '#3685D6',
    },
};
