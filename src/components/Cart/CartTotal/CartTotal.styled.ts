import styled from 'styled-components'
import { Button } from '../../Home/Product/Product.styled'

const Container = styled.div`
  position: sticky;
  top: 90px;
  display: flex;
  flex-direction: column;
  min-width: 320px;
  max-height: 180px;
  padding: 25px 20px 0 20px;
  background-color: #fff;
`
const TotalText = styled.p`
  margin-bottom: 10px;
  font-size: 18px;
`
const ContainerCheckbox = styled.small`
  display: flex;
  align-items: center;
  margin: 6px 0 4px 0;
`
const Checkbox = styled.input`
  margin-right: 3px;
`
const Proceed = styled(Button)`
  justify-content: center;
  width: 100%;
  margin-bottom: 16px;
  padding: 8px 0;
`
const ClearCart = styled.input`
  align-self: flex-start;
  border: none;
  outline: none;
  color: #0066C0;
  background-color: transparent;

  &:hover {
    color: #C45500;
    cursor: pointer;
  }
`

export { Container, TotalText, Proceed, ContainerCheckbox, Checkbox, ClearCart }