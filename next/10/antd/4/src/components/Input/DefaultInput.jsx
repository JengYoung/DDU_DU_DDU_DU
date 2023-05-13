import { Input } from 'antd';
import React from 'react';
import styled from 'styled-components';

export function DefaultInput({ placeholder }) {
  return <DefaultInput.Style placeholder={placeholder} />;
}

DefaultInput.Style = styled(Input)`
  height: 40px;
  border-radius: 10px;
`;
