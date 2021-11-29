import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Row from '../Row'
import { darken } from 'polished'
import { ExternalLink } from 'react-external-link'

const activeClassName = 'ACTIVE'

const StyledButton = styled(NavLink).attrs({
  activeClassName
})`
  border-radius: 4px;
  border: none;
  background: ${({ theme }) => theme.bg1};
  text-decoration: none;
  display: flex;
  width: fit-content;
  cursor: pointer;
  outline: none;
  padding: 0.5em 2em;
  margin: 0.5em 2em;

  &.${activeClassName} {
    font-weight: 600;
    color: ${({ theme }) => theme.text1};
  }

  :hover,
  :focus {
    color: ${({ theme }) => darken(0.1, theme.text1)};
  }
`

const StyledExternalLink = styled(ExternalLink)`
  border-radius: 4px;
  border: none;
  background: ${({ theme }) => theme.bg1};
  text-decoration: none;
  display: flex;
  width: fit-content;
  cursor: pointer;
  outline: none;
  padding: 0.5em 2em;
  margin: 0.5em 2em;

  :hover,
  :focus {
    color: ${({ theme }) => darken(0.1, theme.text1)};
  }
`

const CenteredRow = styled(Row)`
  display: flex;
  justify-content: center;
  width: fit-content;
`

export default function SwapMenu() {
  return (
    <CenteredRow>
      <StyledButton id={`swap-link`} to={'/swap'}>
        Swap
      </StyledButton>
      <StyledButton id={`pool-link`} to={'/pool'}>
        Pool
      </StyledButton>
      <StyledExternalLink href="https://app.ocp.finance/#/farms" target="_self" rel="noreferrer">
        Farms
      </StyledExternalLink>
    </CenteredRow>
  )
}
