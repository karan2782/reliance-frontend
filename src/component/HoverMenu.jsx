import React, { useState } from 'react'
import {
    HoverCardArrow,
    HoverCardContent,
    HoverCardRoot,
    HoverCardTrigger,
  } from "../components/ui/hover-card"
import { Box, Flex, HStack, Link } from '@chakra-ui/react'
import { IoIosArrowDown } from "react-icons/io";

function HoverMenu({menu}) {
    const [open, setOpen] = useState(false)
  return (
    <HoverCardRoot   open={open} onOpenChange={(e)=>setOpen(e.open)} onMouseLeave={()=>setOpen(false)} >
            <HoverCardTrigger unstyled={true} py='2'px='2' asChild backgroundColor={open?'#E42529':''} > 
                <Link  href="#" color='white' fontWeight='bold' fontSize='14px' textTransform='uppercase'> <Flex align='center' >{menu.title} <IoIosArrowDown /></Flex></Link>
            </HoverCardTrigger>
            <HoverCardContent backgroundColor='#003380' color='white' >
                <Box  >{menu.content}</Box>
            </HoverCardContent>
        </HoverCardRoot>
  )
}

export default HoverMenu
