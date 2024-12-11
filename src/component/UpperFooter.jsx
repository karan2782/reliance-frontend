import { Box, Grid, HStack, Image, Link, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { RiFacebookBoxFill, RiTwitterFill } from "react-icons/ri";
import { ImYoutube2 } from "react-icons/im";

function UpperFooter() {
  return (
    <Box pt="6" pl="6" color="white" backgroundColor="#003380" py='6'>
      <Grid templateColumns="repeat(4, 1fr)" >
        <Stack>
          <Text fontSize="20px" fontWeight="bold">
            {" "}
            Product Categories
          </Text>
          <Link>Smartphones</Link>
          <Link>Laptop</Link>
          <Link>DSLR Cameras</Link>
          <Link>Televisions</Link>
          <Link>Air Conditioners</Link>
          <Link>Refrigerators</Link>
          <Link>Kitchen Appliances</Link>
          <Link>Accessiories</Link>
          <Link>Personal Care & Grooming</Link>
          <Link>Smart Watches</Link>
        </Stack>
        <Stack>
          <Text fontSize="20px" fontWeight="bold">
            {" "}
            Site Info
          </Text>
          <Link>About Reliance Digital</Link>
          <Link>resQ Services</Link>
          <Link>Locate nearest resQ service center</Link>
          <Link>Locate nearest My Jio store</Link>
          <Link>Site Map</Link>
          <Link>Gift cards</Link>
          <Link>Corporate enquiries</Link>
          <Link>Contact us</Link>
        </Stack>
        <Stack>
          <Text fontSize="20px" fontWeight="bold">
            {" "}
            Resource Center
          </Text>
          <Link>Product Reviews</Link>
          <Link>Buying Guides</Link>
          <Link>How Tos</Link>
          <Link>Featured Stories</Link>
          <Link>Events and Happenings</Link>
          <Link>Nearest Store</Link>
        </Stack>
        <Stack>
          <Text fontSize="20px" fontWeight="bold">
            Policies
          </Text>
          <Link>Tersm of Use</Link>
          <Link>FAQs</Link>
          <Link>Cancellation and Return Policy</Link>
          <Link>Pricing and Payment Policy</Link>
          <Link>Shipping and Delivery Policy</Link>
          <Link>Privacy Policy</Link>
          <Link>E-Waste Recycling Policy</Link>
          <Link>EMI and Additional Cashback T&C</Link>
          <Link>RelianceOne Loyalty Program T&C</Link>
          <Link>Caution Notice</Link>
        </Stack>
      </Grid>

      <HStack columnGap="220px">
        <Stack>
          <Text textTransform="uppercase" fontSize="19px" fontWeight="bold">
            Follow us
          </Text>
          <HStack fontSize="26px">
            {" "}
            <RiFacebookBoxFill /> <RiTwitterFill /> <ImYoutube2 />{" "}
          </HStack>
        </Stack>

        <Stack>
          <Text fontSize="19px" fontWeight="bold" textTransform="uppercase">
            Experience digital app on mobile
          </Text>
          <HStack>
            <Image
              width="122px"
              src="https://www.reliancedigital.in/build/client/images/google_play_store.png"
            />
            <Image
              width="122px"
              src="https://www.reliancedigital.in/build/client/images/ios_app_store_icon.png"
            />
          </HStack>
        </Stack>
      </HStack>
    </Box>
  );
}

export default UpperFooter;
