import styled from "styled-components";

export const Field = styled.input`
    padding: 18px 18px;
    width: 100%;
    border: none;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    outline: none;
    font-family: Montserrat;
    font-size: 16px;
    transition: 0.5s all;

    
    &:focus {
        scale: 1.05;
        border-radius: 8px;
    }
`