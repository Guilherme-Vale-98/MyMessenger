import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {NavButtons, NavContainer} from './NavbarStyles';
import { auth, db } from '../../utils/firebase.utils';
import { signOut } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { AuthContext } from '../../context/authContext';

const Navbar = () => {
    const {user} = useContext(AuthContext);
    const handleLogout = async () =>{
        const docRef = doc(db,"users", auth.currentUser.uid);
        await updateDoc(docRef, {
            isOnline: false,
        })
        await signOut(auth);
    }
    
  return (
    <NavContainer>
        <h2>
            <Link to="/">MyMessenger</Link>
        </h2>
        <NavButtons>
            {user ?
                <>
                    <span>
                        <Link className='a' to='/profile'>Perfil</Link>
                    </span>
                    <span>
                        <Link onClick={handleLogout}>Sair</Link>
                    </span>
                </> :
                <>
                    <span>
                        <Link className='a' to='/signup'>Cadastre-se</Link>
                    </span>
                    <span>
                        <Link to='/login'>Entre</Link>
                    </span>
                </>}
        </NavButtons>           
    </NavContainer>
  )
}

export default Navbar