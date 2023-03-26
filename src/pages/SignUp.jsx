import React, { useState } from 'react'
import { ButtonContainer, InputContainer, StyledButton, StyledSection } from './SignUp.Styles'

const INITIAL_DATA_STATE={
    name: '',
    email: '',
    password: '',
    confirmPassword:'',
    error: false,
    loading: false,
}

const SignUp = () => {
    const [data, setData] = useState(INITIAL_DATA_STATE);

    const {name, email, password, confirmPassword, error, loading} = data;

    const handleChange = (e) =>{
        setData({...data, [e.target.name]: e.target.value}) 
    }

    const checkPassword = !!password && password === confirmPassword && error;

    const handleSubmit = e =>{
        e.preventDefault();
        if(!name || !email || !password || !confirmPassword){
            setData({...data, error: true})
        }
      
    }
    console.log(checkPassword)

  return (
    <StyledSection>
        <h2>CRIE SUA CONTA</h2>
        <form onSubmit={handleSubmit}>
            <InputContainer  borderRed={!name && error? true: ''} >
                <label htmlFor="name">Nome: </label>
                <input type="text" name='name' value={name} onChange={handleChange} />
            </InputContainer>
            {!name && error? <p>Este nome é inválido</p>: ''}
            <InputContainer  borderRed={!email && error? true: ''}>
                <label htmlFor="email">Email: </label>
                <input type="text" name='email' value={email} onChange={handleChange}  />
            </InputContainer>
            {!email && error? <p>Este email é inválido</p>: ''}
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
             <StyledButton>Criar nova conta</StyledButton>
            </ButtonContainer>
        </form>
        <span><strong>Crie sua conta</strong> e participe do chat mais divertido da web!!</span>
    </StyledSection>
  )
}

export default SignUp