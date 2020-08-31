import {Link} from "app/components/link";
import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    height: 64px;
    padding: 15px 20px;
    align-items: center;
    box-sizing: border-box;
    .sms-bump-logo {
        width: 116px;
        min-width: 116px;
        margin-right: 50px;
    }
`;

export const FormLink = styled(Link)`
    svg {
        width: 16px;
        height: 16px;
        margin-right: 10px;
    }
    :hover svg {
        filter: invert(42%) sepia(26%) saturate(1072%) hue-rotate(195deg) brightness(99%) contrast(94%);
    }
`;

export const ExitLink = styled(Link)`
    margin-left: 30px;
    svg {
        width: 14px;
        height: 21px;
        margin-right: 10px;
    }
`;

export const Dropdown = styled.button`
    display: inline-flex;
    width: 100px;
    height: 30px;
    padding: 0 10px;
    align-items: center;
    border: 1px Solid ${({ theme }) => theme.colors.text};
    border-radius: 4px;
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.text};
    background-color: transparent;
    cursor: pointer;
    text-align: left;
    font-size: ${({ theme }) => theme.fontSizes.primary};
    ::after {
        display: inline-block;
        width: 8px;
        height: 8px;
        margin-left: 15px;
        margin-top: 2px;
        box-sizing: border-box;
        border-width: 0 1px 1px 0;
        transform: rotate(45deg) translate(-2px, -2px);
        border-style: Solid;
        border-color: ${({ theme }) => theme.colors.text};
        content: "";
    }
`;

export const VersionsDropdown = styled(Dropdown)`
    ::before {
        display: inline-block;
        width: 10px;
        height: 10px;
        margin-right: 10px;
        border: 1px Solid ${({ theme }) => theme.colors.smsbump};
        box-sizing: border-box;
        border-radius: 50%;
        content: "";
    }
`;

export const Form = styled.div`
    display: flex;
    margin: 0 30px 0 50px;
    flex-grow: 1;
    flex-direction: row;
    justify-content: space-between;
`;
