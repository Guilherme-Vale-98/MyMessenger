import React from 'react'
import { Link } from 'react-router-dom'
import {NavButtons, NavContainer} from './NavbarStyles';


const Navbar = () => {
  return (
    <NavContainer>
        <h2>
            <Link to="/">MyMessenger</Link>
        </h2>
        <NavButtons>
            <span>
                <Link className='a' to='/register'>Cadastre-se</Link>
            </span>
            <span>
                <Link to='/login'>Entre</Link>
            </span>
        </NavButtons>           
    </NavContainer>
  )
}

export default Navbar