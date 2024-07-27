import { Box, Flex, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { colors } from "./colors";


export const Footer = () => {
  const footerLogo = useColorModeValue('beezee-dark.svg', 'beezee-light.svg');
  const footerTextColor = useColorModeValue(colors.colorDark, colors.colorLight);
  return (
    <Flex m={15} flex={1} justifyContent={'space-evenly'} alignItems={'center'}>
      <Box>
        <Image height='50px' width='120px' src={footerLogo} />
      </Box>
      <Box>
        <Text p={2} fontWeight={'bold'} color={footerTextColor}>Developed by BZE Alpha Team</Text>
      </Box>
      <Box as={'a'} href="https://github.com/bze-alphateam/Official-BZEdge-Graphics" target="_blank">
        <Text p={2} fontWeight={'semibold'}>Press Kit</Text>
      </Box>
    </Flex>
  );
}