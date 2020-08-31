import styled from "styled-components";

export const DrawerContainer = styled.aside`
    display: flex;
    width: 235px;
    min-width: 235px;
    position: relative;
    flex-direction: column;
`;

export const Devices = styled.div`
    display: flex;
    height: 50px;
    padding: 0 50px;
    margin-bottom: 17px;
    border-bottom: 1px Solid #cccccc;
    align-items: center;
    justify-content: space-between;
    svg {
        height: 16px;
        cursor: pointer;
    }
    svg.active {
        filter: invert(42%) sepia(26%) saturate(1072%) hue-rotate(195deg) brightness(99%) contrast(94%);
    }
`;
