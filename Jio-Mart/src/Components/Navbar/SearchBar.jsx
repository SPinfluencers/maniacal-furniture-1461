import React from 'react'
import { Input } from '@chakra-ui/react'

const SearchBar = () => {
  return (
    <div>
      <Input backgroundColor='white' marginTop='18px' width='600px' placeholder='Search essentials, groceries, and more...' />
    </div>
  )
}

export default SearchBar