import React,{useState,useEffect} from 'react'
import { Grid,Text,Image, Button } from '@chakra-ui/react'

const Products = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        async function getProducts(){
            let res = await fetch(`https://fakestoreapi.com/products`);
            let product = await res.json();
            setProducts(product)
            console.log(products)
        };
        getProducts()
    },[])
  return (
    <Grid bg="gray.100" templateColumns={"repeat(4,1fr)" } gap="1rem">

        {
            products.map((items,index)=>(
                <Grid key={items.id} gap="1rem">
                    <Image h="80px" src={items.image} />
                    <h4>{items.title}</h4>
                    <h5>{items.price}</h5>
                    <Button colorScheme='yellow'>Add to Cart</Button>
                </Grid>
            ))
        }
    </Grid>
  )
}

export default Products