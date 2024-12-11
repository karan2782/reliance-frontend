import { Box, Stack, Text } from "@chakra-ui/react";
import React from "react";

function LowerFooter() {
  return (
    <Box backgroundColor='#0a244a' color='white' textAlign='center'py='4'>
    <Stack alignItems='center' px='6' pb='3'  >
      <Text textDecoration='underline'>Disclaimer</Text>
      <Text textAlign='center' fontSize='14px'>
        Product prices, offers and availability are subject to change from time
        to time. All prices are inclusive of taxes. Product colours & images are
        only for illustration and they may not exactly match with the actual
        product. Product specs are subject to change & may vary from actual
        product. While every care is taken to avoid inaccuracies in content,
        these are provided as is, without warranty of any kind.
      </Text>
    </Stack>
      <Text borderTop="1px solid rgba(228, 220, 220, 0.377)" width='100%'>
      © 2024 Reliance Digital. All Rights Reserved
      </Text>
    </Box>
  );
}

export default LowerFooter;
