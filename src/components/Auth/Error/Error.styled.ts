import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  margin-bottom: 14px;
  padding: 14px 18px 14px 60px;
  width: 350px;
  border: 1px solid #c40000;
  border-radius: 3px;
  box-shadow: inset 3px 3px 0 rgb(255 0 0 / 7%), inset -3px -3px 0 rgb(255 0 0 / 7%);
`
export const Icon = styled.div`
  position: absolute;
  top: 8px;
  left: 17px;

  & > * {
    color: #c40000;
  }
`
export const Heading = styled.h4`
  margin-bottom: 6px;
  font-size: 17px;
  font-weight: normal;
  color: #c40000;
`
export const Text = styled.p`
  font-size: 13px;
  color: #111;
`