
import styled from 'styled-components';


export const NavContainer = styled.nav`
    display: flex;
    width: 100%;
    background-color: #1c1d1c;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
    h2>*{
        all:unset;
        color: rgb(222, 216, 209);
        margin-left: 3rem;
        font-weight: 100;
        cursor: pointer;
        &:hover{
            color: gray;
        }    
    }
    
`

export const NavButtons = styled.div`
    margin-right: 3rem;
    span{
        padding: 1rem;        
    }
    span>*{
        all: unset;
        color: rgb(222, 216, 209);
        cursor:pointer;
        &:hover{
            color: gray;
        }   

    }

`;