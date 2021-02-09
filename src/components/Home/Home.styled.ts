import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  padding-bottom: 50px;
  width: 1500px;
`
export const Banner = styled.img`
  width: 100%;
  margin-bottom: -350px;
  z-index: -1;
  mask-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0)
  );
`

export const Row = styled.div`
  display: flex;
  margin: 0 5px;
  z-index: 1;
`