import React from 'react'
import { connect } from 'react-redux'
import { addItem, removeItem } from '../../../redux/actions/cartActions';
import { ProductProps, mapStateType } from '../../../types';
import { convertStars, numberWithCommas } from '../../../utils/utils';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { 
  Button,
  Container,
  Image,
  Info,
  Rating,
  RatingStars,
  Title,
  ButtonIcon,
  ButtonText,
  RatingQuantity,
  PriceSmall,
  PriceLarge,
  Price,
  ShipsTo 
} from './Product.styled'

function Product({
  id, 
  title, 
  price, 
  rating, 
  image, 
  items, 
  addItem, 
  removeItem
}: ProductProps) {

  const item = { title, price, image, quantity: 1}

  const isItemAdded = items.hasOwnProperty(id);

  return (
    <Container>
      <div>
        <Image src={image}/>

        <Info>
          <Title>{title}</Title>

          <Rating>
              <RatingStars>
                {convertStars(rating.stars)}
              </RatingStars>
            <RatingQuantity>{numberWithCommas(rating.quantity)}</RatingQuantity>
          </Rating>

          <Price>
            <PriceSmall>$</PriceSmall>
            <PriceLarge>{numberWithCommas(price.whole)}</PriceLarge>
            <PriceSmall>{price.fraction}</PriceSmall>
          </Price>

          <ShipsTo>
            Ships to Russian Federation
          </ShipsTo>

        </Info>
      </div>

      <Button 
        added={isItemAdded} 
        onClick={() => {
          isItemAdded ? removeItem(id) : addItem(id, item)
        }}>

        <ButtonIcon>
          <ShoppingCartIcon style={{ fontSize: 20}}/>
        </ButtonIcon>
        
        <ButtonText added={isItemAdded}>
          {isItemAdded ? 'Remove from Cart' : 'Add to Cart'}
        </ButtonText>

      </Button>

    </Container>
  )
}

const mapStateToProps = (state: mapStateType) => {
  return {
    items: state.cart!.items
  }
}

export default connect(mapStateToProps, {addItem, removeItem})(Product)