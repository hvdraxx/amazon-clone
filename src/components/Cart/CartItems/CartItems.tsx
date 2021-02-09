import React from 'react'
import { connect } from 'react-redux'
import CartItem from './CartItem/CartItem'
import { CartItemsProps, mapStateType } from '../../../types'
import {  Container, Title, TitlePrice } from './CartItems.styled'

function CartItems({ items }: CartItemsProps) {
  const mappedItems = Object.entries(items).map(([key, prop]) => (
      <CartItem 
        id={Number.parseInt(key)}
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

const mapStateToProps = (state: mapStateType) => {
  return {
    items: state.cart!.items
  }
}

export default connect(mapStateToProps, null)(CartItems)
