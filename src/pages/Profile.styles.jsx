import styled from "styled-components"

export const PhotoContainer = styled.div`
    display: flex;
    img{
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }
    max-width: 8.5rem;
    min-height: 8.5rem;
    margin-right: 1rem;
    position: relative;
    flex: 1 0 auto;
    cursor: pointer;
    border-radius: 50%;
    &:hover{
        opacity: 0.5;
    }
`
export const Overlay = styled.div`
    position: absolute;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    *{  
        visibility: hidden;
        margin-left: 4px;
        cursor: pointer;
    }
    &:hover{
        *{
            visibility: visible;
            
        }
    }
`
export const TextContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 3px;
    word-break: break-word;
    h2{
        margin-bottom: 1rem;
    }
    p{
        margin-bottom: 0.5rem;
    }
    small{
        margin-top: 0.5rem;
    }
`

export const ProfileContainer = styled.section`
    border-radius: 15px;
    display: flex;
    box-sizing: border-box;
    width: 40%;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
    background-color: #F3F3F3;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    margin-top: 0.7rem;
    padding: 1rem;
    
`