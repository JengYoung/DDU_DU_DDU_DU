import styled from 'styled-components';

const TodoCard = styled.div`
  width: 300px;
  height: 120px;

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
  color: '#333';
`;

const Description = styled.p`
  color: '#333';
`;

export { TodoCard, Title, Description };
