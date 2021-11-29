import { Currency, CurrencyAmount, Fraction, Percent } from '@venomswap/sdk'
import React from 'react'
import { Text } from 'rebass'
import { ButtonPrimary } from '../../components/Button'
import { RowBetween, RowFixed } from '../../components/Row'
import CurrencyLogo from '../../components/CurrencyLogo'
import { Field } from '../../state/mint/actions'
import { TYPE } from '../../theme'

export function ConfirmAddModalBottom({
  noLiquidity,
  price,
  currencies,
  parsedAmounts,
  poolTokenPercentage,
  onAdd
}: {
  noLiquidity?: boolean
  price?: Fraction
  currencies: { [field in Field]?: Currency }
  parsedAmounts: { [field in Field]?: CurrencyAmount }
  poolTokenPercentage?: Percent
  onAdd: () => void
}) {
  return (
    <>
      <RowBetween>
        <TYPE.white>{currencies[Field.CURRENCY_A]?.symbol} Deposited</TYPE.white>
        <RowFixed>
          <CurrencyLogo currency={currencies[Field.CURRENCY_A]} style={{ marginRight: '8px' }} />
          <TYPE.white>{parsedAmounts[Field.CURRENCY_A]?.toSignificant(6)}</TYPE.white>
        </RowFixed>
      </RowBetween>
      <RowBetween>
        <TYPE.white>{currencies[Field.CURRENCY_B]?.symbol} Deposited</TYPE.white>
        <RowFixed>
          <CurrencyLogo currency={currencies[Field.CURRENCY_B]} style={{ marginRight: '8px' }} />
          <TYPE.white>{parsedAmounts[Field.CURRENCY_B]?.toSignificant(6)}</TYPE.white>
        </RowFixed>
      </RowBetween>
      <RowBetween>
        <TYPE.white>Rates</TYPE.white>
        <TYPE.white>
          {`1 ${currencies[Field.CURRENCY_A]?.symbol} = ${price?.toSignificant(4)} ${
            currencies[Field.CURRENCY_B]?.symbol
          }`}
        </TYPE.white>
      </RowBetween>
      <RowBetween style={{ justifyContent: 'flex-end' }}>
        <TYPE.white>
          {`1 ${currencies[Field.CURRENCY_B]?.symbol} = ${price?.invert().toSignificant(4)} ${
            currencies[Field.CURRENCY_A]?.symbol
          }`}
        </TYPE.white>
      </RowBetween>
      <RowBetween>
        <TYPE.white>Share of Pool:</TYPE.white>
        <TYPE.white>{noLiquidity ? '100' : poolTokenPercentage?.toSignificant(4)}%</TYPE.white>
      </RowBetween>
      <ButtonPrimary style={{ margin: '20px 0 0 0' }} onClick={onAdd}>
        <Text fontWeight={500} fontSize={20}>
          {noLiquidity ? 'Create Pool & Supply' : 'Confirm Supply'}
        </Text>
      </ButtonPrimary>
    </>
  )
}
