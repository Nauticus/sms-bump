import styled from "styled-components";

const Divider = styled.div`
    width: 1px;
    min-width: 1px;
    height: 34px;
    background-color: ${({ theme }) => theme.colors.shadows};
`;

export default Divider;
