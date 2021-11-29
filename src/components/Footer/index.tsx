// import { Blockchain } from '@venomswap/sdk'
import React, { useContext } from 'react'
import { Text } from 'rebass'
// import { NavLink } from 'react-router-dom'
import { ExternalLink } from 'react-external-link'
import { darken } from 'polished'
// import { useTranslation } from 'react-i18next'

import styled from 'styled-components'
import TelegramLogo from '../../assets/images/telegram.png'
import TwitterLogo from '../../assets/images/twitter.png'
import GithubLogo from '../../assets/images/github.png'
import MediumLogo from '../../assets/images/medium.png'
import GitbookLogo from '../../assets/images/gitbook.png'
import QuillhashLogo from '../../assets/images/quillhash-logo.png'

import { ThemeContext } from 'styled-components'

// import ViperLogo from '../../assets/svg/viperswap/black.svg'
// import ViperLogoDark from '../../assets/svg/viperswap/white.svg'
// import OcpLogo from '../../assets/images/ocp-logo.png'
// import { useActiveWeb3React } from '../../hooks'
// import { useDarkModeManager } from '../../state/user/hooks'
// import { TYPE } from '../../theme'

// import { Moon, Sun } from 'react-feather'
// import Menu from '../Menu'

import Row, { RowFixed } from '../Row'
// import Web3Status from '../Web3Status'

// import { Dots } from '../swap/styleds'
// import Modal from '../Modal'
// import GovTokenBalanceContent from './GovTokenBalanceContent'
// import usePrevious from '../../hooks/usePrevious'
// import { BLOCKCHAIN } from '../../connectors'
// import { PIT_SETTINGS } from '../../constants'
// import useGovernanceToken from '../../hooks/useGovernanceToken'

const FooterFrame = styled.div`
  background: black !important;
  display: block;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  top: 0;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 2rem;
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

const FooterRow = styled(RowFixed)`
  ${({ theme }) => theme.mediaWidth.upToMedium`
   width: 100%;
   margin: auto;
   display: flex;
  `};
`

const FooterTextRow = styled(Row)`
  justify-content: center !important;
  color: white;
  font-size: 1.3em;
`

const HeaderLinks = styled(Row)`
  justify-content: center;
  ${({ theme }) => theme.mediaWidth.upToMedium`
    padding: 1rem 0 1rem 1rem;
    justify-content: flex-end;
`};
`

// const AccountElement = styled.div<{ active: boolean }>`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   background-color: ${({ theme, active }) => (!active ? theme.bg1 : theme.bg3)};
//   color: white;
//   border-radius: 12px;
//   white-space: nowrap;
//   width: 100%;
//   cursor: pointer;

//   :focus {
//     border: 1px solid blue;
//   }
// `

// const UNIAmount = styled(AccountElement)`
//   color: white;
//   padding: 4px 8px;
//   height: 36px;
//   font-weight: 550;
//   background-color: ${({ theme }) => theme.bg3};
//   background: radial-gradient(
//     76.02% 75.41% at 1.84% 0%,
//     ${({ theme }) => theme.tokenButtonGradientStart} 0%,
//     ${({ theme }) => theme.tokenButtonGradientEnd} 100%
//   );
// `

// const UNIWrapper = styled.span`
//   width: fit-content;
//   position: relative;
//   cursor: pointer;

//   :hover {
//     opacity: 0.8;
//   }

//   :active {
//     opacity: 0.9;
//   }
// `

// const HideSmall = styled.span`
//   ${({ theme }) => theme.mediaWidth.upToSmall`
//     display: none;
//   `};
// `

// const BalanceText = styled(Text)`
//   ${({ theme }) => theme.mediaWidth.upToExtraSmall`
//     display: none;
//   `};
// `

// const Title = styled.a`
//   display: flex;
//   align-items: center;
//   pointer-events: auto;
//   justify-self: flex-start;
//   margin-right: 12px;
//   ${({ theme }) => theme.mediaWidth.upToSmall`
//     justify-self: center;
//   `};
//   :hover {
//     cursor: pointer;
//   }
// `

// const UniIcon = styled.div`
//   transition: transform 0.3s ease;
//   :hover {
//     transform: rotate(-5deg);
//   }
// `

const activeClassName = 'ACTIVE'

// const StyledNavLink = styled(NavLink).attrs({
//   activeClassName
// })`
//   ${({ theme }) => theme.flexRowNoWrap}
//   align-items: left;
//   border-radius: 3rem;
//   outline: none;
//   cursor: pointer;
//   text-decoration: none;
//   color: ${({ theme }) => theme.text2};
//   font-size: 1rem;
//   width: fit-content;
//   margin: 0 12px;
//   font-weight: 550;

//   &.${activeClassName} {
//     border-radius: 12px;
//     font-weight: 600;
//     color: ${({ theme }) => theme.text1};
//   }

//   :hover,
//   :focus {
//     color: ${({ theme }) => darken(0.1, theme.text1)};
//   }
// `

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

const StyledExternalLinkOcp = styled(StyledExternalLink)`
  color: #cb6ce6;
  display: inline-block;
`

const RowCentered = styled(StyledExternalLink)`
  margin: 1em auto;
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

// const NETWORK_LABELS: { [chainId in ChainId]?: string } = {
//   [ChainId.RINKEBY]: 'Rinkeby',
//   [ChainId.ROPSTEN]: 'Ropsten',
//   [ChainId.GÖRLI]: 'Görli',
//   [ChainId.KOVAN]: 'Kovan'
// }

export default function Footer() {
  // const { account, chainId } = useActiveWeb3React()
  // let logoDark: string
  // let logo: string

  // switch (BLOCKCHAIN) {
  //   case Blockchain.BINANCE_SMART_CHAIN:
  //     logoDark = OcpLogo
  //     logo = OcpLogo
  //     break
  //   case Blockchain.HARMONY:
  //     logoDark = ViperLogoDark
  //     logo = ViperLogo
  //     break
  //   default:
  //     logoDark = ViperLogoDark
  //     logo = ViperLogo
  //     break
  // }

  // const [darkMode] = useDarkModeManager()
  const theme = useContext(ThemeContext)

  return (
    <FooterFrame>
      <FooterTextRow>
        <Row>
          <div style={{ margin: 'auto' }}>
            Audited by
            <StyledExternalLink
              href="https://github.com/Quillhash/Audit_Reports/blob/master/OmniOracle%20Smart%20Contract%20Audit%20Report%20-%20QuillAudits.pdf"
              target="_blank"
              rel="noreferrer"
              style={{ verticalAlign: 'middle', display: 'inline-block' }}
            >
              <img width={'124px'} src={QuillhashLogo} alt="Quillhash logo" style={{ paddingBottom: '0.1em' }} />
            </StyledExternalLink>
          </div>
        </Row>
      </FooterTextRow>
      <br></br>
      <FooterRow style={{ margin: 'auto' }}>
        {/*<Title href=".">
          <UniIcon>
            <a href="https://ocp.finance" target="_blank" rel="noreferrer">
              <img width={'48px'} src={darkMode ? logoDark : logo} alt="logo" />
            </a>
          </UniIcon>
        </Title>*/}
        <HeaderLinks>
          <StyledExternalLink href="https://t.me/ocpcorp" target="_blank">
            <img width={'28px'} src={TelegramLogo} alt="Telegram logo" />
          </StyledExternalLink>
          <StyledExternalLink href="https://twitter.com/omnic_pro" target="_blank">
            <img width={'28px'} src={TwitterLogo} alt="Twitter logo" />
          </StyledExternalLink>
          <StyledExternalLink href="https://github.com/omni-corp-protocols" target="_blank">
            <img width={'28px'} src={GithubLogo} alt="Github logo" />
          </StyledExternalLink>
          <StyledExternalLink href="https://medium.com/omni-consumer-protocols" target="_blank">
            <img width={'28px'} src={MediumLogo} alt="Medium logo" />
          </StyledExternalLink>
          <StyledExternalLink href="https://omni-consumer-protocols.gitbook.io/ocp/" target="_blank">
            <img width={'28px'} src={GitbookLogo} alt="Gitbook logo" />
          </StyledExternalLink>
        </HeaderLinks>
      </FooterRow>
      <RowCentered>
        <Text fontWeight={500} fontSize={14} color={theme.white}>
          OCP TOKEN ADDRESS:
          <StyledExternalLinkOcp
            href="https://bscscan.com/address/0x3c70260eee0a2bfc4b375feb810325801f289fbd"
            target="_blank"
          >
            &nbsp;0x3c70260eee0a2bfc4b375feb810325801f289fbd
          </StyledExternalLinkOcp>
        </Text>
      </RowCentered>
    </FooterFrame>
  )
}
