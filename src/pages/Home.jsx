import { collection, onSnapshot, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../utils/firebase.utils';
import User from '../components/User/User';
import { UserContacts, UserContainer} from '../components/User/User.styles';

function Home() {
  const [users, setUsers] = useState([]);

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

  return (
    <UserContainer>
      <span>Contatos</span>
      {users.map(user => <User user={user}/> )}</UserContainer>
  )
}

export default Home