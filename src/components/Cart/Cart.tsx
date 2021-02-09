import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import EmptyCart from './EmptyCart/EmptyCart'
import CartItems from './CartItems/CartItems'
import CartTotal from './CartTotal/CartTotal'
import { CartProps, mapStateType } from '../../types'
import { Container, Wrapper } from './Cart.styled'

function Cart({items}: CartProps) {

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
            <CartItems items={{}}/>
            <CartTotal />
          </>
        }
      </Container>
    </Wrapper>
  )
}

const mapStateToProps = (state: mapStateType) => {
  return {
    items: state.cart!.items
  }
}

export default connect(mapStateToProps)(Cart)
