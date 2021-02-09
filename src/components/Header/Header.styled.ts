import styled from 'styled-components'

export const Container = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 1500px;
  height: 60px;
  padding: 0 18px;
  background-color: #131921;
  z-index: 99;
`
export const Logo = styled.div`
  width: 113px;
  height: 50px;
  padding: 10px 7px 0 7px;
  border: 1px solid transparent;
  border-radius: 2px;

  &:hover {
    border: 1px solid white;
  }
`
export const LogoImg = styled.img`
  width: 100%;
`