import styled from "styled-components";

export const HomePageHeaderWrapper = styled.header`
    width: 100%;
    height: 340px;
    background: ${props => props.theme.colors.primary};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 120px;
    padding-top: 40px;

    .form-control {
        display: flex;
        justify-content: center;
        width: auto;
        position: relative;
        width: 40vw;
        min-width: 300px;

        .submit {
            right: 0px;
            position: absolute;
            width: 55px;
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
            }
        }
    }
`