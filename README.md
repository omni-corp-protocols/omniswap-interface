# Omniswap Interface

[![Lint](https://github.com/Uniswap/uniswap-interface/workflows/Lint/badge.svg)](https://github.com/Uniswap/uniswap-interface/actions?query=workflow%3ALint)
[![Tests](https://github.com/Uniswap/uniswap-interface/workflows/Tests/badge.svg)](https://github.com/Uniswap/uniswap-interface/actions?query=workflow%3ATests)
[![Styled With Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://prettier.io/)

An open source interface for Omniiswap -- a protocol for decentralized exchange of BEP20 tokens.

- Website: [ocp.finance](https://ocp.finance/)
- Interface: [swap.ocp.finance](https://swap.ocp.finance)
- Docs: [uniswap.org/docs/](https://uniswap.org/docs/)
- Twitter: [@omnic_pro](https://twitter.com/omnic_pro)
- Discord: [OCP](https://discord.com/invite/8Y5jvjFgsC)
- Whitepaper: [Link](https://hackmd.io/C-DvwDSfSxuh-Gd4WKE_ig)

## Accessing the Omniswap Interface

To access the Omniswap Interface, [swap.ocp.finance](https://swap.ocp.finance).

## Listing a token

Please see the
[@omniswap/default-token-list](https://github.com/omni-corp-protocols/omniswap-default-token-list) 
repository.

## Development

### Install Dependencies

```bash
yarn
```

### Run

```bash
yarn start
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL` to e.g. `"https://{YOUR_NETWORK_ID}.infura.io/v3/{YOUR_INFURA_KEY}"` 

Note that the interface only works on testnets where both 
[Uniswap V2](https://uniswap.org/docs/v2/smart-contracts/factory/) and 
[multicall](https://github.com/makerdao/multicall) are deployed.
The interface will not work on other networks.

## Contributions

**Please open all pull requests against the `master` branch.** 
CI checks will run against all PRs.

