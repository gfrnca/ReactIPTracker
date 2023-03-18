import styled from "styled-components";

export const HomePageHeaderWrapper = styled.header`
    width: 100%;
    height: 340px;
    background: ${props => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding-top: 40px;

    .form-control {
        display: flex;
        justify-content: center;
        width: auto;
        width: 40vw;
        min-width: 300px;

        .submit {
            right: 0px;
            width: 65px;
            height: 100%;
            background: black;
            border-top-right-radius: 8px;
            border-bottom-right-radius: 8px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            cursor: pointer;
            transition: 0.4s all;
            
            &:hover {
                background: #1a1a1a;
                scale: 1.05;
                border-radius: 8px;
            }
        }
    }
`