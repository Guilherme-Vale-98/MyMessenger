import React, { useEffect, useState } from 'react'
import { UserContacts } from './User.styles'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../utils/firebase.utils'

const User = ({user, selectUser, currentUser, chat}) => {
  const targetUser = user?.uid
  const [data, setData] = useState('')

  useEffect(()=>{
    const id = currentUser > targetUser ? `${currentUser + targetUser}` : `${targetUser + currentUser}`;
    let unsub = onSnapshot(doc(db, "lastMsg", id), doc => {
      setData(doc.data())
    });
    return () => unsub()

  }, []);



  return (
    <UserContacts className={`${user.name === chat.name && "selected"}`} onClick={()=>selectUser(user)} >
      <img src={user.avatar} alt='user'/>
      <span>{user.name}</span>
      <div className={user.isOnline? 'green' : 'red'}></div>
      {data && (
        <p>
          <strong>{data.from === currentUser? "Me: ": null}</strong>
          {data.text}
        </p>
      )}
    </UserContacts>
  )
}

export default User