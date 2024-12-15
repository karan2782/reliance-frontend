import {
  Box,
  Stack,
  HStack,
  Button,
  Grid,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import data from "../../MOCK_DATA.json";
import {useParams} from "react-router-dom"

function Products() {
  const [products, setProducts] = useState(data);
  const {product} = useParams()
  
  console.log(product);
  
  return (
    <Box>
      <Stack
        direction="row"
        justify="space-between"
        p="6"
        align="center"
        gap="20px"
        mb="4"
        boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        
        <Text fontWeight='bold' color='blackAlpha.800'  fontSize={{lg:'20px', md:"17px", sm:"14px", base:'13px'}}>{product}</Text>
        <HStack>
        <Text fontSize={{lg:'16px', md:"15px", sm:"10px", base:'10px'}}>Sort by:</Text>
          <Button
            size="xs"
            onClick={() => {
              setProducts((prev) =>
                [...prev].sort((a, b) => a.price - b.price)
              );
            }}
            backgroundColor="gray.300"
            color="black"
            px="3"
            fontSize={{lg:"14px", md:"12px", sm:"8px", base:"6px"}}
          >
            {" "}
            Price(Low-High)
          </Button>{" "}
          <Button
            px="3"
            color="black"
            backgroundColor="gray.300"
            size="xs"
            onClick={() => {
              setProducts((prev) =>
                [...prev].sort((a, b) => b.price - a.price)
              );
            }}
            fontSize={{lg:"14px", md:"12px", sm:"8px", base:"6px"}}
          >
            Price(High-Low)
          </Button>
        </HStack>
      </Stack>

      <Grid
      

        templateColumns={{
          lg: "repeat(4, 1fr)",
          md: "repeat(2, 1fr)",
          sm: "repeat(2, 1fr)",
          base: "repeat(1, 1fr)",
        }}


         
        
        
        gap="20px"
      >
        {products.map((item) => (
          <Stack
            pb="6"
            
            key={item.id}
            boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
            maxWidth={{lgOnly:"140px"}}
          >
            <Box>
              <Image 
              
                width="100%"
                src="https://www.reliancedigital.in/medias/Oppo-PadAir-Tablet-493177063-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wxMDE3OHxpbWFnZS9qcGVnfGltYWdlcy9oMmMvaDNlLzk4NjQ0NDk3MjAzNTAuanBnfGI2NDU0NjE5NWI3NTE0M2Q5NjgyNzg5ZTg5MzhiOTk3ZmZlY2MwNjBkNDhkM2E5Zjc5MThmMDQ1NmVlNjk3ZTA"
              />
            </Box>
            <Stack px="3">
              <Text color="#003380" _hover={{color:"red"}}>{item.name}</Text>
              <HStack gap="3">
                <Text fontSize="14px" fontWeight="bold" color="#003380">
                  Rs {item.price}
                </Text>{" "}
                <Text fontSize="14px" textDecoration="line-through">
                  Rs {item.mrp}
                </Text>{" "}
                <Text fontSize="14px">{item.discount}%</Text>{" "}
              </HStack>
            </Stack>
          </Stack>
        ))}
      </Grid>
    </Box>
  );
}

export default Products;
