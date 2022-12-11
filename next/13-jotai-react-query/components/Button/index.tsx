import { borderWidth, borderRadius, flexCenter, pxPadding } from '@/styles/css/structures';
import React from 'react';
import { css } from 'styled-components';

interface ButtonPropsInterface {
  children: React.ReactNode;
  onClick: () => void;
}

const Skins = {
  container: css`
    cursor: pointer;
    transition: ${(props) => props.theme.effect.transition};

    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
    border-color: ${(props) => props.theme.colors.borderColor};

    &:hover {
      background-color: ${(props) => props.theme.colors.white};
      color: ${(props) => props.theme.colors.primary};
    }
  `,
};

const Button = ({ children, onClick }: ButtonPropsInterface) => {
  return (
    <button
      onClick={onClick}
      css={[
        borderWidth(),
        flexCenter,
        pxPadding([12, 16, 12, 16]),
        borderRadius(10),
        Skins.container,
      ]}
    >
      {children}
    </button>
  );
};

export default Button;
