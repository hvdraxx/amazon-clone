import React from 'react'
import { Container, NavLinks, FirstLine, SecondLine, CartLink, CartCounter, CartCounterSpan } from './Navbar.styled'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Navbar({items}) {
  return (
    <Container>
      <NavLinks>
        <FirstLine>Hello, Sign In</FirstLine>
        <SecondLine>Account & Lists</SecondLine>
      </NavLinks> 

      <NavLinks>
        <FirstLine>Returns</FirstLine>
        <SecondLine>& Orders</SecondLine>
      </NavLinks>

      <NavLinks>
        <FirstLine>Your</FirstLine>
        <SecondLine>Prime</SecondLine>
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

const MapStateToProps = (state) => {
  return {
    items: state.cart.items
  }
}

export default connect(MapStateToProps, null)(Navbar)
