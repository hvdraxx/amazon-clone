import styled from 'styled-components'

interface notAllowedProp {
  notAllowed: boolean
}

interface ConfirmButtonProp {
  primary: boolean
}

export const Container = styled.nav`
  position: relate;
  display: flex;
  justify-content: space-between;
  width: 280px;
`
export const NavLinks = styled.div<notAllowedProp>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 8px 8px;
  border: 1px solid transparent;
  color: white;
  user-select: none;

  &:hover {
    border: 1px solid white;
    border-radius: 2px;
    cursor: ${props => props.notAllowed ? 'not-allowed' : 'pointer'}
  }
`
export const ConfirmSignOut = styled.div`
  position: absolute;
  top: 70px;
  right: 85px;
  width: 330px;
  height: 90px;
  padding: 14px 0 0 55px;
  border: 1px solid #F59A33;
  border-radius: 3px;
  color: #fff;
  background-color: #131921;
  box-shadow: inset 3px 3px 0 rgb(245 154 51 / 25%), inset -3px -3px 0 rgb(245 154 51 / 25%);

  &::before {
    content: '';
    position: absolute;
    top: -16px;
    left: 156px;
    width: 0; 
    height: 0; 
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid #F59A33;
  }
`
export const ConfirmButton = styled.button<ConfirmButtonProp>`
  width: 35%;
  margin-top: 10px;
  padding: 4px 0;
  border: 1px solid;
  border-radius: 2px;
  border-color: ${props => props.primary ? '#FFA841' : 'gray'};
  outline: none;
  color: ${props => props.primary ? 'black' : '#969696'};
  background-color: ${props => props.primary ? '#F59A33' : '#E1E1E1'};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: ${props => props.primary ? 'black' : '#666666'};
    background-color: ${props => props.primary ? '#FFB750' : '#C1C1C1'};
  }

  &:first-of-type {
    margin-right: 50px;
  }
`
export const FirstLine = styled.span`
  font-size: 12px;
`
export const SecondLine = styled.span`
  font-size: 14px;
  font-weight: 700;
`
export const CartLink = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 8px 8px;
  border: 1px solid transparent;
  color: white;
  cursor: pointer;

  &:hover {
    border: 1px solid white;
    border-radius: 2px;
  }

`
export const CartCounter = styled(SecondLine)`
  margin-left: 8px;
`
export const CartCounterSpan = styled.span`
  font-size: 20px;
  color: #F19834;
`