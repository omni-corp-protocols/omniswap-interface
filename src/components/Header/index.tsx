import { ChainId, Blockchain } from '@venomswap/sdk'
import React from 'react'
import { ExternalLink } from 'react-external-link'
import { darken } from 'polished'

import styled from 'styled-components'

import ViperLogo from '../../assets/svg/viperswap/black.svg'
import ViperLogoDark from '../../assets/svg/viperswap/white.svg'
import OcpLogo from '../../assets/images/ocp-logo.png'
import { useActiveWeb3React } from '../../hooks'
import { useDarkModeManager } from '../../state/user/hooks'

import { YellowCard } from '../Card'

import Row, { RowFixed } from '../Row'
import Web3Status from '../Web3Status'
import { BLOCKCHAIN } from '../../connectors'

const HeaderFrame = styled.div`
  background: #37363f !important;
  display: grid;
  grid-template-columns: 1fr 120px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 0;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 1rem;
  z-index: 2;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    grid-template-columns: 1fr;
    padding: 0 1rem;
    width: calc(100%);
    position: relative;
  `};

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
        padding: 0.5rem 1rem;
  `}
`

const HeaderControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-self: flex-end;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    flex-direction: row;
    justify-content: space-between;
    justify-self: center;
    width: 100%;
    max-width: 960px;
    padding: 1rem;
    position: fixed;
    bottom: 0px;
    left: 0px;
    width: 100%;
    z-index: 99;
    height: 72px;
    border-radius: 12px 12px 0 0;
    background-color: ${({ theme }) => theme.bg1};
  `};
`

const HeaderElement = styled.div`
  display: flex;
  align-items: center;

  /* addresses safari's lack of support for "gap" */
  & > *:not(:first-child) {
    margin-left: 8px;
  }

  ${({ theme }) => theme.mediaWidth.upToMedium`
   flex-direction: row-reverse;
    align-items: center;
  `};
`

const HeaderRow = styled(RowFixed)`
  ${({ theme }) => theme.mediaWidth.upToMedium`
   width: 100%;
   margin: auto;
  `};
`

const HeaderLinks = styled(Row)`
  justify-content: center;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 1rem 0 1rem 1rem;
    justify-content: flex-end;
`};
`

const AccountElement = styled.div<{ active: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, active }) => (!active ? theme.bg1 : theme.bg3)};
  color: white;
  border-radius: 12px;
  white-space: nowrap;
  width: 100%;
  cursor: pointer;

  :focus {
    border: 1px solid blue;
  }
`

const HideSmall = styled.span`
  ${({ theme }) => theme.mediaWidth.upToSmall`
    display: none;
  `};
`

const NetworkCard = styled(YellowCard)`
  border-radius: 12px;
  padding: 8px 12px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    margin: 0;
    margin-right: 0.5rem;
    width: initial;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-shrink: 1;
  `};
`

const Title = styled.a`
  display: flex;
  align-items: center;
  pointer-events: auto;
  justify-self: flex-start;
  margin-right: 12px;
  ${({ theme }) => theme.mediaWidth.upToSmall`
    justify-self: center;
  `};
  :hover {
    cursor: pointer;
  }
`

const UniIcon = styled.div`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
`

const activeClassName = 'ACTIVE'

const StyledExternalLink = styled(ExternalLink).attrs({
  activeClassName
})<{ isActive?: boolean }>`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: center;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.white};
  font-size: 1rem;
  width: fit-content;
  margin: 0 12px;
  font-weight: 550;

  &.${activeClassName} {
    border-radius: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.white};
    background: rgb(135, 134, 140);
    padding: 0.6rem 2.5rem;
    border-radius: 4px;
  }

  :hover,
  :focus {
    color: ${({ theme }) => darken(0.1, theme.white)};
  }

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
      display: none;
`}
`

export const StyledMenuButton = styled.button`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  margin: 0;
  padding: 0;
  height: 35px;
  background-color: ${({ theme }) => theme.bg3};
  margin-left: 8px;
  padding: 0.15rem 0.5rem;
  border-radius: 0.5rem;

  :hover,
  :focus {
    cursor: pointer;
    outline: none;
    background-color: ${({ theme }) => theme.bg4};
  }

  svg {
    margin-top: 2px;
  }
  > * {
    stroke: ${({ theme }) => theme.text1};
  }
`

const NETWORK_LABELS: { [chainId in ChainId]?: string } = {
  [ChainId.RINKEBY]: 'Rinkeby',
  [ChainId.ROPSTEN]: 'Ropsten',
  [ChainId.GÖRLI]: 'Görli',
  [ChainId.KOVAN]: 'Kovan'
}

export default function Header() {
  const { account, chainId } = useActiveWeb3React()

  let logoDark: string
  let logo: string

  switch (BLOCKCHAIN) {
    case Blockchain.BINANCE_SMART_CHAIN:
      logoDark = OcpLogo
      logo = OcpLogo
      break
    case Blockchain.HARMONY:
      logoDark = ViperLogoDark
      logo = ViperLogo
      break
    default:
      logoDark = ViperLogoDark
      logo = ViperLogo
      break
  }

  const [darkMode] = useDarkModeManager()

  return (
    <HeaderFrame>
      <HeaderRow style={{ margin: 'auto' }}>
        <Title href=".">
          <UniIcon>
            <a href="https://ocp.finance" target="_blank" rel="noreferrer">
              <img width={'48px'} src={darkMode ? logoDark : logo} alt="logo" />
            </a>
          </UniIcon>
        </Title>
        <HeaderLinks>
          <StyledExternalLink href="https://app.ocp.finance" target="_self">
            VAULT
          </StyledExternalLink>
          <StyledExternalLink href="https://steaks.ocp.finance" target="_self">
            AUTOCOMPOUNDING
          </StyledExternalLink>
          <StyledExternalLink href="https://app.ocp.finance/#/trade" target="_self">
            TRADE
          </StyledExternalLink>
          <StyledExternalLink id={`active-nav-link`} className="ACTIVE" href="https://swap.ocp.finance" target="_self">
            SWAP
          </StyledExternalLink>
          <StyledExternalLink href="https://app.ocp.finance/#/farms" target="_self">
            FARMS
          </StyledExternalLink>
          <StyledExternalLink href="https://app.ocp.finance/#/comp" target="_self">
            LEGACY
          </StyledExternalLink>
        </HeaderLinks>
      </HeaderRow>
      <HeaderControls>
        <HeaderElement>
          <HideSmall>
            {chainId && NETWORK_LABELS[chainId] && (
              <NetworkCard title={NETWORK_LABELS[chainId]}>{NETWORK_LABELS[chainId]}</NetworkCard>
            )}
          </HideSmall>
          <AccountElement active={!!account} style={{ pointerEvents: 'auto' }}>
            <Web3Status />
          </AccountElement>
        </HeaderElement>
      </HeaderControls>
    </HeaderFrame>
  )
}
