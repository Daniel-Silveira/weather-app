import styled, { css } from "styled-components";

export const Text = styled.Text`
  color: #fff;
  ${({ title }) =>
    title &&
    css`
      font-size: 36px;
    `}
  ${({ subtitle }) =>
    subtitle &&
    css`
      font-size: 28px;
    `}
  ${({ medium }) =>
    medium &&
    css`
      font-size: 18px;
    `}
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
    ${({ width }) =>
    width &&
    css`
      width: ${width}%;
    `}
    ${({ black }) =>
    black &&
    css`
      color: #000;
    `}
`;
