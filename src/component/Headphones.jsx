import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";

import React from "react";
import SliderEffect from "./SliderEffect";
import "./Headphone.css";
import data from "../../db.json"
function Headphones() {
  


  return (
    <Box>
      <HStack pl="6" py="5" backgroundColor="gray.100">
        <Text fontSize={{lg:"17px", md:"17px", sm:"12px", base:"10px"}} fontWeight="500">
          Best Selling audio | 3hr Instant Delivery
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
          {data?.headphones?.map((ele) => (
            <Flex
              direction="column"
              key={ele.id}
              height="350px"
              padding="10px"
              alignItems="center"
              borderRadius="10px"
              boxShadow="rgba(0, 0, 0, 0.16) 0px 1px 4px"
              width='200px'
            >
              <Box width="180px" margin="auto">
                <Image
                  width="180px"
                  src={
                    "https://www.reliancedigital.in/medias/Boat-Rockerz-518-Headphone-491431563-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3wyMjM0OHxpbWFnZS9qcGVnfGltYWdlcy9oMGUvaDNhLzk3NjU0MTA4OTc5NTAuanBnfDEyOWI1Y2YwZmZkMTBjNWU3Mjc2MjBmODk0YTFkYzgzZGM2NmZhNDM4YzRhYWRhZmI4MTk4Mzk5ZjdkYzk5NzE"
                  }
                />
              </Box>
              <Box width="100%" mt="40px">
                <Text fontSize="14px" color="blue.700">
                  {ele.name.split(",").slice(0, 1)}
                </Text>
                <HStack>
                  <Text color="gray.700">Deal Price:</Text>{" "}
                  <Text fontWeight="bold">{ele.price}</Text>{" "}
                </HStack>
                <HStack>
                  <Text color="gray.700">MRP:</Text>{" "}
                  <Text textDecoration="line-through" color="gray.700">
                    {ele.mrp}
                  </Text>{" "}
                </HStack>
                <HStack>
                  <Text color="gray.700">You Save:</Text>{" "}
                  <Text color="gray.700">{ele.discount}</Text>
                </HStack>
              </Box>
            </Flex>
          ))}
        </SliderEffect>
      </Box>
    </Box>
  );
}

export default Headphones;
