import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Input,
  Link,
  Stack,
} from "@chakra-ui/react";
import { InputGroup } from "../components/ui/input-group";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

function UpperNav() {
  return (
    <Box backgroundColor="#E42529" pb="2">
      <HStack
        backgroundColor="#E42529"
        justify="end"
        pr="50px"
        display={{ base: "none", md: "none", sm: "none", lg: "flex" }}
      >
        <Link
          color="white"
          fontWeight="bold"
          fontSize="14px"
          pr="4px"
          borderRight="1px solid white"
        >
          Find a store
        </Link>
        <Link
          color="white"
          fontWeight="bold"
          fontSize="14px"
          pr="4px"
          borderRight="1px solid white"
        >
          Buying Guides
        </Link>
        <Link color="white" fontWeight="bold" fontSize="14px">
          Contact Us
        </Link>
      </HStack>

      <Stack
        backgroundColor="#E42529"
        justify="space-between"
        px="50px"
        direction={{base:'column', sm:'column', md:'column', lg:'row'}}
        gap={{sm:"20px", md:"20px"}}
        align='center'
      >
        <Box>
          {" "}
          <Image src="	https://www.reliancedigital.in/build/client/images/loaders/rd_logo.svg" />{" "}
        </Box>

        <InputGroup
          flex="0.6"
          endElement={
            <Button
              px="2"
              border="none"
              backgroundColor="transparent"
              color="gray"
            >
              <IoSearch />
            </Button>
          }
          backgroundColor="white"
          rounded="full"
          border="none"
          height='fit-content'
        >
          <Input
            px="2"
            placeholder="Find your favorite products"
            rounded="full"
            border="none"
          />
        </InputGroup>
        <HStack>
          <Link
            color="white"
            fontWeight="bold"
            fontSize="14px"
            pr="4px"
            borderRight="1px solid white"
          >
            Select your pin
          </Link>
          <Link
            color="white"
            fontWeight="bold"
            fontSize="14px"
            pr="4px"
            borderRight="1px solid white"
          >
            {" "}
            <FaShoppingCart /> Cart
          </Link>
          <Link color="white" fontWeight="bold" fontSize="14px">
            {" "}
            <FaUser /> Login
          </Link>
        </HStack>
      </Stack>
    </Box>
  );
}

export default UpperNav;
