import React from 'react'
import { Card, List } from 'antd';
import styled from 'styled-components';

const baseGrid = {
  gutter: 20,
  xs: 1,
  sm: 2,
  md: 4,
  lg: 4,
  xl: 4,
  xxl: 4,
}

export function DefaultList({ grid = baseGrid, data, render }) {
  const listGrid = {
    ...baseGrid,
    ...grid
  }

  return (
    <DefaultList.Container
      grid={listGrid}
      dataSource={data}
      renderItem = {render}
    />
  )
}

DefaultList.Container = styled(List)`
  padding: 20px;
`;

DefaultList.Item = List.Item;
