import { collection, onSnapshot, query, where, addDoc, Timestamp, orderBy, setDoc, doc, getDoc, updateDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { auth, db, storage } from '../utils/firebase.utils';
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import User from '../components/User/User';
import { UserContacts, UserContainer, AppContainer} from '../components/User/User.styles';
import MessageForm from '../components/MessageForm/MessageForm';
import { ChatContainer, MessageContainer } from '../components/MessageForm/MessageFormStyles';
import Message from '../components/Message/Message';
import Searchbar from '../components/SearchBar/Searchbar';
import UsersList from '../components/UsersList/UsersList';

function Home() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchField, setSearchField] = useState("")
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

  const onChangeHandler = (event) => {
    const searchString = event.target.value.toLocaleLowerCase();
    setSearchField(searchString)
  }

  useEffect(()=>{
    const newFilteredUsers = users.filter(user => user.name.toLowerCase().includes(searchField)) 
    setFilteredUsers(newFilteredUsers)
  }, [users,searchField] )

  const selectUser = async (user) =>{
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

    const docSnap = await getDoc(doc(db, "lastMsg", id))
    if(docSnap.data() && docSnap.data().from !== currentUser){
      await updateDoc(doc(db, "lastMsg", id), {unread: false});
     }
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

    setText("");
    setImage("");
  }
  }


  return (
    <AppContainer>
      <UserContainer>
      <span>Contatos</span>
      <Searchbar onChangeHandler={onChangeHandler}></Searchbar>
      <UsersList users={filteredUsers} chat={chat} selectUser={selectUser} currentUser={currentUser}></UsersList>
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