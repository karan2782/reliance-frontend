import { Box, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Slider } from "../components/ui/slider";

function Sidebar() {
  return (
    <Box border="1px solid gray.800" display={{lg:'block', md:'block', sm:"none", base:"none"}}>
      <Box
        py="6"
        px="3"
        fontWeight="bold"
        fontSize="20px"
        textTransform="uppercase"
        boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px"
        color="blackAlpha.800"
      >
        Filters
      </Box>
      <Box px={{lg:"3", md:"1"}}py="4" boxShadow=" rgba(0, 0, 0, 0.24) 0px 3px 8px">
        <Text>Price</Text>
        <Slider width="220px" defaultValue={[30, 60]} />
      </Box>
    </Box>
  );
}

export default Sidebar;
