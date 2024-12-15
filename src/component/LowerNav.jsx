import React, { useState } from "react";
import { HStack, Box, Link, Strong, Stack } from "@chakra-ui/react";
import HoverMenu from "./HoverMenu";
import { FaHome, FaPhoneAlt } from "react-icons/fa";

import { IoIosQrScanner } from "react-icons/io";

const menuArr = [
  { title: "Mobile & Tablet", content: "content" },
  { title: "Televisions", content: "content" },
  { title: "Audio", content: "content" },
  { title: "Home Appliances", content: "content" },
  { title: "Computer", content: "content" },
  { title: "Cameras", content: "content" },
  { title: "Kitchen Appliances", content: "content" },
  { title: "Personal Care", content: "content" },
  { title: "Accessories", content: "content" },
];
function LowerNav() {
  return (
    <>
    <HStack
      backgroundColor="#003380"
      px="50px"
      justify="space-between"
      display={{base:"none", sm:"none", md:"none", lg:"flex"}}
    >
      {menuArr.map((menu) => (
        <HoverMenu key={menu.title} menu={menu} />
      ))}
    </HStack>
    
    </>
  );
}

export default LowerNav;
