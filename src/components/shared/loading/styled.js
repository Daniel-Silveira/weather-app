import styled, { css } from 'styled-components'

export const Container = styled.View`
  ${({ center }) =>
    center &&
    css`
      flex: 1;
      justify-content: center;
      align-items: center;
    `}
`
