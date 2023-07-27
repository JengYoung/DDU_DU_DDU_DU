import React from 'react'
import { Container } from './Page.styles'
import { List } from './List.server'

export const Page = ({ ...props }: any) => {
  return (
    <Container>
      <List data={props.data}/>
    </Container>
  )
}
