import styled from 'styled-components'

interface errorProp {
  error: boolean
}

export const Wrapper = styled.div`
  height: 100vh;
  background-color: #FDFDFD;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 14px;
  background-color: #fff;

  & > *:focus {
    outline: none;
  }

  & > *:active {
    outline: none;
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  margin-bottom: 24px;
  border: 1px solid #DDDDDD;
  border-radius: 4px;

  & > * {
    width: 100%;
    user-select: none;
  }
`
export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 18px;
`
export const Logo = styled.img`
  width: 105px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 20px 26px 0 26px;
`
export const AccountForm = styled(Form)`
  padding: 14px 18px 0 18px;
`
export const Title = styled.h1`
  font-weight: normal;
  margin-bottom: 14px;
  font-size: 28px;
`
export const Input = styled.input<errorProp>`
  height: 32px;
  margin-bottom: ${props => props.error ? '6px' : '10px'};
  padding: 3px 7px;
  border: 1px solid;
  border-radius: 3px;
  border-color: ${props => props.error ? '#C40000' : 'gray'};
  outline: none;
  font-size: 13px;
  box-shadow: ${props => props.error ? 'inset 2px 2px 0 rgb(255 0 0 / 20%), inset -2px -2px 0 rgb(255 0 0 / 20%)' : ''};

  &:focus {
    border-color: #E77600;
    box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%)
  }

  &::placeholder {
    font-family: 'Roboto', sans-serif;
  }
`
export const AccountInput = styled(Input)`
  margin-bottom: ${props => props.error ? '6px' : '10px'};

  &:nth-last-of-type(2) {
    margin-bottom: 6px;
  }
`
export const Label = styled.label`
  margin-bottom: 4px;
  font-size: 13px;
  font-weight: bold;
`
export const ErrorLabel = styled(Label)`
  margin-bottom: 8px;
  padding-left: 18px;
  font-weight: nornal;
  font-size: 12px;
  color: #C40000;
  background-image: url('https://www.flaticon.com/svg/vstatic/svg/179/179386.svg?token=exp=1612768916~hmac=d7e20f1734376b7a13509bb839d9eab7');
  background-size: contain;
  background-repeat: no-repeat;
`
export const FormButton = styled.input`
  height: 30px;
  margin-top: 8px;
  border: 1px solid gray;
  border-color: #a88734 #9c7e31 #846a29;
  border-radius: 3px;
  outline: none;
  background: linear-gradient(to bottom, #f7dfa5, #f0c14b);
  cursor: pointer;

  &:hover {
    background: linear-gradient(to bottom, #f7dfa5, #f0c14b, #f0c14b);
  }

  &:focus {
    border-color: #E77600;
    box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%)
  }
`
export const AccoutFormButton = styled(FormButton)`
  margin-bottom: 0;
`
export const ContainerShadow = styled.div`
  width: 100%;
  height: 5px;
  background: radial-gradient(at 50% 0, #CCCCCC, transparent 60%);
`
export const AccountShadow = styled(ContainerShadow)`
  margin: 0 14px;
`
export const HaveAccount = styled.p`
  margin: 14px 0;
  padding: 0 18px;
  font-size: 13px;
`
export const SignInButton = styled.input`
  margin-left: 4px;
  border: none;
  outline: none;
  color: #0066C0;
  background-color: transparent;
  z-index: 2;

  &:hover {
    color: #C45500;
    text-decoration: underline;
    cursor: pointer;
  }

  &:focus {
    border-color: #E77600;
    box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%)
  }

`