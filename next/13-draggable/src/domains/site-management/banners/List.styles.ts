"use client";

import { css, styled } from "styled-components";

export const List = styled.ul<{ vertical?: boolean }>`
  display: flex;
  flex-direction: ${props => props.vertical ? 'column' : 'row'};
  align-items: center;
`

export const DropCard = styled.li<{ vertical?: boolean }>`
  flex-shrink: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 240px;
  height: 160px;

  border: 1px solid #BEBEBE;
  border-radius: 20px;
  border-style: dashed;

  color: #BEBEBE;
  font-weight: 700;

  ${(props) => props.vertical ? css`
    margin-top: 64px;
  ` : css`
    margin-left: 32px;
  `}

  &:hover {
    border-style: none;
    background-color: #DDDDDD;
  }
`