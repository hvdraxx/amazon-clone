import React from 'react'
import { connect } from 'react-redux'
import { clearItems } from '../../../redux/actions/cartActions' 
import { CartTotalProps, mapStateType } from '../../../types';
import { numberWithCommas } from '../../../utils/utils';
import { 
  Checkbox,
  Container,
  ContainerCheckbox,
  Proceed,
  TotalText,
  ClearCart } 
from './CartTotal.styled'

function CartTotal({ items, clearItems }: CartTotalProps) {

  let totalPrice = 0;
  Object.entries(items).map(([key, prop]) => (
    totalPrice += prop.quantity * (prop.price.whole + (Number.parseFloat((0.01 * prop.price.fraction).toFixed(2))))
  ))
  
  let totalItems = 0;
  Object.entries(items).map(([key, prop]) => (
    totalItems += prop.quantity
  ))

  return (
    <Container>

      <TotalText>
        Subtotal ({totalItems} {totalItems === 1 ? `item` : `items`}):
        <strong> ${numberWithCommas(Number.parseFloat(totalPrice.toFixed(2)))}</strong>
      </TotalText>

      <ContainerCheckbox>
        <Checkbox type='checkbox' id='checkbox__checkout'/>
          <label htmlFor='checkbox__checkout'>This order contains a gift</label>
      </ContainerCheckbox>

      <Proceed added={false}>
        Proceed to checkout
      </Proceed>

      <ClearCart 
        value='Clear your cart' 
        type='button'
        onClick={() => {clearItems()}}
      />

    </Container>
  )
}

const mapStateToProps = (state: mapStateType) => {
  return {
    items: state.cart!.items
  }
}

export default connect(mapStateToProps, { clearItems })(CartTotal)
