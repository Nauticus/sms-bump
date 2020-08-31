import styled from "styled-components";

export const ElementsList = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const PopUpContainer = styled.div`
    width: 330px;
    height: calc(100% - 67px);
    position: absolute;
    top: 67px;
    left: 100%;
    cursor: default;
    background-color: ${({ theme }) => theme.colors.gray};
`;
