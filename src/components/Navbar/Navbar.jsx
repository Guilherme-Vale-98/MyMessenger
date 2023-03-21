import React from 'react'
import { Link } from 'react-router-dom'
import {NavButtons, NavContainer} from './NavbarStyles';


const Navbar = () => {
  return (
    <NavContainer>
        <h3>
            <Link to="/">MyMessenger</Link>
        </h3>
        <NavButtons>
            <Link to='/register'>Cadastre-se</Link>
            <Link to='/login'>Entre</Link>
        </NavButtons>           
    </NavContainer>
  )
}

export default Navbar