import React from 'react'
import { Container, NavLinks, FirstLine, SecondLine, CartLink, CartCounter, CartCounterSpan } from './Navbar.styled'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase';
import { mapStateType, NavbarProps } from '../../../types';

function Navbar({items, user}: NavbarProps) {

  let isUserLogged = Object.keys(user).length !== 0 ? true : false

  const logout = () => {
    let decision = window.confirm('Are you sure want to log out?')
    if (decision) auth.signOut() 
  }

  return (
    <Container>

      <Link to={!isUserLogged ? '/auth/signin' : ''}>
        <NavLinks onClick={isUserLogged ? logout : undefined}>
          <FirstLine>Hello, {isUserLogged ? user?.displayName : `Log In`}</FirstLine>
          <SecondLine>{isUserLogged ? `Log Out` : `Account & Lists`}</SecondLine>
        </NavLinks> 
      </Link>

      <NavLinks>
        <FirstLine>Returns</FirstLine>
        <SecondLine>& Orders</SecondLine>
      </NavLinks>
      
      <Link to='/cart'>
        <CartLink>
          <ShoppingCartIcon />
          <CartCounter>
            <CartCounterSpan>
              {Object.keys(items).length}
            </CartCounterSpan>
          </CartCounter>
        </CartLink>
      </Link>

    </Container>
  )
}

const MapStateToProps = (state: mapStateType) => {
  return {
    items: state.cart!.items,
    user: state.auth!.user
  }
}

export default connect(MapStateToProps, null)(Navbar)
