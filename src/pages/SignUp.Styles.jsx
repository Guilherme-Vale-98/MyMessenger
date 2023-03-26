import styled from "styled-components";

export const ButtonContainer = styled.div`
    display: flex;
    place-content: center;
    
`


export const StyledButton = styled.button`
    height: 3.3rem;
    width: 10rem;
    background-color: black;
    color: rgb(222, 216, 209);
`
export const InputContainer = styled.div`
    input{
        border-radius: 15px;
        width: 100%;
        padding: 8px;
        margin: 0.6rem 0 0.6rem 0;
        border: ${props => props.borderRed? '2px solid red': ''};
        &:focus{
            outline: none;
        }
    }
    label{
        display: block;
        margin-top: 0.6rem;
        color: #656565;
    }
`


export const StyledSection = styled.section`
    border-radius: 15px;
    width: 40%;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    background-color: #F3F3F3;
    h2{
        text-align: center;
        margin-bottom: 0.8rem;
    }
    padding: 2rem;
    margin-top: 0.7rem;
    p{
        color: red;
    }
    
    span{
        color: #656565;
        display: block;
        margin: 1.3rem;
        text-align: center;
    }
    strong{
        color: black;
        
    }
`