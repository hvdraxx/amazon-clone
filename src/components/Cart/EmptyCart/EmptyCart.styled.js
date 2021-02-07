import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  width: 100%;
  padding-top: 75px;
  padding-bottom: 20px;
  background-color: #fff;
`
const Image = styled.img`
  height: 280px;
  width: 480px;
  margin-right: 20px;
`
const Text = styled.div`
  display: flex;
  flex-direction: column;

  & > h2 {
    margin-bottom: 8px;
  }
`
const LinkToHome = styled.p`
  font-size: 14px;
  color: #007185;

  &:hover {
    text-decoration: underline; 
  }
` 

export { Container, Image, Text, LinkToHome }