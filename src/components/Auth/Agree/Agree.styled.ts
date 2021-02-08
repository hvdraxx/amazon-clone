import styled from 'styled-components'

interface pathProp {
  path: string
}

const AgreeText = styled.p<pathProp>`
  margin: ${props => props.path === 'signin' ? '20px 0' : '18px 0'};
  padding: ${props => props.path === 'signin' ? '0 26px' : '0 18px'};
  font-size: 12px;
  line-height: 1.5;
`
const AgreeLink = styled.a`
  display: inline;
  border: none;
  outline: none;
  color: #0066C0;
  background-color: transparent;

  &:hover {
    color: #C45500;
    text-decoration: underline;
    cursor: pointer;
  }

  &:focus {
    box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%)
  }
`

export {AgreeText, AgreeLink}