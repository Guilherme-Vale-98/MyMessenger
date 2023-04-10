import React, { useState } from 'react'
import Camera from "../components/svg/Camera.jsx"
import { Overlay, PhotoContainer, ProfileContainer, TextContainer } from './Profile.styles'
import img from "../assets/profi.png"





const Profile = () => {
    const [image, setImage] = useState(null)

    const handleChange = (e) =>{
        setImage(e.target.files[0])
    }

    console.log(image)

  return (
    <ProfileContainer>    
        <PhotoContainer>
            <img src={img}/>                
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
                <h2>User name</h2>
                <p>User email</p>
                <hr />
                <small>Joined on:</small>
        </TextContainer>
        
        
    </ProfileContainer>
  )
}

export default Profile