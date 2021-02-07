import React from 'react'
import { Container, Logo, LogoImg } from './Header.styled'
import Search from './Search/Search'
import Navbar from './Navbar/Navbar'
import DeliverTo from './DeliverTo/DeliverTo'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <Container>
      <Link to='/'>
        <Logo>
          <LogoImg 
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png' 
            alt="Amazon's Logo"/>
        </Logo>
      </Link>

      <DeliverTo/>

      <Search />
      <Navbar />
    </Container>
  )
}

export default Header
