import styled from 'styled-components'

const NewToAmazonBlock = styled.div`
  position: relative;
  width: 350px;
  margin-bottom: 12px;
  text-align: center;
  color: #767676;

  &::after {
    content: '';
    position: absolute;
    top: 55%;
    display: block;
    width: 100%;
    height: 1px;
    border-top: 1px solid #e7e7e7;
    background-color: transparent;
    z-index: 1;
  }
`
const NewToAmazonText = styled.p`
  position: relative;
  display: inline-block;
  padding: 0 8px;
  font-size: 12px;
  line-height: 1;
  background-color: #fff;
  z-index: 2;
`
const CreateAccountButton = styled.input`
  width: 350px;
  height: 30px;
  margin-bottom: 24px;
  border: 1px solid;
  border-color: #adb1b8 #a2a6ac #8d9096;
  border-radius: 3px;
  outline: none;
  font-size: 13px;
  color: #111;
  background: linear-gradient(to bottom, #f7f8fa, #e7e9ec);
  cursor: pointer;

  &:hover {
    background: #DCDFE3;
  }

  &:focus {
    border-color: #E77600;
    box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%)
  }
`

export { NewToAmazonBlock, NewToAmazonText, CreateAccountButton }