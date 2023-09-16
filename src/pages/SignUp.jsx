import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { ButtonContainer, InputContainer, StyledButton, StyledSection } from './SignUp.Styles'
import { auth, db } from '../utils/firebase.utils'
import { doc, setDoc, Timestamp } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'




const INITIAL_DATA_STATE={
    name: '',
    email: '',
    password: '',
    confirmPassword:'',
    error: null,
    loading: false,
}

const SignUp = () => {
    const [data, setData] = useState(INITIAL_DATA_STATE);
    const navigate = useNavigate();

    const {name, email, password, confirmPassword, error, loading} = data;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const handleChange = (e) =>{
        setData({...data, [e.target.name]: e.target.value})
    }

    const checkPassword = !!password && password === confirmPassword;

    const handleSubmit = async e =>{
        e.preventDefault();
        setData({...data, loading: true });
        if(!name || !email || !password || !confirmPassword || !checkPassword){
            setData({...data, error: true});
            return;
        };

        try{
            const result = await createUserWithEmailAndPassword(auth, email, password)
            const docRef = doc(db,"users", result.user.uid);
            try {await setDoc(docRef, {
                uid: result.user.uid,
                name,
                email,
                createdAt: Timestamp.fromDate((new Date())),
                isOnline: true,
            });}catch(err){
                console.log('error creating user', err)
            }
            setData({
                name: '',
                email: '',
                password: '',
                confirmPassword: '',
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
        <h2>CRIE SUA CONTA</h2>
        <form onSubmit={handleSubmit}>
            <InputContainer  borderRed={!name && error? true: ''} >
                <label htmlFor="name">Nome: </label>
                <input type="text" name='name' value={name} onChange={handleChange} />
            </InputContainer>
            {!name && error? <p>Este nome é inválido</p>: ''}
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
            <InputContainer borderRed={!checkPassword && error}>
                <label htmlFor="confirmPassword">Confirme a senha: </label>
                <input type="password" name='confirmPassword' value={confirmPassword} onChange={handleChange}  />
            </InputContainer>
            {!checkPassword && error? <p>As senhas não são iguais.</p>: ''}
            <ButtonContainer>
             <StyledButton>
             {loading? "Criando conta...": "CRIAR CONTA"}
                </StyledButton>
            </ButtonContainer>
        </form>
        <span><strong>Crie sua conta</strong> e faça sua network!!</span>
    </StyledSection>
  )
}

export default SignUp