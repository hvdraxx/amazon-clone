import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Image, Text, LinkToHome } from './EmptyCart.styled'

function EmptyCart() {
  return (
    <Container>
      <Image  src='https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg' alt='Amazon Cart Is Emptry'/>
      <Text>
        <h2>Your Amazon Cart is empty</h2>
        <Link to='/'>
          <LinkToHome>
            Shop today's deals
          </LinkToHome>
        </Link>
      </Text>
    </Container>
  )
}

export default EmptyCart
