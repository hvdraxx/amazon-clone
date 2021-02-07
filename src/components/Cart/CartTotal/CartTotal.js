import React from 'react'
import CurrencyFormat from 'react-currency-format'
import { connect } from 'react-redux'
import { Checkbox, Container, ContainerCheckbox, Proceed, TotalText } from './CartTotal.styled'

function CartTotal({ items }) {

  let totalPrice = 0;
  let totalItems = 0;
  Object.entries(items).map(([key, prop]) => (
    totalPrice += prop.quantity * prop.price
  ))
  Object.entries(items).map(([key, prop]) => (
    totalItems += prop.quantity
  ))

  console.log(`$ >>> ${totalPrice} || @ >>> ${totalItems}`)



  return (
    <Container>
      <CurrencyFormat 
        renderText={(value) => (
          <>
            <TotalText>
              Subtotal ({totalItems} {totalItems === 1 ? `item` : `items`}):
              <strong> {value}</strong>
            </TotalText>
            <ContainerCheckbox>
              <Checkbox type='checkbox' id='checkbox__checkout'/>
                <label htmlFor='checkbox__checkout'>This order contains a gift</label>
            </ContainerCheckbox>
          </>
        )}
        decimalScale={2}
        value={totalPrice.toFixed(2)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />

      <Proceed>
        Proceed to checkout
      </Proceed>
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    items: state.cart.items
  }
}

export default connect(mapStateToProps, null)(CartTotal)
