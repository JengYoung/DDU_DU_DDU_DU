"use client";

import { styled } from "styled-components";
import { TBannerResponse } from "./types";
import Image from "next/image";


export const Container = styled.li`
  overflow: hidden;
  position: relative;
  
  box-sizing: border-box;
  width: 240px;
  height: 160px;
  
  border: 1px solid #bebebe;
  border-radius: 20px;

  &::after {
    content: "";

    position: absolute;
    z-index: 0;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    
    background-color: rgba(0,0,0,0.5);

    &:hover {
      background-color: rgba(0,0,0,0.75);
    }
  }
`

export const Inner = styled.div`
  position: relative;
  z-index: 1;

  height: calc(100% - 40px);

  padding: 20px;
`

export const Title = styled.h1`
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: #fff;
`

export const Thumbnail = styled(Image)`
  position: absolute;
  z-index: -1;
  top: 0;
  display: block;
`

export const Text = styled.p<{ size?: string; marginTop?: string; }>`
  color: #FAFAFA;

  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-size: ${props => props.size};
  margin-top: ${props => props.marginTop};
`

export const Tag = styled.div<{ size?: string; marginTop?: string; }>`
  display: flex;
  justify-content: center;
  align-items: center;
  
  flex-shrink: 0;

  width: 48px;
  height: 24px;
  
  margin-top: ${props => props.marginTop};

  border-radius: 12px;
  background: #708DED;
`