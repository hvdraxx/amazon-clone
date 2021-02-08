import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../../../firebase'
import { SignInProps } from '../../../types'
import { Form, Title, Input, Label, ErrorLabel, FormButton } from '../Auth.styled'

function SignIn({ setError }: SignInProps) {
  const history = useHistory()
  
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  
  const [validEmail, setValidEmail] = useState(false)
  const [validPass,  setValidPass]  = useState(false)
  const [validForm,  setValidForm]  = useState(false)
  const [showError, setShowError]   = useState(false)

  useEffect(() => {
    setValidEmail(Boolean(email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)))
    setValidPass(password.length > 5)

    setValidForm(validEmail  && validPass)
  }, [email, password, validEmail, validPass])
 
  const signIn = () => {
    if (!validForm) setShowError(true)
    
    else  {
      auth.signInWithEmailAndPassword(email, password)
        .then(auth => {
          history.push('/')
        })
        .catch(error => {
          setError(error.code)
          console.log(error.code)
        })
    }
  }

  return (
    <Form>
      <Title>Sign-In</Title>

      <Label htmlFor='InputEmailSignIn'>Email</Label>
      <Input
        error={showError && !validEmail}
        id='InputEmailSignIn' 
        type='email'
        autoFocus
        value={email}
        onChange={(e) => {setEmail(e.target.value)}}
        onClick={() => {setShowError(false)}}
      />
      {showError &&
        (validEmail ? null :
        <ErrorLabel>
          Enter a valid email address
        </ErrorLabel>)
      }

      <Label htmlFor='InputPasswordSignIn'>Password</Label>
      <Input
        error={showError && !validPass}
        id='InputPasswordSignIn' 
        type='password'
        value={password}
        onChange={(e) => {setPassword(e.target.value)}}
        onClick={() => {setShowError(false)}}
      />
      {showError &&
        (validPass ? null :
        <ErrorLabel>
          Password must be at least 6 characters
        </ErrorLabel>)
      }

      <FormButton 
        value='Sign In' 
        type='button'
        onClick={signIn}
      />
    </Form>
  )
}

export default SignIn
