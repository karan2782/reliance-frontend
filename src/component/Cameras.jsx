import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import SliderEffect from "./SliderEffect";
import data from "../../db.json"


function Cameras() {

  return (
    <Box pt="6">
      <HStack pl="6" py="5" backgroundColor="gray.100">
        <Text fontSize="17px" fontWeight="500">
          Best Selling Cameras | 3hr Instant Delivery
        </Text>{" "}
        <Button
          size="xs"
          px="2"
          py="1"
          backgroundColor="blue.800"
          fontSize="14px"
        >
          view all
        </Button>{" "}
      </HStack>
      <Box p="6" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
        <SliderEffect slidesToShow={4} slidesToScroll={2}>
          {data?.cameras?.map((ele) => (
            <Flex
            key={ele.id}
              boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
              p="10px"
              direction="column"
              height="400px"
              width="200px"
              align="center"
              justify="space-between"
            >
              <Box width="180px" m="auto">
                <Image src={ele.img} width="100%" />
              </Box>
              <Box
                width="90%"
                display="flex"
                flexDirection="column"
                gap="10px"
                mt="7"
              >
                <Text fontSize="14px" color="blue.700">
                  {ele.name}
                </Text>
                <HStack>
                  <Text color="gray.700">Deal Price:</Text>{" "}
                  <Text fontWeight="bold">{ele.price}</Text>
                </HStack>
                {ele.mrp && <>
                    <HStack color="gray.700">
                  <Text>Mrp:</Text>{" "}
                  <Text textDecoration="line-through">{ele.mrp}</Text>
                </HStack>
                <HStack>
                  <Text color="gray.700">You Save:</Text>{" "}
                  <Text color="gray.700">{ele.discount}</Text>
                </HStack>
                </>}
                
              </Box>
            </Flex>
          ))}
        </SliderEffect>
      </Box>
    </Box>

    
  );
}

export default Cameras;
