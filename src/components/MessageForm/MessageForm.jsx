import React from 'react'
import Upload from '../svg/Upload'
import { FormContainer, MessageTextContainer } from './MessageFormStyles'
import { StyledButton } from '../../pages/SignUp.Styles'

const MessageForm = ({handleSubmit, text, setText, setImage}) => {
  return (
    <FormContainer onSubmit={handleSubmit}>
        <MessageTextContainer placeholder='Digite uma mensagem' value={text} onChange={e => {
          setText(e.target.value)
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