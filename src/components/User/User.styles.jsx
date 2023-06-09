import styled from "styled-components"

export const AppContainer = styled.div`
    display: flex;
    margin: 2rem;
    
`

export const UserContainer = styled.div`
    display: flex;
    min-width: 400px;
    max-width: 400px;
    flex-direction: column;
    align-items: center;
    font-size: 1.5rem;
    div{
        &:nth-child(1) {
            width: 70%;
            text-align: center;
          }
    }
`
export const ChatContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    border-bottom: 2px solid #888789;
`

export const MessageContainer = styled.div`
    display: flex;
    align-items: center; 
`


export const UserContacts = styled.div`
    display: flex;
    &:hover{
        background-Color: #737576;
    }
    padding: 0.5rem 0.5rem 0.5rem 0rem;
    border-bottom: 2px solid #888789;
    width: 80%;
    position: relative;
    img{
        border-radius: 50%;
        min-width: 4rem;
        margin: 0 1.5rem;
        min-height: 4rem;
        max-height: 4rem;
        max-width: 4rem;       
    }
    span{
        place-self: center;
        font-size: 1.1rem;
    }

    .green{
        content: '';
        background-color: #46AB5E;
        border-radius: 9000px;
        width: 13px;
        height: 13px;
        position: absolute;
        top: 60px;
        left: 70px;
        z-index: 1;
    }
    
    .red{
        content: '';
        background-color: #E41E3F;
        border-radius: 9000px;
        width: 13px;
        height: 13px;
        position: absolute;
        top: 60px;
        left: 70px;
        z-index: 1;
    }
`
export const ImgHolder = styled.div`
`