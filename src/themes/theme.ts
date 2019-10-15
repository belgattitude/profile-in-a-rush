export type Theme = {
    colors: {
        primary: string;
        link: string;
    };
    page: {
        background: string;
    };
};

export const defaultTheme: Theme = {
    colors: {
        primary: '#333',
        link: '#3685D6',
    },
    page: {
        background: 'white',
    },
};
