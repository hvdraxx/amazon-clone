import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import {quantityIncrement, quantityDecrement, removeItem, clearItems} from '../../../../redux/actions/cartActions'
import { CartItemProps } from '../../../../types';
import { numberWithCommas } from '../../../../utils/utils';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import {
  Item, 
  ImageWrapper,
  Image,
  Info, 
  Title,
  Stock,
  Gift, 
  Qty, 
  QtyBtn,
  QtyCounter,
  DeleteItem, 
  PriceValue
} 
from './CartItem.styled'

function CartItem({ 
  id,
  image,
  title,
  quantity,
  price,
  quantityIncrement,
  quantityDecrement,
  removeItem
}: CartItemProps) {

  const [isDecrementDisable, toggleDecrement] = useState(true)
  const [isIncrementDisable, toggleIncrement] = useState(true)

  useEffect(() => {
      if (quantity === 1) toggleDecrement(true)
      else toggleDecrement(false)
      
      if (quantity === 10) toggleIncrement(true)
      else toggleIncrement(false)
  }, [quantity])

  const handleClickDecrement = () => {
    if (quantity === 1) return
    else quantityDecrement(id)
  }

  const handleClickIncrement = () => {
    if (quantity === 10) return
    else quantityIncrement(id)
  }

  return (
    <Item>
      <ImageWrapper>
        <Image src={image}/>
      </ImageWrapper>
      
      <Info>
        <Title href='#'>{title}</Title>

        <Stock>In Stock</Stock>

        <Gift>
          <input type='checkbox' id={`cartItemGift__${id}`}/>
          <label htmlFor={`cartItemGift__${id}`}>This is a gift</label>
        </Gift>

        <Qty>
          <span>Quantity: </span>
          <QtyBtn onClick={handleClickDecrement} disabled={isDecrementDisable}>
            <KeyboardArrowLeftIcon/>
          </QtyBtn>

          <QtyCounter>
            {quantity}
          </QtyCounter>

          <QtyBtn onClick={handleClickIncrement} disabled={isIncrementDisable}>
            <KeyboardArrowRightIcon/>
          </QtyBtn>

          <DeleteItem onClick={() => {removeItem(id)}}>
            Delete
          </DeleteItem>
        </Qty>

      </Info>

      <PriceValue>
        {`$${numberWithCommas(price.whole)}.${price.fraction}`}
      </PriceValue>

    </Item>
  )
}

const mapDispathToProps = {
  quantityIncrement, 
  quantityDecrement, 
  removeItem
}

export default connect(null, mapDispathToProps)(CartItem)
