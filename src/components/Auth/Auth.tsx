import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import SignIn from './SignIn/SignIn'
import Agree from './Agree/Agree'
import NewToAmazon from './NewToAmazon/NewToAmazon'
import SignUp from './SignUp/SignUp'
import Error from './Error/Error'
import { 
  Wrapper,
  Container,
  Content,
  LogoWrapper,
  Logo,
  ContainerShadow,
  AccountShadow,
  HaveAccount,
  SignInButton 
} from './Auth.styled'

function Auth() {
  let location = useLocation()

  const [error, setError] = useState('')
  
  return (
    <Wrapper>
      <Container>

          <Link to='/' tabIndex={-1}>
            <LogoWrapper>
              <Logo 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/800px-Amazon_logo.svg.png' 
                alt='Amazon Logo'
              />
            </LogoWrapper>
          </Link>

          {
            error !== '' ? 
              <Error error={error} />
            :
              null
          }

        <Content>
          {
            location.pathname === '/auth/signin' ?
              // Show Sign In form
              <>
                <SignIn setError={setError}/>
                <Agree path={'signin'}/>
              </>
            : 
              // Show Sign Up form
              <>
                <SignUp setError={setError}/>
                <Agree path={'signup'}/>
                <AccountShadow />
                
                <HaveAccount>
                  Already have an account?
                  <Link to='./signin' tabIndex={-1}>
                    <SignInButton 
                      value='Sign-In' 
                      type='button'
                      onClick={() => {setError('')}}
                    />
                  </Link>
                </HaveAccount>
                
              </>
          }
        </Content>

          {
            location.pathname === '/auth/signin' ?
              <NewToAmazon clearError={setError} />
            :
              null
          }

        <ContainerShadow />
      </Container>
    </Wrapper>
  )
}

export default Auth
