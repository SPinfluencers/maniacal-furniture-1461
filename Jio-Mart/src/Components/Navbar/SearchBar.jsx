import React from 'react'
import { border, Input } from '@chakra-ui/react'

const SearchBar = () => {
  return (
    <div style={{display:'flex'}}>
      <Input 
      backgroundColor='white' 
      marginTop='18px' 
      width='600px' 
      placeholder='Search essentials, groceries, and more...                                                             🔍' 
      ></Input>     
    </div>
  )
}

export default SearchBar