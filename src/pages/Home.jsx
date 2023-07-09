import { collection, onSnapshot, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../utils/firebase.utils';
import User from '../components/User/User';
import { UserContacts, UserContainer, ChatContainer, MessageContainer, AppContainer} from '../components/User/User.styles';

function Home() {
  const [users, setUsers] = useState([]);
  const [chat, setChat] = useState("")

  useEffect(() =>{
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("uid", "not-in", [auth.currentUser.uid]));
    const unsub = onSnapshot(q, (querySnapshot)=>{
      let users = [];
      querySnapshot.forEach((doc)=>{
        users.push(doc.data());
      })
      setUsers(users);
    })
    return ()=>unsub();
  }
  ,[])

  const selectUser = (user) =>{
    setChat(user)
    console.log(user)
  }
  return (
    <AppContainer>
      <UserContainer>
      <span>Contatos</span>
      {users.map(user => <User key={user.uid} user={user} selectUser={selectUser}/> )}
      </UserContainer>
      <ChatContainer>
        {chat? (<MessageContainer>
          {chat.name}
        </MessageContainer>):(<MessageContainer>
          <h3>Select a user to start a conversation</h3>
        </MessageContainer>)}
      </ChatContainer>
    </AppContainer>
    
  )
}

export default Home