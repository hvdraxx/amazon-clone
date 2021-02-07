import styled from 'styled-components'

const Container = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 1500px;
  height: 60px;
  background-color: #131921;
  z-index: 99;
`
const Logo = styled.div`
  width: 113px;
  height: 50px;
  margin: 0 0 0 18px;
  padding: 10px 8px 0 8px;
  border: 1px solid transparent;
  border-radius: 2px;

  &:hover {
    border: 1px solid white;
  }
`
const LogoImg = styled.img`
  width: 100%;
  object-fit: contain;
`

export {Container, Logo, LogoImg}