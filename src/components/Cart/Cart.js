import React, { useEffect, useState } from 'react'
import EmptyCart from './EmptyCart/EmptyCart'
import CartItems from './CartItems/CartItems'
import CartTotal from './CartTotal/CartTotal'
import { Container, Wrapper } from './Cart.styled'
import { connect } from 'react-redux'

function Cart({ items }) {

  const [isEmpty, setIsEmpty] = useState(true)

  useEffect(() => {
    setIsEmpty(!Boolean(Object.keys(items).length))
  }, [items, isEmpty])
  
  return (
    <Wrapper>
      <Container>
        {isEmpty ? 
          <EmptyCart />
        :
          <>
            <CartItems />
            <CartTotal />
          </>
        }
      </Container>
    </Wrapper>
  )
}

const mapStateToProps = state => {
  return {
    items: state.cart.items
  }
}

export default connect(mapStateToProps)(Cart)
