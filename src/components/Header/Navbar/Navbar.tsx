import React, { useState } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { auth } from '../../../firebase';
import { mapStateType, NavbarProps } from '../../../types';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import { 
  Container,
  NavLinks,
  FirstLine,
  SecondLine,
  CartLink,
  CartCounter,
  CartCounterSpan,
  ConfirmSignOut,
  ConfirmButton,
} from './Navbar.styled'
import { Icon } from '../../Auth/Error/Error.styled';

function Navbar({items, user}: NavbarProps) {

  const [signOutDecision, setSignOutDecision] = useState(false)

  let isUserLogged = Object.keys(user!).length !== 0 ? true : false

  return (
    <Container>
      
      <Link to={!isUserLogged ? '/auth/signin' : ''}>
        <NavLinks 
          onClick={isUserLogged ? () => {
              setSignOutDecision(!signOutDecision)} 
            : 
              undefined} 
          notAllowed={false}>

          <FirstLine>Hello, {isUserLogged ? user?.displayName : `Sign In`}</FirstLine>
          <SecondLine>{isUserLogged ? `Sign Out` : `Account & Lists`}</SecondLine>
          
        </NavLinks> 
      </Link>

      <NavLinks notAllowed>
        <FirstLine>Returns</FirstLine>
        <SecondLine>& Orders</SecondLine>
      </NavLinks>

      {signOutDecision && 
        <ConfirmSignOut>
          <Icon>
            <ErrorOutlineOutlinedIcon style={{ fontSize: 32, color: '#F59A33' }}/>
          </Icon>
          <p>
            Are you sure you want to sign out?
          </p>

          <ConfirmButton 
            primary={false} 
            onClick={() => {auth.signOut(); setSignOutDecision(false)}}>
              Yes
          </ConfirmButton>
          
          <ConfirmButton 
            primary 
            onClick={() => {setSignOutDecision(false)}}>
              No
          </ConfirmButton>

        </ConfirmSignOut>
      }
      
      <Link to='/cart'>
        <CartLink>
          <ShoppingCartIcon />
          <CartCounter>
            <CartCounterSpan>
              {Object.keys(items!).length}
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
