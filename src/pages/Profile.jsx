import React, { useEffect, useState } from 'react'
import Camera from "../components/svg/Camera.jsx"
import { Overlay, PhotoContainer, ProfileContainer, TextContainer } from './Profile.styles'
import img from "../assets/profi.png"
import { auth, db, storage } from '../utils/firebase.utils.js'
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { doc, getDoc, updateDoc } from 'firebase/firestore'





const Profile = () => {
    const [image, setImage] = useState();
    const [user, setUser] = useState("");
    

    /* Handling img upload to firebase storage */
    useEffect(()=>{
        getDoc(doc(db, "users", auth.currentUser.uid)).then(
            (docSnap)=> {   
                if(docSnap.exists){
                    setUser(docSnap.data());
                }
            }
        )

        if (image){      
            const uploadImg = async () => {
                const imgRef = ref(storage, `avatar/${new Date().getTime()} - ${image.name}`)

                try {
                    if(user.avatarPath){
                        await deleteObject(ref(storage, user.avatarPath))
                    }
                    const snap = await uploadBytes(imgRef, image)
                    const url = await getDownloadURL(ref(storage, snap. ref.fullPath));
                    await updateDoc(doc(db, "users", auth.currentUser.uid), {
                        avatar: url,
                        avatarPath: snap.ref.fullPath,
                    })
                    setImage("");
                } catch (error) {
                    console.log(error.message)
                }
                
                
            }

            uploadImg();
           
        }
    },[image])
    
    const handleChange = (e) =>{
        setImage(e.target.files[0])
    }

    const  dataFormatada = (date)=>{
            let data = date
            let dia  = data.getDate().toString().padStart(2, '0')
            let mes  = (data.getMonth()+1).toString().padStart(2, '0') //+1 pois no getMonth Janeiro começa com zero.
            let ano  = data.getFullYear();
        return dia+"/"+mes+"/"+ano;
    }

  return user ? (
    <ProfileContainer>    
        <PhotoContainer>
            <img src={user.avatar || img}/>                
                    <Overlay>
                        <label htmlFor='photo'>
                            <Camera/>
                        </label>
                        <input
                        type="file"
                        accept="image/*"
                        style={{ display: 'none' }}
                        id='photo'
                        onChange={handleChange}
                    />           
                    </Overlay>           
        </PhotoContainer>
        <TextContainer>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <hr />
                <small>Entrou em: {dataFormatada( user.createdAt.toDate())}</small>
        </TextContainer>
        
        
    </ProfileContainer>
  ): null;
}

export default Profile