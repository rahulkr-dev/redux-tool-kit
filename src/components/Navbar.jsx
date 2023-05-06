import React from 'react'
import { Flex, Box ,Text} from "@chakra-ui/react"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <Flex alignItems="center" justify="space-around" bg="gray.400" mb="3rem">
            <Text>LOGO</Text>
            <Flex p="1rem" gap="1rem">

               <Text> <Link to="/">Home</Link></Text>
               <Text> <Link to="/cart">Cart</Link></Text>
                <Text>CART no:0</Text>
            </Flex>
        </Flex>
    )
}

export default Navbar