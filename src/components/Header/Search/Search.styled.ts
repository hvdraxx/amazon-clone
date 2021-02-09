import styled from 'styled-components'

export const Container = styled.form`
  display: flex;
  flex: 1;
  align-items: center;
`
export const Input = styled.input`
  width: 100%;
  height: 38px;
  padding: 7px 10px;
  border: none;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  outline: none;
  background-color: #fff;
  cursor: not-allowed;
`
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 38px;
  margin-right: 14px;
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  outline: none;
  background-color: #febd69;
  cursor: not-allowed;
`