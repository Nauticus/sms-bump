import styled from 'styled-components';

export const ElementContainer = styled.li`
    height: 50px;
    display: flex;
    padding: 0 0 0 30px;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.fontSizeS};
    cursor: pointer;
    &.active {
        position: relative;
        background-color: ${({ theme }) => theme.colors.gray};
        color: ${({ theme }) => theme.colors.smsbump};
        ::before {
            display: inline-block;
            position: absolute;
            left: 0;
            border-radius: 0 4px 4px 0;
            width: 4px;
            height: 100%;
            background-color: ${({ theme }) => theme.colors.smsbump};
            content: "";
        }
        svg {
            filter: invert(42%) sepia(26%) saturate(1072%) hue-rotate(195deg) brightness(99%) contrast(94%);
        }
    }
    svg {
        width: 25px;
        height: 26px;
        margin-right: 21px;
    }
`;
