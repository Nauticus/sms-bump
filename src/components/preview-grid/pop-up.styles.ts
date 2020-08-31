import styled from "styled-components";

export const ThemeContainer = styled.div`
    display: flex;
    padding: 30px;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const ThemeCard = styled.div`
`;

export const Title = styled.p`
    color: ${({ theme }) => theme.colors.smallElements};
    margin: 6px 0 20px;
    font-size: ${({ theme }) => theme.fontSizes.fontSizeXS};
    b {
        color: ${({ theme }) => theme.colors.smsbump};
    }
`;
