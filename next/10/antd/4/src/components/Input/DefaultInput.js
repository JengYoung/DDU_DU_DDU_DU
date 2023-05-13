import { Input } from 'antd';
import React from 'react';
import styled from 'styled-components';

export function DefaultInput() {
  return <DefaultInput.Style placeholder="Basic usage" />;
}

DefaultInput.Style = styled(Input)`
  background-color: black;
`;
