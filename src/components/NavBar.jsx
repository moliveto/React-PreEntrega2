import React from 'react'
import { Menu, MenuButton, Button, MenuList, MenuItem, Flex, Box, Spacer } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import brand from '../assets/react.svg'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <Flex>
            <Box p='4'>
                <Link to={"/"}>
                    <img src={brand} alt="" width='100px' height='100px' />
                </Link>
            </Box>
            <Spacer />
            <Box p='4'>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Categories
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <Link to={`/category/${'cat1'}`}>
                                Category A
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to={`/category/${'cat2'}`}>
                                Category B
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to={`/category/${'cat3'}`}>
                                Category C
                            </Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Spacer />

            <Box>
                <Link to={"/cart"}>
                    <CartWidget />
                </Link>
            </Box>
        </Flex>
    )
}

export default NavBar