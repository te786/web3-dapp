import { Container, Text, Button, Group } from '@mantine/core';
import classes from './Hero.module.css';
import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useDisconnect } from 'wagmi';


export default function Hero() {
    const { isConnecting, isDisconnected } = useAccount()
    const { open } = useWeb3Modal()
    const { disconnect } = useDisconnect()


    return (
        <div className={classes.wrapper}>
            <Container size={800} className={classes.inner}>
                <h1 className={classes.title}>
                    A{' '}
                    <Text component="span" variant="gradient" gradient={{ from: 'yellow', to: 'orange' }} inherit>
                        Web3
                    </Text>{' '}
                    banana dApp 🍌
                </h1>

                <Text className={classes.description} color="dimmed">
                    This is a demo website that shows you how a react app can be connected to the blockchain.
                </Text>

                <Group className={classes.controls}>
                    <Button
                        size="xl"
                        className={classes.control}
                        variant="gradient"
                        gradient={{ from: 'yellow', to: 'orange' }}
                        onClick={() => {
                            if (isDisconnected) {
                                open()
                            }
                            else {
                                disconnect()
                            }
                        }}
                    >
                        {isConnecting ? 'Connecting...' : isDisconnected ? 'Connect wallet' : "Disconnect"}
                    </Button>

                    <Button
                        component="a"
                        href="https://github.com/te786/web3-dapp"
                        size="xl"
                        variant="default"
                        className={classes.control}
                    >
                        GitHub
                    </Button>
                </Group>
            </Container>
        </div>
    );
}