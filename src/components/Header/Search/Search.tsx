import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import { Button, Container, Input } from './Search.styled'

function Search() {
  return (
    <Container>
      <Input disabled/>
      <Button onClick={(e) => {e.preventDefault()}}>
        <SearchIcon />
      </Button>
    </Container>
  )
}

export default Search
