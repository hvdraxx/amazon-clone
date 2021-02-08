import React from 'react'
import { Link } from 'react-router-dom'
import { NewToAmazonProps } from '../../../types'
import { NewToAmazonBlock, NewToAmazonText, CreateAccountButton } from './NewToAmazon.styled'

function NewToAmazon({clearError }: NewToAmazonProps) {
  return (
    <React.Fragment>
      <NewToAmazonBlock>
        <NewToAmazonText>
          New to Amazon?
        </NewToAmazonText>
      </NewToAmazonBlock>

      <Link to='./signup' tabIndex={-1} onClick={() => {clearError('')}}>
              <CreateAccountButton value='Create your Amazon account' type='button' />
      </Link>
    </React.Fragment>
  )
}

export default NewToAmazon
