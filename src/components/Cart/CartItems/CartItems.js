import React from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem/CartItem'
import {  Container, Title, TitlePrice } from './CartItems.styled'

function CartItems({ items }) {
  const mappedItems = Object.entries(items).map(([key, prop]) => (
      <CartItem 
        id={key}
        key={`cartItemKey__${key}`}
        image={prop.image}
        title={prop.title}
        quantity={prop.quantity}
        price={prop.price}
      />
    )
  )

  return (
    <Container>
          <Title>
            Shopping Cart
          </Title>
          <TitlePrice>
            Price
          </TitlePrice>
          {mappedItems}
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    items: state.cart.items
  }
}

export default connect(mapStateToProps, null)(CartItems)
