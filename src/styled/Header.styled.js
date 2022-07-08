import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: #DADBF1;
    text-align: center;
    font-size: xx-large;
    padding: 4em;

    h1 {
        font-weight: 500;
        margin-bottom: 20px;
    }

    input {
        width: 700px;
        padding: .8em;
        font-size: x-large;
        border: 1px solid black;
        border-radius: 5px;
    }

    & > div {
        position: relative;
    }

    span {
        position: absolute;
        top: 15px;
    }
`