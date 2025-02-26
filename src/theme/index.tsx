import { transparentize } from 'polished'
import React, { useMemo } from 'react'
import styled, {
  ThemeProvider as StyledComponentsThemeProvider,
  createGlobalStyle,
  css,
  DefaultTheme
} from 'styled-components'
import { useIsDarkMode } from '../state/user/hooks'
import { Text, TextProps } from 'rebass'
import { Colors } from './styled'

import useBlockchain from '../hooks/useBlockchain'
import { Blockchain } from '@venomswap/sdk'

export * from './components'

const MEDIA_WIDTHS = {
  upToExtraSmall: 550,
  upToSmall: 720,
  upToMedium: 960,
  upToLarge: 1280
}

const mediaWidthTemplates: { [width in keyof typeof MEDIA_WIDTHS]: typeof css } = Object.keys(MEDIA_WIDTHS).reduce(
  (accumulator, size) => {
    ;(accumulator as any)[size] = (a: any, b: any, c: any) => css`
      @media (max-width: ${(MEDIA_WIDTHS as any)[size]}px) {
        ${css(a, b, c)}
      }
    `
    return accumulator
  },
  {}
) as any

const white = '#FFFFFF'
const black = '#000000'

export function defaultColors(darkMode: boolean): Colors {
  return {
    // base
    white,
    black,

    // text
    text1: darkMode ? '#FFFFFF' : '#000000',
    text2: darkMode ? '#C3C5CB' : '#565A69',
    text3: darkMode ? '#6C7284' : '#888D9B',
    text4: darkMode ? '#565A69' : '#C3C5CB',
    text5: darkMode ? '#242332' : '#EDEEF2',

    // backgrounds / greys
    bg1: darkMode ? '#d9d9d9' : '#FFFFFF',
    bg2: darkMode ? '#242332' : '#F7F8FA',
    bg3: darkMode ? '#505067' : '#EDEEF2',
    bg4: darkMode ? '#565A69' : '#CED0D9',
    bg5: darkMode ? '#6C7284' : '#888D9B',

    //specialty colors
    modalBG: darkMode ? 'rgba(0,0,0,.425)' : 'rgba(0,0,0,0.3)',
    advancedBG: darkMode ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.6)',

    //primary colors
    primary1: darkMode ? '#7b7e8b' : '#ff007a',
    primary2: darkMode ? '#3680E7' : '#FF8CC3',
    primary3: darkMode ? '#4D8FEA' : '#FF99C9',
    primary4: darkMode ? '#376bad70' : '#F6DDE8',
    primary5: darkMode ? '#153d6f70' : '#FDEAF1',

    // color text
    primaryText1: darkMode ? '#375480' : '#ff007a',

    // secondary colors
    secondary1: darkMode ? '#7b7e8b' : '#ff007a',
    secondary2: darkMode ? '#17000b26' : '#F6DDE8',
    secondary3: darkMode ? '#17000b26' : '#FDEAF1',

    // other
    red1: '#FD4040',
    red2: '#F82D3A',
    red3: '#D60000',
    green1: '#27AE60',
    yellow1: '#FFE270',
    yellow2: '#F3841E',
    blue1: '#7b7e8b',

    // dont wanna forget these blue yet
    // blue4: darkMode ? '#153d6f70' : '#C4D9F8',
    // blue5: darkMode ? '#153d6f70' : '#EBF4FF',

    // Added:
    tokenButtonGradientStart: '#008c6b',
    tokenButtonGradientEnd: '#005224',
    customCardGradientStart: '#008c6b',
    customCardGradientEnd: '#00c09c'
  }
}

export function viperColors(darkMode: boolean): Colors {
  return {
    // base
    white,
    black,

    // text
    text1: darkMode ? '#FFFFFF' : '#000000',
    text2: darkMode ? '#C3C5CB' : '#565A69',
    text3: darkMode ? '#6C7284' : '#888D9B',
    text4: darkMode ? '#565A69' : '#C3C5CB',
    text5: darkMode ? '#242332' : '#EDEEF2',

    // backgrounds / greys
    bg1: darkMode ? '#d9d9d9' : '#FFFFFF',
    bg2: darkMode ? '#242332' : '#F7F8FA',
    bg3: darkMode ? '#505067' : '#EDEEF2',
    bg4: darkMode ? '#565A69' : '#CED0D9',
    bg5: darkMode ? '#6C7284' : '#888D9B',

    //specialty colors
    modalBG: darkMode ? 'rgba(0,0,0,.425)' : 'rgba(0,0,0,0.3)',
    advancedBG: darkMode ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.6)',

    //primary colors
    primary1: darkMode ? '#669999' : '#00c09c',
    primary2: darkMode ? '#3680E7' : '#FF8CC3',
    primary3: darkMode ? '#4D8FEA' : '#FF99C9',
    primary4: darkMode ? '#376bad70' : '#F6DDE8',
    primary5: darkMode ? '#153d6f70' : '#e8f4e5',

    // color text
    primaryText1: darkMode ? '#669999' : '#00c09c',

    // secondary colors
    secondary1: darkMode ? '#7b7e8b' : '#ff007a',
    secondary2: darkMode ? '#17000b26' : '#F6DDE8',
    secondary3: darkMode ? '#17000b26' : '#FDEAF1',

    // other
    red1: '#FD4040',
    red2: '#F82D3A',
    red3: '#D60000',
    green1: '#27AE60',
    yellow1: '#FFE270',
    yellow2: '#F3841E',
    blue1: '#7b7e8b',

    // dont wanna forget these blue yet
    // blue4: darkMode ? '#153d6f70' : '#C4D9F8',
    // blue5: darkMode ? '#153d6f70' : '#EBF4FF',

    // Added:
    tokenButtonGradientStart: '#008c6b',
    tokenButtonGradientEnd: '#005224',
    customCardGradientStart: '#008c6b',
    customCardGradientEnd: '#00c09c'
  }
}

export function bscColors(darkMode: boolean): Colors {
  return {
    // base
    white: '#FFFFFF',
    black: '#000000',

    // text
    text1: darkMode ? '#000000' : '#000000',
    text2: darkMode ? '#000000' : '#565A69',
    text3: darkMode ? '#6C7284' : '#888D9B',
    text4: darkMode ? '#565A69' : '#000000',
    text5: darkMode ? '#242332' : '#EDEEF2',

    // backgrounds / greys
    bg1: darkMode ? '#d9d9d9' : '#FFFFFF',
    bg2: darkMode ? '#242332' : '#F7F8FA',
    bg3: darkMode ? '#505067' : '#EDEEF2',
    bg4: darkMode ? '#565A69' : '#CED0D9',
    bg5: darkMode ? '#565A69' : '#888D9B',

    //specialty colors
    modalBG: darkMode ? 'rgba(0,0,0,42.5)' : 'rgba(0,0,0,0.3)',
    advancedBG: darkMode ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.6)',

    //primary colors
    primary1: darkMode ? '#7b7e8b' : '#ffad00',
    primary2: darkMode ? '#3680E7' : '#FFE08C',
    primary3: darkMode ? '#4D8FEA' : '#F2CB61',
    primary4: darkMode ? '#376bad70' : '#FFE08C',
    primary5: darkMode ? '#153d6f70' : '#FAECC5',

    // color text
    primaryText1: darkMode ? '#375480' : '#ffad00',

    // secondary colors
    secondary1: darkMode ? '#7b7e8b' : '#ffad00',
    secondary2: darkMode ? '#17000b26' : '#FFE08C',
    secondary3: darkMode ? '#17000b26' : '#FAECC5',

    // other
    red1: '#FF6871',
    red2: '#F82D3A',
    red3: '#D60000',
    green1: '#27AE60',
    yellow1: '#FFE270',
    yellow2: '#F3841E',
    blue1: '#7b7e8b',

    // dont wanna forget these blue yet
    // blue4: darkMode ? '#153d6f70' : '#C4D9F8',
    // blue5: darkMode ? '#153d6f70' : '#EBF4FF',

    // Added:
    tokenButtonGradientStart: '#ffbb00',
    tokenButtonGradientEnd: '#c99212',
    customCardGradientStart: '#001d4c',
    customCardGradientEnd: '#000024'
  }
}

export function harmonyColors(darkMode: boolean): Colors {
  return {
    // base
    white,
    black,

    // text
    text1: darkMode ? '#FFFFFF' : '#000000',
    text2: darkMode ? '#C3C5CB' : '#565A69',
    text3: darkMode ? '#6C7284' : '#888D9B',
    text4: darkMode ? '#565A69' : '#C3C5CB',
    text5: darkMode ? '#242332' : '#EDEEF2',

    // backgrounds / greys
    bg1: darkMode ? '#d9d9d9' : '#FFFFFF',
    bg2: darkMode ? '#242332' : '#F7F8FA',
    bg3: darkMode ? '#505067' : '#EDEEF2',
    bg4: darkMode ? '#565A69' : '#CED0D9',
    bg5: darkMode ? '#6C7284' : '#888D9B',

    //specialty colors
    modalBG: darkMode ? 'rgba(0,0,0,.425)' : 'rgba(0,0,0,0.3)',
    advancedBG: darkMode ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.6)',

    //primary colors
    primary1: darkMode ? '#7b7e8b' : '#00AEE9',
    primary2: darkMode ? '#3680E7' : '#69FABD',
    primary3: darkMode ? '#4D8FEA' : '#00c5eb',
    primary4: darkMode ? '#376bad70' : '#bcecfd',
    primary5: darkMode ? '#153d6f70' : '#d9f4fd',

    // color text
    primaryText1: darkMode ? '#375480' : '#00AEE9',

    // secondary colors
    secondary1: darkMode ? '#7b7e8b' : '#00AEE9',
    secondary2: darkMode ? '#17000b26' : '#F6DDE8',
    secondary3: darkMode ? '#17000b26' : '#FDEAF1',

    // other
    red1: '#FD4040',
    red2: '#F82D3A',
    red3: '#D60000',
    green1: '#27AE60',
    yellow1: '#FFE270',
    yellow2: '#F3841E',
    blue1: '#7b7e8b',

    // dont wanna forget these blue yet
    // blue4: darkMode ? '#153d6f70' : '#C4D9F8',
    // blue5: darkMode ? '#153d6f70' : '#EBF4FF',

    // Added:
    tokenButtonGradientStart: '#008c6b',
    tokenButtonGradientEnd: '#005224',
    customCardGradientStart: '#008c6b',
    customCardGradientEnd: '#00c09c'
  }
}

export function colors(blockchain: Blockchain, darkMode: boolean): Colors {
  switch (blockchain) {
    case Blockchain.BINANCE_SMART_CHAIN:
      return bscColors(darkMode)
    case Blockchain.HARMONY:
      return harmonyColors(darkMode)
    default:
      return viperColors(darkMode)
  }
}

export function theme(blockchain: Blockchain, darkMode: boolean): DefaultTheme {
  return {
    ...colors(blockchain, darkMode),

    grids: {
      sm: 8,
      md: 12,
      lg: 24
    },

    //shadows
    shadow1: darkMode ? '#000' : '#2F80ED',

    // media queries
    mediaWidth: mediaWidthTemplates,

    // css snippets
    flexColumnNoWrap: css`
      display: flex;
      flex-flow: column nowrap;
    `,
    flexRowNoWrap: css`
      display: flex;
      flex-flow: row nowrap;
    `
  }
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const darkMode = useIsDarkMode()
  const blockchain = useBlockchain()

  const themeObject = useMemo(() => theme(blockchain, darkMode), [blockchain, darkMode])

  return <StyledComponentsThemeProvider theme={themeObject}>{children}</StyledComponentsThemeProvider>
}

const TextWrapper = styled(Text)<{ color: keyof Colors }>`
  color: ${({ color, theme }) => (theme as any)[color]};
`

export const TYPE = {
  main(props: TextProps) {
    return <TextWrapper fontWeight={550} color={'text2'} {...props} />
  },
  link(props: TextProps) {
    return <TextWrapper fontWeight={550} color={'primary1'} {...props} />
  },
  black(props: TextProps) {
    return <TextWrapper fontWeight={550} color={'black'} {...props} />
  },
  white(props: TextProps) {
    return <TextWrapper fontWeight={550} color={'white'} {...props} />
  },
  body(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={16} color={'text1'} {...props} />
  },
  largeHeader(props: TextProps) {
    return <TextWrapper fontWeight={600} fontSize={24} {...props} />
  },
  mediumHeader(props: TextProps) {
    return <TextWrapper fontWeight={550} fontSize={20} {...props} />
  },
  subHeader(props: TextProps) {
    return <TextWrapper fontWeight={400} fontSize={14} {...props} />
  },
  small(props: TextProps) {
    return <TextWrapper fontWeight={550} fontSize={11} {...props} />
  },
  blue(props: TextProps) {
    return <TextWrapper fontWeight={550} color={'blue1'} {...props} />
  },
  yellow(props: TextProps) {
    return <TextWrapper fontWeight={550} color={'yellow1'} {...props} />
  },
  darkGray(props: TextProps) {
    return <TextWrapper fontWeight={550} color={'text3'} {...props} />
  },
  gray(props: TextProps) {
    return <TextWrapper fontWeight={550} color={'bg3'} {...props} />
  },
  italic(props: TextProps) {
    return <TextWrapper fontWeight={550} fontSize={12} fontStyle={'italic'} color={'text2'} {...props} />
  },
  error({ error, ...props }: { error: boolean } & TextProps) {
    return <TextWrapper fontWeight={550} color={error ? 'red1' : 'text2'} {...props} />
  }
}

export const FixedGlobalStyle = createGlobalStyle`
html, input, textarea, button {
  font-family: 'Inter', sans-serif;
  font-display: fallback;
}
@supports (font-variation-settings: normal) {
  html, input, textarea, button {
    font-family: 'proxima-nova', 'Inter var', sans-serif;
    font-weight: 550 !important;
  }
}

html,
body {
  margin: 0;
  padding: 0;
}

 a {
   color: ${colors(Blockchain.ETHEREUM, false).blue1}; 
 }

* {
  box-sizing: border-box;
}

button {
  user-select: none;
}

html {
  font-size: 16px;
  font-variant: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
  
}
`

export const ThemedGlobalStyle = createGlobalStyle`
html {
  color: ${({ theme }) => theme.text1};
  background-color: ${({ theme }) => theme.bg2};
}

body {
  min-height: 100vh;
  background-position: 0 -30vh;
  background-repeat: no-repeat;
  background-image: ${({ theme }) =>
    `radial-gradient(50% 50% at 50% 50%, ${transparentize(0.9, theme.primary1)} 0%, ${transparentize(
      1,
      theme.bg1
    )} 100%)`};
}
`
