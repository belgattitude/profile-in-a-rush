import styled from '@emotion/styled';

const MyH1 = styled.h1``;
const MyH2 = styled.h2`
    font-weight: bold;
`;
const MyParagraph = styled.p`
    font-weight: 300;
`;
export const mdxConfig = {
    h1: MyH1,
    h2: MyH2,
    p: MyParagraph,
};
