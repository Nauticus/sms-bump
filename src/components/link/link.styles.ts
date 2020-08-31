import styled from 'styled-components';

export const Link = styled.a`
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
    cursor: pointer;
`;

