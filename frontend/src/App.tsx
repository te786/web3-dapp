import '@mantine/core/styles.css';
import { MantineProvider, createTheme, MantineColorsTuple } from '@mantine/core';
import Hero from './components/hero/Hero';
import Nav from './components/nav/Nav';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi'
import { sepolia } from 'viem/chains'
import Exchange from './components/exchange/Exchange';

const projectId = '3d296f4dee314ec0196b058e03d2176f'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

const chains = [sepolia]
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains })

const brand: MantineColorsTuple = [
  '#fff9e2',
  '#fdf2ce',
  '#fae4a0',
  '#f7d46d',
  '#f4c742',
  '#f3bf27',
  '#f2bb16',
  '#d7a406',
  '#c09200',
  '#a57d00'
];

const theme = createTheme({
  colors: {
    brand,
  },
  primaryColor: 'brand',
});


export default function App() {
  return <MantineProvider defaultColorScheme="dark" theme={theme}>
    <WagmiConfig config={wagmiConfig}>
      <Nav />
      <Hero />
      <Exchange />
    </WagmiConfig>
  </MantineProvider >;
}