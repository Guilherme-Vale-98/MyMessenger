import React from 'react'
import { MessageDisplay } from './MessageStyles'
import Moment from 'react-moment'

const Message = ({msg, currentUser}) => {
  return (
    <div className={`holder ${msg.from === currentUser ? "own": null}`}>
    <MessageDisplay>     
       <p>
          {msg.text}
          <br/>
          {msg.media?
           (
            <>
           <img src={msg.media} alt="media"></img> 
            <br/>
            </>
           ): null}
         
        </p> 
    </MessageDisplay>
    <small style={{color: "gray"}}>
      <Moment fromNow>{msg.createdAt.toDate()}</Moment>
    </small>
    </div>
  )
}

export default Message