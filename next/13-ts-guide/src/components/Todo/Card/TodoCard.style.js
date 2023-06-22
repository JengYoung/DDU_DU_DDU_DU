import styled from 'styled-components';

const TodoCard = styled.div`
  position: relative;

  width: 300px;
  height: 100px;

  padding: 20px;

  border: 1px solid #ddd;
  box-shadow: 0px 4px 8px 2px #ddd;
  border-radius: 20px;

  background-color: white;

  &:not(:last-of-type) {
    margin-bottom: 20px;
  }
`;

const Title = styled.h5`
  margin: 0;

  font-size: 24px;
  color: '#333';
`;

const Description = styled.p`
  margin: 16px 0 0 0;
  color: '#333';
`;

const EditButton = styled.button`
  cursor: pointer;

  width: 24px;
  height: 24px;

  margin-right: 4px;

  background-color: transparent;

  border: none;
  border-radius: 50%;

  transition: all 0.3s;

  &:hover {
    background-color: skyblue;
  }
`;
const Buttons = styled.div`
  position: absolute;
  z-index: 1;

  right: 20px;
  top: 20px;

  display: flex;
`;

const RemoveButton = styled.button`
  cursor: pointer;

  width: 24px;
  height: 24px;

  background-color: transparent;

  border: none;
  border-radius: 50%;

  transition: all 0.3s;

  &:hover {
    background-color: pink;
  }
`;

const EditInput = styled.input``;

const EditTextArea = styled.textarea`
  width: 100%;
  height: 54px;

  margin-top: 16px;
`;

const EditCancelButton = styled(RemoveButton)``;

export {
  TodoCard,
  Title,
  Description,
  Buttons,
  EditButton,
  EditCancelButton,
  RemoveButton,
  EditInput,
  EditTextArea,
};
