// Hack for https://github.com/emotion-js/emotion/issues/1320

declare module '@emotion/styled' {
    import { CreateStyled } from '@emotion/styled/types/index';
    import { Theme } from '@themes/theme';

    export * from '@emotion/styled/types/index';
    const customStyled: CreateStyled<Theme>;
    export default customStyled;
}
