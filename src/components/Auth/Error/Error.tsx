import React from 'react'
import { ErrorProps } from '../../../types';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import { Container, Icon, Heading, Text } from './Error.styled'

function Error({error}: ErrorProps) {

  let errorText = (error: string) => {
    switch (error) {
      case 'auth/wrong-password': 
        return 'Your password is incorrect'

      case 'auth/user-not-found':
        return 'We cannot find an account with that email address'

      case 'auth/too-many-requests':
        return 'Too many requests to the server'

      case 'auth/email-already-in-use':
        return 'Email already in use'
        
      default: return 'Something went wrong. Try again'
    }
  }

  return (
    <Container>
      <Icon>
        <ErrorOutlineOutlinedIcon style={{ fontSize: 32 }}/>
      </Icon>
      <Heading>
        There was a problem
      </Heading>
      <Text>
        {errorText(error)}
      </Text>
    </Container>
  )
}

export default Error
