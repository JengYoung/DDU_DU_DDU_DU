import { Input } from 'antd';
import React from 'react';
import styled from 'styled-components';

export function DefaultInput({ value, placeholder, onChange }) {
  return <DefaultInput.Style value={value} onChange={onChange} placeholder={placeholder} />;
}

DefaultInput.Style = styled(Input)`
  height: 40px;
  border-radius: 10px;
`;
