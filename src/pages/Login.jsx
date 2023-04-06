import React, { useState } from 'react'
import {  signInWithEmailAndPassword } from 'firebase/auth'
import { ButtonContainer, InputContainer, StyledButton, StyledSection } from './SignUp.Styles'
import { auth, db } from '../utils/firebase.utils'
import { doc, updateDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'


const INITIAL_DATA_STATE={
    email: '',
    password: '',
    error: null,
    loading: false,
}

const Login = () => {
    const [data, setData] = useState(INITIAL_DATA_STATE);
    const navigate = useNavigate();

    const {email, password, error, loading} = data;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleChange = (e) =>{
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = async e =>{
        e.preventDefault();
        setData({...data, loading: true });
        if( !email || !password){
            setData({...data, error: true});
            return;
        };

        try{
            const result = await signInWithEmailAndPassword(auth, email, password)
            const docRef = doc(db,"users", result.user.uid);
            try {await updateDoc(docRef, {
                isOnline: true,
            });}catch(err){
                console.log('error creating user', err)
            }
            setData({
                email: '',
                password: '',
                error: null,
                loading: false,
            })
            navigate('/');
            
        }catch(err){
            setData({...data, error: err.code, loading: false});
            console.log(err.code)
        }
    }


  return (
    <StyledSection>
        <h2>ENTRE NA SUA CONTA</h2>
        <form onSubmit={handleSubmit}>
            <InputContainer  borderRed={(!email && error) || (!regex.test(email) && error)? true: ''}>
                <label htmlFor="email">Email: </label>
                <input type="text" name='email' value={email} onChange={handleChange}  />
            </InputContainer>
            {(!email && error) || (!regex.test(email) && error) ? <p>Este email é inválido</p>: ''}
            <InputContainer borderRed={!password && error? true: ''}>
                <label htmlFor="password">Senha: </label>
                <input type="password" name='password' value={password} onChange={handleChange}  />
            </InputContainer>
            {!password && error? <p>Esta senha é inválida</p>: ''}
            <ButtonContainer>
                <StyledButton>
                    {loading? "Entrando...": "ENTRAR"}
                </StyledButton>
            </ButtonContainer>
        </form>
        <span><strong>Entre na sua conta</strong> e participe do chat mais divertido da web!!</span>
    </StyledSection>
  )
}

export default Login