import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin: 10px;
  padding: 20px;
  width: 100%;
  min-width: 100px;
  max-height: 400px;
  background-color: #fff;
  z-index: 1;
`
const Info = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 15px;
`
const Title = styled.p``
const Price = styled.p`
  margin-top: 5px;

  & small {
    margin-right: 2px;
  }

  & strong {
    color: #B12704;
  }
`
const Rating = styled.div``
const Image = styled.img`
  max-height: 200px;
  width: 100%;
  object-fit: contain;
  margin-bottom: 15px;
`
const Button = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid;
  border-color: ${props => props.added ? '#2F3841' : '#a88734 #9c7e31 #846a29'};
  border-radius: 2px;
  outline: none;
  margin-top: 10px;
  padding: 2px;
  width: 200px;
  background-color: ${props => props.added ? '#2F3841' : '#F0C14B'};
  color: #111;
  cursor: pointer;
`
const ButtonIcon = styled.div`
  padding: 3px 2px 0 2px;
  border-radius: 2px;
  color: white;
  background-color: #2F3841;
`
const ButtonText = styled.p`
  width: 100%;
  text-align: center;
  color: ${props => props.added ? 'white' : 'black'};
`

export { Container, Info, Title, Price, Rating, Image, Button, ButtonIcon, ButtonText}