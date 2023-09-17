import { collection, onSnapshot, query, where, addDoc, Timestamp, orderBy, setDoc, doc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db, storage } from '../utils/firebase.utils';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import User from '../components/User/User';
import { UserContacts, UserContainer, AppContainer} from '../components/User/User.styles';
import MessageForm from '../components/MessageForm/MessageForm';
import { ChatContainer, MessageContainer } from '../components/MessageForm/MessageFormStyles';
import Message from '../components/Message/Message';

function Home() {
  const [users, setUsers] = useState([]);
  const [chat, setChat] = useState("")
  const [text, setText] = useState("")
  const [img, setImage] = useState("")
  const [msgs, setMsgs] = useState([])
  const currentUser = auth.currentUser.uid

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
    const targetUser = user.uid
    const id = currentUser > targetUser ? `${currentUser + targetUser}` : `${targetUser + currentUser}`;

    const msgsRef = collection(db, 'messages', id, 'chat')
    const q = query(msgsRef, orderBy('createdAt', 'asc'))

    onSnapshot(q, querySnapshot =>{
      let msgs = []
      querySnapshot.forEach(doc =>{
        msgs.push(doc.data())
      })
      setMsgs(msgs)
    })
  };

  const handleSubmit  = async (e) =>{
    e.preventDefault();
    const targetUser = chat.uid;

    const id = currentUser > targetUser ? `${currentUser + targetUser}` : `${targetUser + currentUser}`;

    let url;
    if(img){
      const imgRef = ref(
        storage, `images/${new Date().getTime()} - ${img.name}`
      );
      const snap = await uploadBytes(imgRef, img);
      const dlUrl = await getDownloadURL(ref(storage, snap.ref.fullPath));
      url = dlUrl;
    }

    
    if( text || img){
    await addDoc(collection(db, "messages", id, "chat"), {
      text,
      from: currentUser,
      to: targetUser,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || ""
    });

    await setDoc(doc(db, "lastMsg", id), {
      text,
      from: currentUser,
      to: targetUser,
      createdAt: Timestamp.fromDate(new Date()),
      media: url || "",
      unread: true
    })

    setText("");}
  }


  return (
    <AppContainer>
      <UserContainer>
      <span>Contatos</span>
      {users.map(user => <User key={user.uid} user={user} chat={chat} selectUser={selectUser} currentUser={currentUser}/> )}
      </UserContainer>
      <ChatContainer>
        {chat? (
        <>
        <MessageContainer>
          <h3>{chat.name}</h3>
          {msgs.length ? msgs.map((msg, i) => <Message key={i} msg={msg} currentUser={currentUser}></Message> ) : null }        
        </MessageContainer>
        <MessageForm 
          handleSubmit={handleSubmit}
          text={text}
          setText={setText}
          setImage={setImage}
          ></MessageForm>
         </>):(
          <>
          <MessageContainer>
            <h3>Select a user to start a conversation</h3>
          </MessageContainer>
          </>
        )}
      </ChatContainer>
    </AppContainer>
    
  )
}

export default Home