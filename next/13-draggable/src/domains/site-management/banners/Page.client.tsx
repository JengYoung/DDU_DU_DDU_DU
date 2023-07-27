import React from 'react'
import { Container } from './Page.styles'

export const Page = ({ ...props }: any) => {
  return (
    <Container>{JSON.stringify(props?.data)}</Container>
  )
}
