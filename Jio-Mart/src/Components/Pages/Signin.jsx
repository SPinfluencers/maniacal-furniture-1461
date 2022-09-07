import { FormControl, Button, Heading, Input, InputGroup, InputLeftAddon, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import style from '../Styles/signin.css'
import { useNavigate  } from 'react-router-dom'

const Signin = () => {
 
  let navigate = useNavigate()
  
  const [data, setData] = React.useState({
    email: '',
    password: ''
 })

 const [value, setValue] = React.useState([])

 const getData = (e) => {
  // console.log(e.target.value)
  const {value, name} = e.target
  // console.log(value, name)
  setData(() => {
     return {
        ...data, 
        [name]: value
     }
  })
}

    const addData = (e) => {
      e.preventDefault()

      const getuserArr = localStorage.getItem('userData')
      // console.log(getuserArr)

    const { email, password } = data
    if(email == "") {
      alert("email field is required")
    }
    else if(!email.includes("@")) {
      alert("please enter valid email address")
    }
    else if(password == "") {
      alert("password field is required")
    }
    else {
      if(getuserArr && getuserArr.length) {
        const userdataInfo = JSON.parse(getuserArr)
        console.log(userdataInfo)
        const userLogin = userdataInfo.filter((el, k) => {
          return el.email === email && el.password === password
        })
        
        if(userLogin.length === 0) {
          alert('invalide details')
        }
        else {
          alert('login sucessfully')
          navigate('/')
        }
      }
    }
   }

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
           <FormControl>
            <InputGroup>
                <Input 
                type='email' 
                placeholder='Enter Your Email'
                onChange={getData} 
                padding='4%' 
                name='email' 
                 />
              </InputGroup>
              <br />
              <br />
              <InputGroup>
                <Input 
                  type='password' 
                  placeholder='Enter Your Password' 
                  onChange={getData} 
                  padding='4%' 
                  name='password' 
                  />
              </InputGroup>
              <br />
              <br />
              <Button 
                color='white' 
                bgColor='rgb(0,142,204)' 
                paddingLeft='250px'
                paddingRight='250px'
                onClick={addData}
                >
                  Sign in
              </Button>
            </FormControl>
            <br /><br />
            <Text textAlign='center'>Don't have an account? <span><NavLink style={{color:"blue"}} to='/signup'>Sign up</NavLink></span></Text>
        </div> 
       </div>
    </div>
  )
}

export default Signin