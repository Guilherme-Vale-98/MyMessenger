import React from 'react'
import { UserContacts } from './User.styles'

const User = ({user}) => {
  console.log(user.isOnline)
  return (
    <UserContacts >
      <img src={user.avatar} />
      <span>{user.name}</span>
      <div className={user.isOnline? 'green' : 'red'}></div>
    </UserContacts>
  )
}

export default User