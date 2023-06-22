import { styled } from 'styled-components';

const TodoList = styled.ul`
  padding: 0;
  margin: ${(props) => props.margin ?? 0};
`;

export { TodoList };
