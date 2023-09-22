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
    height: 5rem;
    white-space: pre-wrap; 
`

export const ChatContainer = styled.div`
    width: 100%;
    border-bottom: 2px solid #888789;
    display: flex;
    flex-wrap: wrap;
    form{
        margin: 0 10%;
        width: 100%;
        margin-top:1rem;
        label{
            margin-top:0.3rem;
        }
        button{
            margin-bottom: 0.5rem;
        }
`

export const MessageContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 60vh;
    overflow: auto;
    
    h3{
        width: 100%;
        text-align: center;
        align-self: start;
    }
    .holder{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        width: 100%;
        div{
            border-radius: 1.125rem 1.125rem 1.125rem 0rem;
        }      
    }
    .own{
        align-items: flex-end;
        div{
            border-radius: 1.125rem 1.125rem 0 1.125rem;
            background-color:#1c1d1c;
            color: white;
        }      
    }

    div::-webkit-scrollbar {
        display:none;
      }
    }
`