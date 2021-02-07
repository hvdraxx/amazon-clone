import styled from 'styled-components'
import { Button } from '../../Home/Product/Product.styled'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 320px;
  max-height: 150px;
  padding: 25px 20px 35px 20px;
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
  padding: 8px 0;
`

export { Container, TotalText, Proceed, ContainerCheckbox, Checkbox }