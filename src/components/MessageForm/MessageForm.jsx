import React from 'react'
import Upload from '../svg/Upload'
import { FormContainer, MessageTextContainer } from './MessageFormStyles'
import { StyledButton } from '../../pages/SignUp.Styles'

const MessageForm = ({handleSubmit, text, setText, setImage}) => {
  return (
    <FormContainer onSubmit={handleSubmit}>
        <MessageTextContainer placeholder='Enter message' value={text} onChange={e => {
          //console.log(e.target.value)
          setText(e.target.value)
          console.log(text)
          }}></MessageTextContainer>
        <label htmlFor='img'><Upload></Upload></label>
        <input
            onChange={e => setImage(e.target.files[0])}
            type='file'
            id='img'
            accept='image/'
            style={{display: "none"}}
        >
        </input>
        
        <StyledButton style={{width: "5rem", height: "3rem", marginLeft: "auto"}}>
            Enviar
        </StyledButton>
    </FormContainer>
  )
}

export default MessageForm