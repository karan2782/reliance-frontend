import React from "react";
import UpperNav from "../component/UpperNav";
import LowerNav from "../component/LowerNav";
import { Box } from "@chakra-ui/react";


function NavPage() {
  return (

   <Box position='sticky' top='0' zIndex='70'>
   <UpperNav />
   <LowerNav/>

   </Box>
  );
}

export default NavPage;
