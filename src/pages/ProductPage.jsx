import React from "react";
import Sidebar from "../component/Sidebar";
import Products from "../component/Products";
import { Box, Flex } from "@chakra-ui/react";

function ProductPage() {
  return (
    <>
    <Flex gap='20px' p='4' width='100%' >
      <Sidebar  />

      <Products />
      </Flex>
      </>
  );
}

export default ProductPage;
