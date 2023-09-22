import React from 'react'
import User from '../User/User.jsx'

const UsersList = ({users, chat, selectUser, currentUser}) => {
        return users.map(user => <User key={user.uid} user={user} chat={chat} selectUser={selectUser} currentUser={currentUser}/>)
}


export default UsersList