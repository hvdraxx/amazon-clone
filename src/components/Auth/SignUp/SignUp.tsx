import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../../../firebase'
import { SignUpProps } from '../../../types'
import { AccountForm, Title, Label, ErrorLabel, AccountInput, AccoutFormButton} from '../Auth.styled'

function SignUp({ setError }: SignUpProps) {
  const history = useHistory()

  const [name,       setName]       = useState('')
  const [email,      setEmail]      = useState('')
  const [password,   setPassword]   = useState('')
  const [rePassword, setRePassword] = useState('')
  
  const [validName,       setValidName]       = useState(false)
  const [validEmail,      setValidEmail]      = useState(false)
  const [validPassLength, setValidPassLength] = useState(false)
  const [validPassMatch,  setValidPassMatch]  = useState(false)
  const [validForm,       setValidForm]       = useState(false)

  const [showError, setShowError] = useState(false)

  useEffect(() => {
    // Validate Form
    setValidName(name.length > 2)
    setValidEmail(Boolean(email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)))
    if (password.length > 5) setValidPassLength(true)
    if (password === rePassword) setValidPassMatch(true)
    else setValidPassMatch(false)

    setValidForm(validName && validEmail && validPassLength && validPassMatch)

  }, [name, email, password, rePassword, validName, validEmail, validPassLength, validPassMatch])

  const signUp = () => {
    if (!validForm) setShowError(true)

    else {
      auth.createUserWithEmailAndPassword(email, password)
      .then(async (auth) => {
        await auth.user!.updateProfile({
          displayName: name
        })
        history.push('/')
      })
      .catch(error => {
          setError(error.code)
      })
    }
  }

  return (
    <AccountForm>
      <Title>Create account</Title>

      <Label htmlFor='InputNameSignUp'>Your name</Label>
      <AccountInput
        id='InputNameSignUp' 
        type='text'
        value={name}
        error={showError && !validName}
        autoFocus 
        onChange={(e) => {setName(e.target.value)}}
        onClick={() => {setShowError(false)}}
      />
      {showError &&
        (validName ? null :
        <ErrorLabel>
          Name must be at least 3 characters
        </ErrorLabel>)
      }

      <Label htmlFor='InputEmailSignUp'>Email</Label>
      <AccountInput 
        id='InputEmailSignUp' 
        type='email'
        value={email}
        error={showError && !validEmail}
        onChange={(e) => {setEmail(e.target.value)}}
        onClick={() => {setShowError(false)}}
      />
      {showError &&
        (validEmail ? null :
        <ErrorLabel>
          Enter a valid email address
        </ErrorLabel>)
      }

      <Label htmlFor='InputPasswordSignUp'>Password</Label>
      <AccountInput 
        id='InputPasswordSignUp' 
        type='password'
        value={password}
        error={showError && !validPassLength}
        placeholder='At least 6 characters' 
        onChange={(e) => {setPassword(e.target.value)}}
        onClick={() => {setShowError(false)}}
      />
      {showError &&
        (validPassLength ? null :
        <ErrorLabel>
          Password must be at least 6 characters
        </ErrorLabel>)
      }

      <Label htmlFor='InputRePasswordSignUp'>Re-enter password</Label>
      <AccountInput 
        id='InputRePasswordSignUp' 
        type='password'
        value={rePassword}
        error={showError && !validPassMatch}
        onChange={(e) => {setRePassword(e.target.value)}}
        onClick={() => {setShowError(false)}}
      />
      {showError &&
        (validPassMatch ? null :
        <ErrorLabel>
          Passwords must match
        </ErrorLabel>)
      }

      <AccoutFormButton 
        value='Create your Amazon account' 
        type='button'
        onClick={signUp}
      />

    </AccountForm>
  )
}

export default SignUp
