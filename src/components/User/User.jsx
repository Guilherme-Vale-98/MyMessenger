import React from 'react'
import { UserContacts } from './User.styles'

const User = ({user, selectUser}) => {
  return (
    <UserContacts onClick={()=>selectUser(user)} >
      <img src={user.avatar}/>
      <span>{user.name}</span>
      <div className={user.isOnline? 'green' : 'red'}></div>
    </UserContacts>
  )
}

export default User