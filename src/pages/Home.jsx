import React from 'react'
import Products from '../components/Products'
import {Box} from "@chakra-ui/react"

const Home = () => {

  return (
    <Box bg="gray.200">
        <h1>Welcome to our store</h1>
        <Products />
    </Box>
  )
}

export default Home