import { Flex, Box, Spacer } from '@chakra-ui/react'
import React from 'react'
import cart from '../assets/cart.png'
import { Badge } from '@chakra-ui/react'

const CartWidget = () => {
    return (
        <Flex>
            <Box p='4'>
                <img src={cart} alt="cart" width='50px' height='50px' />
            </Box>
            <Spacer />
            <Box p='4'>
                <Badge colorScheme='purple'>5</Badge>
            </Box>
        </Flex>
    )
}

export default CartWidget