import styled from "styled-components"

export const FormContainer = styled.form`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`
export const MessageTextContainer=styled.textarea`
    all: unset;
    overflow-wrap: break-word;
    width: 100%;
    border-radius: 2px;
    border-top: 3px solid black;
    resize: none; 
    padding-left: 1rem;
    height: 3rem;
`

export const ChatContainer = styled.div`
    display: flex;
    width: 100%;
    border-bottom: 2px solid #888789;
`

export const MessageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    align-items: end;
    h3{
        width: 100%;
        text-align: center;
        align-self: start;
    }
    div{
        height: auto;
        align-self: center;
        margin-left: auto;
    }
    form{
        margin: 0 10%;
        width: 100%;
        label{
            margin-top:0.3rem;
        }
        button{
            margin-bottom: 0.5rem;
        }
    }
`