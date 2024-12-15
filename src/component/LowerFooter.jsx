import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {
  FaHome,
  FaPhoneAlt,
  FaSearchLocation,
  FaTruck,
  FaUser,
} from "react-icons/fa";
import { IoIosQrScanner } from "react-icons/io";

function LowerFooter() {
  return (
    <>
      <Box
        backgroundColor="#0a244a"
        color="white"
        textAlign="center"
        py="4"
        display={{ sm: "none", md: "none", lg: "block", base: "none" }}
      >
        <Stack alignItems="center" px="6" pb="3">
          <Text textDecoration="underline">Disclaimer</Text>
          <Text textAlign="center" fontSize="14px">
            Product prices, offers and availability are subject to change from
            time to time. All prices are inclusive of taxes. Product colours &
            images are only for illustration and they may not exactly match with
            the actual product. Product specs are subject to change & may vary
            from actual product. While every care is taken to avoid inaccuracies
            in content, these are provided as is, without warranty of any kind.
          </Text>
        </Stack>
        <Text borderTop="1px solid rgba(228, 220, 220, 0.377)" width="100%">
          © 2024 Reliance Digital. All Rights Reserved
        </Text>
      </Box>
      <HStack
        backgroundColor="white"
        color="gray.700"
        height="60px"
        justify="space-around"
        align="center"
        position="sticky"
        width='100%'
        p='3'
        bottom="0"
        zIndex="60"
        lg={{display:"none"}}
        fontSize='9px'
      >
        <Stack align="center" rowGap="0">
          <FaHome />
          <Text >Home</Text>
        </Stack>
        <Stack align="center" rowGap="0">
          <FaPhoneAlt />
          <Text >Contack</Text>
        </Stack>
        <Stack align="center" rowGap="0">
          <IoIosQrScanner />
          <Text >Scanner</Text>
        </Stack>
        <Stack align="center" rowGap="0">
          <FaSearchLocation />
          <Text >Store</Text>
        </Stack>
        <Stack align="center" rowGap="0">
          <FaTruck />
          <Text >Orders</Text>
        </Stack>
        <Stack align="center" rowGap="0">
          <FaUser />
          <Text >Login</Text>
        </Stack>
      </HStack>
    </>
  );
}

export default LowerFooter;
