import React from 'react'
import Product from './Product/Product'
import { Banner, Container, Row } from './Home.styled'

function Home() {
  return (
    <Container>
      <Banner src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' />

      <Row>
        <Product
          id={285729013}
          title={'BEBONCOOL PS4 Controller Charger, Controller USB Charging Station Dock for DualShock 4, PlayStation 4 Charging Station for Sony Playstation4 / PS4 / PS4 Slim / PS4 Pro Controller-Black'}
          price={{whole: 11, fraction: 39}}
          rating={{stars: 2, quantity: 33982}}
          image={'https://images-na.ssl-images-amazon.com/images/I/81UWP87LpwL._AC_SL1500_.jpg'}
        />
        <Product 
          id={592019448}
          title={'HP 63 | Ink Cartridge | Black | F6U62AN'}
          price={{whole: 20, fraction: 89}}
          rating={{stars: 4, quantity: 4231}}
          image={'https://images-na.ssl-images-amazon.com/images/I/71qZHCfiDWL._AC_SL1500_.jpg'}
        />
        <Product 
          id={149623001}
          title={'AMD Ryzen 5 3600 6-Core, 12-Thread Unlocked Desktop Processor with Wraith Stealth Cooler'}
          price={{whole: 199, fraction: 99}}
          rating={{stars: 5, quantity: 12558}}
          image={'https://images-na.ssl-images-amazon.com/images/I/71WPGXQLcLL._AC_SL1384_.jpg'}
        />
        <Product 
          id={149928101}
          title={'Pokemon Battle Figure Multi 8 Pack, Featuring 2" Cyndaquil, 2" Chikorita, 2" Totodile, 2" Pikachu, 2" Eevee, 2" Ditto, 3" Haunter, 3" Marowak Battle Pack Toys, Gotta Catch ‘Em All'}
          price={{whole: 29, fraction: 99}}
          rating={{stars: 4, quantity: 2951}}
          image={'https://images-na.ssl-images-amazon.com/images/I/713svlsN0VL._AC_SL1500_.jpg'}
        />
      </Row>

      <Row>
        <Product 
          id={530421859}
          title={'HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort'}
          price={{whole: 164, fraction: 99}}
          rating={{stars: 3, quantity: 8184}}
          image={'https://images-na.ssl-images-amazon.com/images/I/91fAU6mxFsL._AC_SL1500_.jpg'}
        />
        <Product 
          id={468723691}
          title={'Spalding NBA Street Outdoor Basketball'}
          price={{whole: 17, fraction: 99}}
          rating={{stars: 5, quantity: 21351}}
          image={'https://images-na.ssl-images-amazon.com/images/I/91PlxEj64%2BL._AC_SL1500_.jpg'}
        />
        <Product 
          id={147569837}
          title={'MorePro Fitness Tracker with Body Temperature Sleep Monitor, Health Tracker with Blood Pressure Heart Rate Monitor, Multiple Sports Mode Step Calorie Counter, Perfect Tech Gift for Kids Women Men'}
          price={{whole: 31, fraction: 99}}
          rating={{stars: 1, quantity: 142}}
          image={'https://images-na.ssl-images-amazon.com/images/I/61SzxA7K8YL._AC_SL1500_.jpg'}
        />
        <Product 
          id={125096378}
          title={'Laura Ashley Home | Annalise Collection | Comforter Set-All Season Bedding, Luxury Ultra Soft, Stylish Delicate Design for Home Décor, King, Shadow Grey'}
          price={{whole: 142, fraction: 49}}
          rating={{stars: 4, quantity: 3541}}
          image={'https://images-na.ssl-images-amazon.com/images/I/71XrUp9kRUL._AC_SL1024_.jpg'}
        />
      </Row>

      <Row>
        <Product 
          id={394910502}
          title={'CeraVe Hydrating Facial Cleanser | Moisturizing Non-Foaming Face Wash with Hyaluronic Acid, Ceramides & Glycerin | 16 Fluid Ounce'}
          price={{whole: 14, fraction: 64}}
          rating={{stars: 5, quantity: 9521}}
          image={'https://images-na.ssl-images-amazon.com/images/I/51DbQev1thL._SL1000_.jpg'}
        />
        <Product 
          id={294901025}
          title={'Philips Norelco MG3750 Multigroom All-In-One Series 3000, 13 attachment trimmer'}
          price={{whole: 19, fraction: 95}}
          rating={{stars: 4, quantity: 16341}}
          image={'https://images-na.ssl-images-amazon.com/images/I/91qmPJKT87L._SL1500_.jpg'}
        />
        <Product 
          id={302485107}
          title={'ESTINHOME Melting Wax Aromatherapy Lamp Bulb Heating Candle Wax Melting Device, Hardware Refreshing Wax Block Melting Device, with Wax Block Suitable for Living Room, Bedroom, Study, Gifts, Etc.'}
          price={{whole: 20, fraction: 99}}
          rating={{stars: 2, quantity: 348}}
          image={'https://images-na.ssl-images-amazon.com/images/I/81inFrYd2yL._AC_SL1500_.jpg'}
        />
        <Product 
          id={364109855}
          title={'Corsair Vengeance RGB PRO 16GB (2x8GB) DDR4 3200MHz C16 LED Desktop Memory - Black (CMW16GX4M2C3200C16)'}
          price={{whole: 104, fraction: 99}}
          rating={{stars: 5, quantity: 27345}}
          image={'https://images-na.ssl-images-amazon.com/images/I/71Kkm5nIRKL._AC_SL1500_.jpg'}
        />
      </Row>

    </Container>
  )
}

export default Home
