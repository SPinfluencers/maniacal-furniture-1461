import React from 'react'
import {  Heading, Text } from '@chakra-ui/react'
import style from '../Styles/cart.css'

const Cart = () => {
  return (
    <div>
      <Heading marginTop='20px' marginLeft='-1000px'>My Cart</Heading>
      <div className='cart-container'>
        <img src="https://bit.ly/3vbIApx" alt="cart image" />
        <Text fontWeight='bold' fontSize='lg'>Your Cart is empty!</Text>
      </div>
    </div>
  )
}

export default Cart