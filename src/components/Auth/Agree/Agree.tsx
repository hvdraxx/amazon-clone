import React from 'react'
import { AgreeProps } from '../../../types'
import { AgreeText, AgreeLink} from './Agree.styled'

function Agree({path}: AgreeProps) {
  return (
    <AgreeText path={path}>
      {path === 'signin' ? 'By continuing' : 'By creating an account' }, you agree to&nbsp;
        <AgreeLink href='#'>
          Amazon's Conditions of Use
        </AgreeLink>
        &nbsp;and&nbsp;
      <AgreeLink href='#'>
        Privacy Notice.
      </AgreeLink>
    </AgreeText>
  )
}

export default Agree
