import styled from 'styled-components';

export const Block = styled.div<{ width?: string; height?: string; full?: boolean }>`
  width: ${({ width }) => width ?? 'auto'};
  height: ${({ height }) => height ?? 'auto'};
`;
