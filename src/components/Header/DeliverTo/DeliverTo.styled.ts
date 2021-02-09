import styled from 'styled-components'
import { NavLinks, FirstLine } from '../Navbar/Navbar.styled'

const Container = styled(NavLinks)`
  flex-direction: row;
  margin: 0 18px;
  padding-left: 2px;
`
const IconContainer = styled.div`
display: flex;
align-items: flex-end;
`
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const FirstLineGray = styled(FirstLine)`
  color: #ccc;
`

export { Container, IconContainer, TextContainer, FirstLineGray}