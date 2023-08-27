import React from 'react'
import Upload from '../svg/Upload'
import { FormContainer, MessageTextContainer } from './MessageFormStyles'

const MessageForm = ({handleSubmit, text, setText, setImage}) => {
  return (
    <FormContainer onSubmit={handleSubmit}>
        <MessageTextContainer placeholder='Enter message' value={text} onChange={e => setText(e.target.value)}></MessageTextContainer>
        <label htmlFor='img'><Upload></Upload></label>
        <input
            onChange={e => setImage(e.target.files[0])}
            type='file'
            id='img'
            accept='image/'
            style={{display: "none"}}
        >
        </input>
        <div>
            <button>Send</button>
        </div>
    </FormContainer>
  )
}

export default MessageForm