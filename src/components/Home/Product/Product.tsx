import React from 'react'
import { connect } from 'react-redux'
import { Button, Container, Image, Info, Price, Rating, Title, ButtonIcon, ButtonText } from './Product.styled'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { addItem, removeItem } from '../../../redux/actions/cartActions';
import { ProductProps, mapStateType } from '../../../types';


function Product({id, title, price, rating, image, items, addItem, removeItem}: ProductProps) {

  const item = { title, price, image, quantity: 1}

  return (
    <Container>
      <Info>
        <Title>{title}</Title>
        <Price>
          <small>$</small>
          <strong>{price}</strong>
        </Price>
        <Rating>
          {Array(rating).fill('⭐').map((i, index) => (
            <span key={`${title}__star-${index}`}>
              {i}
            </span>
          ))}
        </Rating>
      </Info>

      <Image src={image}/>

        {items.hasOwnProperty(id) ? 
          <Button added onClick={() => {removeItem(id)}}>
            <ButtonIcon>
             <ShoppingCartIcon style={{ fontSize: 20}}/>
            </ButtonIcon>
            <ButtonText added>
              Remove from Cart
            </ButtonText>
          </Button>

        :
          <Button added={false} onClick={() => {addItem(id, item)}}>
            <ButtonIcon>
             <ShoppingCartIcon style={{ fontSize: 20}}/>
            </ButtonIcon>
            <ButtonText added={false}>
              Add to Cart
            </ButtonText>
          </Button>
        }
    </Container>
  )
}

const mapStateToProps = (state: mapStateType) => {
  return {
    items: state.cart!.items
  }
}

export default connect(mapStateToProps, {addItem, removeItem})(Product)
