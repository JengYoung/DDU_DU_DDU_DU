import React from 'react';

import { Form, Button } from 'antd';
import styled from 'styled-components';

export function InputForm({ Input, onSubmit }) {
  return (
    <InputForm.Container>
      <InputForm.InputContainer>{Input}</InputForm.InputContainer>

      <InputForm.ButtonContainer>
        <InputForm.Button onClick={onSubmit} htmlType="submit">
          만들기
        </InputForm.Button>
      </InputForm.ButtonContainer>
    </InputForm.Container>
  );
}

InputForm.Container = styled(Form)`
  display: flex;
  align-items: center;

  width: 100%;
`;

InputForm.InputContainer = styled(Form.Item)`
  flex: 1;
  margin: 0;
  margin-right: 10px;
`;

InputForm.ButtonContainer = styled(Form.Item)`
  height: 40px;
  margin: 0;

  .ant-col.ant-form-item-control {
    height: 100%;

    .ant-form-item-control-input {
      height: 100%;

      .ant-form-item-control-input-content {
        height: 100%;
      }
    }
  }
`;

InputForm.Button = styled(Button)`
  height: 100%;
  border-radius: 10px;
`;
