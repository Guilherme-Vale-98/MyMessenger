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
    width: 100%;
    border-bottom: 2px solid #888789;
`

export const MessageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    h3{
        width: 100%;
        text-align: center;
        align-self: start;
    }
    .a{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 100%;
        height: 60vh;
        overflow: auto;
    }
    div::-webkit-scrollbar {
        display:none;
      }
    form{
        margin: 0 10%;
        width: 100%;
        margin-top:2rem;
        label{
            margin-top:0.3rem;
        }
        button{
            margin-bottom: 0.5rem;
        }
    }
`