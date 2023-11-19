import React from 'react'
import { Menu, MenuButton, Button, MenuList, MenuItem, Flex, Box, Spacer } from "@chakra-ui/react"
import { ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import brand from '../assets/react.svg'
import { Link } from 'react-router-dom'


const NavBar = () => {
    const cat1 = 'Almacen';
    const cat2 = 'Bebidas';
    const cat3 = 'Farmacia';
    const categories = [cat1, cat2, cat3]

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
                        {categories.map((category) => (
                            <MenuItem key={category} as={Link} to={`/category/${category}`}>
                                {category}
                            </MenuItem>
                        ))}
                        {/* {
                            categories.map((cat) => {
                                {
                                    console.log(`/category/${cat}`)
                                    console.log(`Category ${cat}`)
                                }
                                <MenuItem>
                                    <Link to={`/category/${cat}`}>
                                        {`Category ${cat}`}
                                    </Link>
                                </MenuItem>
                            })
                        } */}
                        {/* <MenuItem>
                            <Link to={`/category/${cat1}`}>
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
                        </MenuItem> */}
                    </MenuList>
                </Menu>
            </Box>
            <Spacer />

            <Box>
                <Link to={"/cart"}>
                    <CartWidget />
                </Link>
            </Box>
        </Flex >
    )
}

export default NavBar