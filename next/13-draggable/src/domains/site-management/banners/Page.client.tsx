import React from 'react'
import { Container } from './Page.styles'
import { List } from './List'

export const Page = ({ ...props }: any) => {
  return (
    <Container>
      <List data={props.data}/>
    </Container>
  )
}
