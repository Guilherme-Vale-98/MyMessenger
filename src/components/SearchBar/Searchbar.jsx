import React from 'react'
import { StyledSearch } from './Searchbar.styles'

const Searchbar = ({onChangeHandler}) => {

  
  return (
    <StyledSearch >
      <input onChange={(e)=> onChangeHandler(e)} type="search"/>
    </StyledSearch>
  )
}

export default Searchbar