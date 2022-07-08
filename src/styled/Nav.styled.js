import styled from "styled-components";

export const StyledNav = styled.nav`
    display: flex;
    justify-content: space-between;
    background-color: #000000;
    color: white;
    padding: 1em;
    align-items: center;
    font-size: x-large;

    & > div {
        margin-left: 8em;
        margin-right: 8em;
    }

    a {
        color: white;
        text-decoration: none;
        margin-left: 5px;
    }

    a:hover {
        text-decoration: underline;
    }
`