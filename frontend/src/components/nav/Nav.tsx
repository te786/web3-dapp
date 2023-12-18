import { Container, Group, Badge } from '@mantine/core';
import classes from './Nav.module.css';
import BananaABI from '../../../static/abi.json';
import { useAccount, useContractRead } from 'wagmi';
import { useEffect } from 'react';



export default function Nav() {
    const { address, isConnected } = useAccount()

    const { data } = useContractRead(
        {
            address: '0xF3752c705D24dbE52cD62A1701Ed1Cbd99949CE5',
            abi: BananaABI.abi,
            functionName: 'getBalance',
            args: [
                address
            ],
        }
    )

    useEffect(() => {
        console.log(data)
    }, [data])



    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <b>Web3 DApp 🍌</b>
                <Group gap={5}>
                    {
                        isConnected ? <Badge color="yellow" size="lg">
                            Balance: {parseInt(data as string)} 🍌
                        </Badge> : <Badge color="red" size="lg">Not connected</Badge>
                    }
                </Group>
            </Container>
        </header>
    );
}