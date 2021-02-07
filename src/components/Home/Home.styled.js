import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  width: 1500px;
`
const Banner = styled.img.attrs(props => ({
  src: "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
}))`
  width: 100%;
  margin-bottom: -350px;
  z-index: -1;
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  )
`;

const Row = styled.div`
  display: flex;
  z-index: 1;
  margin: 0 5px;
`

export { Container, Banner, Row }