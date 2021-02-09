import styled from 'styled-components'

interface addedProp {
  readonly added: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 10px;
  padding: 30px 20px 20px 20px;
  width: 100%;
  height: auto;
  background-color: #fff;
  z-index: 1;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0 0 10px 0 rgba(122, 122, 122, 0.6);
  }
`
export const Image = styled.img`
  max-height: 200px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 5px;
`
export const Info = styled.div`
  width: 100%;
  margin-bottom: 15px;
`
export const Title = styled.h3`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: normal;
`
export const Rating = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 12px;
`
export const RatingStars = styled.span`
  font-size: 11px;
`
export const RatingQuantity = styled.span`
  margin-left: 4px;
  font-size: 14px;
  line-height: 0.85;
  color: #007185;
`
export const Price = styled.p`
  display: flex;
  align-items: flex-start;
  margin-bottom: 16px;
`
export const PriceSmall = styled.span`
  margin: 0 1px;
  font-size: 12px;
  color: #0f1111;

  &:first-of-type {
    line-height: 1.3;
  }
`
export const PriceLarge = styled.span`
  font-size: 21px;
  line-height: 0.85;
  color: #0f1111;
`
export const ShipsTo = styled.p`
  font-size: 12px;
  color: #565959;
`
export const Button = styled.button<addedProp>`
  display: flex;
  align-items: center;
  border: 1px solid;
  border-color: ${props => props.added ? '#2F3841' : '#a88734 #9c7e31 #846a29'};
  border-radius: 2px;
  outline: none;
  margin-top: 10px;
  padding: 2px;
  width: 100%;
  background-color: ${props => props.added ? '#2F3841' : '#F0C14B'};
  color: #111;
  cursor: pointer;
`
export const ButtonIcon = styled.div`
  padding: 3px 2px 0 2px;
  border-radius: 2px;
  color: white;
  background-color: #2F3841;
`
export const ButtonText = styled.p<addedProp>`
  width: 100%;
  text-align: center;
  color: ${props => props.added ? 'white' : 'black'};
`