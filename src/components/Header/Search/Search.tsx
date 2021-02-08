import React from 'react'
import { Button, Container, Input } from './Search.styled'
import SearchIcon from '@material-ui/icons/Search';

function Search() {
  return (
    <Container>
      <Input />
      <Button onClick={(e) => {e.preventDefault()}}>
        <SearchIcon />
      </Button>
    </Container>
  )
}

export default Search
