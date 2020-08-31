import { Link } from "app/components/link";
import styled from "styled-components";

export const NavigationContainer = styled.nav`
    display: flex;
    height: 54px;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.shopifyBlueish};
`;

export const ArtefactMenu = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
`;

export const Artefact = styled.button`
    ${({ theme: { colors, fontSizes } }) => `
    height: 100%;
    padding: 19px 30px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background-color: transparent;
    color: ${colors.smsbump};
    font-size: ${fontSizes.fontSizeS};
    :first-child.active {
        border-radius: 0 4px 4px 0;
    }
    &.active {
        padding: 19px 26px;
        font-weight: bold;
        color: white;
        background-color: ${colors.smsbump};
    }
    `}
`;

export const ToolBar = styled.div`
    display: inline-flex;
    align-items: center;
    margin-right: 20px;
`;

export const Flow = styled.div`
    display: flow;
    white-space: nowrap;
    button {
        margin-right: 15px;
    }
    button:last-child {
        margin: 0;
    }
`;

export const Button = styled.button`
    height: 35px;
    padding: 0 35px;
    box-sizing: border-box;
    border-radius: 4px;
    border: none;
    background: transparent;
    font-size: ${({ theme }) => theme.fontSizes.primary};
    cursor: pointer;
`;

export const BlueButton = styled(Button)`
    background-color: ${({ theme }) => theme.colors.smsbump};
    font-weight: normal;
    color: white;
`;

export const OutlinedButton = styled(Button)`
    border: 1px Solid ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.text};
`;

export const DeleteLink = styled(Link)`
    margin-left: 20px;
    svg {
        margin-right: 12px;
        width: 18px;
        height: 19px;
    }
`;

export const ActionLink = styled(Link)`
    margin-right: 18px;
    svg {
        width: 17px;
        height: 20px;
        margin-right: 5px;
    }
`;
