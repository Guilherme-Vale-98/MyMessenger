import styled from "styled-components"

export const FormContainer = styled.form`
    display: flex;
    flex-wrap: wrap;
    width: 35rem;
    justify-content: space-between;
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
    justify-content: center;
    border-bottom: 2px solid #888789;
`

export const MessageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: end;
`