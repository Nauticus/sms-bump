import styled from "styled-components";

export const FormEditor = styled.main`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
`;

export const Viewport = styled.section`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
`;

export const Preview = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    background: transparent radial-gradient(closest-side at 50% 50%, #b5b5b5 0%, #939393 100%) 0% 0% no-repeat;
`;
