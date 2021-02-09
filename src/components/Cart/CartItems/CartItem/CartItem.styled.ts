import styled from 'styled-components'

export const Item = styled.li`
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid lightgray;
`
export const ImageWrapper = styled.div`
  height: 180px;
  width: 180px;
  margin-right: 15px;
`
export const Image = styled.img`
  height: 180px;
  width: 180px;
  object-fit: contain;
`
export const Info = styled.div`
  width: 100%;
`
export const Title = styled.a`
  display: block;
  margin-bottom: 5px;
  max-width: 1060px;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.3;
  color: #007185;
  cursor: not-allowed;

  &:hover {
    color: #C7511F;
    text-decoration: underline;
  }
`
export const Stock = styled.p`
  margin-bottom: 5px;
  font-size: 12px;
  line-height: 1.5;
  color: #007600;
`
export const Gift = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-size: 12px;
  color: #0F1111;

  & > input {
    margin-right: 5px;
  }
`
export const Qty = styled.div`
  display: flex;
  align-items: center;
`
export const QtyBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 3px;
  border: none;
  border-radius: 50%;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-radius: 50%;
    background-color: lightgray;
    outline: none;
  }

  &:disabled&:hover {
    background-color: transparent;
    cursor: not-allowed;
  }
`
export const QtyCounter = styled.span`
  user-select: none;
`
export const DeleteItem = styled.button`
  margin-left: 5px;
  padding: 0 10px;
  border: none;
  border-left: 1px solid lightgray;
  border-right: 1px solid lightgray;
  outline: none;
  font-size: 12px;
  color: #007185;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
export const PriceValue = styled.p`
  font-size: 18px;
  font-weight: bold;
`