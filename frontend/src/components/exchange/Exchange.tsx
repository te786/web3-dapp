import { Button, Container, Flex, NumberInput } from "@mantine/core";
import { useState } from "react";
import { useContractWrite } from "wagmi";
import BananaABI from "../../../static/abi.json";




export default function Exchange() {
    const [bananaAmount, setBananaAmount] = useState<number>(1);

    const { isLoading, write } = useContractWrite(
        {
            address: '0xF3752c705D24dbE52cD62A1701Ed1Cbd99949CE5',
            abi: BananaABI.abi,
            functionName: 'buy',
            args: [bananaAmount],
        }
    )

    return (
        <Container size={800} py={50}>
            <Flex align="center" justify="space-between">
                <NumberInput
                    style={{
                        flex: 1,
                    }}
                    value={bananaAmount}
                    onChange={(val) => {
                        setBananaAmount(val as number);
                    }}
                    mr={10}
                    min={1}
                    label="Banana amount"
                    color="yellow"
                    description="How many bananas do you want to buy?"
                    placeholder="1"
                />
                <NumberInput
                    min={1}
                    ml={10}
                    style={{
                        flex: 1,
                    }}
                    value={
                        // Banana price is 0.2 ETH, 4 decimals
                        // Remoce trailing zeros
                        (bananaAmount * 0.2).toFixed(4).replace(/\.?0+$/, '')
                    }
                    label="Price"
                    color="yellow"
                    description="The price you'll pay for each banana"
                    placeholder="0.2 ETH"
                />
            </Flex>

            <Button
                variant="gradient"
                gradient={{ from: 'yellow', to: 'orange' }}
                size="lg"
                fullWidth
                mt={20}
                loading={isLoading}
                onClick={() => {
                    write({
                        value: BigInt(bananaAmount * 0.2 * 10 ** 18),
                    })
                }}
            >
                Buy
            </Button>
        </Container >
    )
}
