import styled from "styled-components";

export const ButtonLink = styled.button`
    margin-left: 10px;
    margin-right: 10px;
    padding: .85em 1.2em;
    min-width: 150px;
    font-size: large;
    background-color: ${({ bg }) => bg};
    color: white;
    border-radius: 10px;
    border: solid 1px ${({bg}) => bg === '#000000' ? '#ffffff' : bg};
    transition: all 200ms ease-in-out;
    
    &:hover {
        cursor: pointer;
    }
`