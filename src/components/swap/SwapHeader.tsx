import React from 'react'
import styled from 'styled-components'
import Settings from '../Settings'
import { RowBetween } from '../Row'
import { TYPE } from '../../theme'

const StyledSwapHeader = styled.div`
  border-radius: 14px 14px 0px 0px
  padding: 12px 1rem 0.8rem 1.5rem;
  margin-bottom: -4px;
  width: 100%;
  max-width: 420px;
  color: ${({ theme }) => theme.text2};
  background-color: ${({ theme }) => theme.white};
`

export default function SwapHeader() {
  return (
    <StyledSwapHeader>
      <RowBetween>
        <TYPE.black fontWeight={500}>SWAP</TYPE.black>
        <Settings />
      </RowBetween>
    </StyledSwapHeader>
  )
}
