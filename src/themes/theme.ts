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
        primary: '#111',
        link: '#3685D6',
        //link: 'deeppink',
    },
    page: {
        background: 'white',
    },
};
