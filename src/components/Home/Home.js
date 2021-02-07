import React from 'react'
import { Banner, Container, Row } from './Home.styled'
import Product from './Product/Product'

function Home() {
  return (
    <Container>
      <Banner />

      <Row>
        <Product
          id={285729013}
          title={'The Lean Startup'}
          price={'29.99'}
          rating={4}
          image={'https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg'}
        />
        <Product 
          id={592019448}
          title={'HP 63 | Ink Cartridge | Black | F6U62AN'}
          price={'20.89'}
          rating={3}
          image={'https://images-na.ssl-images-amazon.com/images/I/71qZHCfiDWL._AC_SL1500_.jpg'}
        />
        <Product 
          id={149623001}
          title={'AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler'}
          price={'199.99'}
          rating={5}
          image={'https://images-na.ssl-images-amazon.com/images/I/71WPGXQLcLL._AC_SL1384_.jpg'}
        />
      </Row>
      <Row>
        <Product 
          id={530421859}
          title={'SAMSUNG LC34J791WTNXZA 34-Inch CJ791 Ultrawide Curved Gaming Monitor, White'}
          price={'279.99'}
          rating={1}
          image={'https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg'}
        />
      </Row>
      <Row>
        <Product 
          id={394910502}
          title={'CeraVe Hydrating Facial Cleanser | Moisturizing Non-Foaming Face Wash with Hyaluronic Acid, Ceramides & Glycerin | 16 Fluid Ounce'}
          price={'14.64'}
          rating={5}
          image={'https://images-na.ssl-images-amazon.com/images/I/51DbQev1thL._SL1000_.jpg'}
        />
        <Product 
          id={294901025}
          title={'Philips Norelco MG3750 Multigroom All-In-One Series 3000, 13 attachment trimmer'}
          price={'19.95'}
          rating={2}
          image={'https://images-na.ssl-images-amazon.com/images/I/91qmPJKT87L._SL1500_.jpg'}
        />
      </Row>

    </Container>
  )
}

export default Home
