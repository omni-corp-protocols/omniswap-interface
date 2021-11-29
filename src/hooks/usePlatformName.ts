import { Blockchain } from '@venomswap/sdk'
import useBlockchain from './useBlockchain'

export default function usePlatformName(): string {
  const blockchain = useBlockchain()
  switch (blockchain) {
    case Blockchain.BINANCE_SMART_CHAIN:
      return 'Omniswap'
    case Blockchain.HARMONY:
      return 'Omniswap'
    case Blockchain.ETHEREUM:
      return 'Omniswap'
    default:
      return 'Omniswap'
  }
}
