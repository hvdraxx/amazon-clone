import React from 'react'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import { SecondLine } from '../Navbar/Navbar.styled'
import { Container, IconContainer, TextContainer, FirstLineGray } from './DeliverTo.styled'


function DeliverTo() {
  return (
    <Container>
      <IconContainer>
        <LocationOnOutlinedIcon />
      </IconContainer>
      <TextContainer>
        <FirstLineGray>
          Deliver to
        </FirstLineGray>
        <SecondLine>
          Russian Federation
        </SecondLine>
      </TextContainer>
    </Container>
  )
}

export default DeliverTo
