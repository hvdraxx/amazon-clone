import styled from 'styled-components'

const Container = styled.nav`
  display: flex;
  flex-direction: space-evenly;
`
const NavLinks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10px;
  padding: 8px 8px;
  border: 1px solid transparent;
  color: white;
  cursor: pointer;

  &:hover {
    border: 1px solid white;
    border-radius: 2px;
  }
`
const FirstLine = styled.span`
  font-size: 12px;
`
const SecondLine = styled.span`
  font-size: 14px;
  font-weight: 700;
`
const CartLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 0 10px;
  padding: 8px 8px;
  border: 1px solid transparent;
  color: white;
  cursor: pointer;

  &:hover {
    border: 1px solid white;
    border-radius: 2px;
  }

`
const CartCounter = styled(SecondLine)`
  margin-left: 8px;
`
const CartCounterSpan = styled.span`
  font-size: 20px;
  color: #F19834;
`

export {Container, NavLinks, FirstLine, SecondLine, CartLink, CartCounter, CartCounterSpan}