import { Button, Heading, Input, InputGroup, InputLeftAddon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import style from '../Styles/signin.css'


const Signin = () => {
  return (
    <div>
       <div className='container-signin'>
          <img border-radius= "10px" src="https://bit.ly/3Bat8Od" alt="sign in banner" />
      
        <div className='signin-area'>
          <Stack spacing={3}>
           <Heading  as='h3' size='lg'> Sign in</Heading>
           <Text>Sign in to access your Orders, Offers and Wishlist.</Text>
          </Stack>
           <br />
           <br />
           <InputGroup>
             <InputLeftAddon children='+94' />
               <Input type='tel' placeholder='phone number' />
            </InputGroup>
            <br />
            <Link to={`/signin/signup`}><Button 
              color='white' 
              bgColor='rgb(0,142,204)' 
              borderRadius='50%' 
              marginLeft='200px'
              >➭</Button>
              </Link>
        </div>
       </div>
    </div>
  )
}

export default Signin