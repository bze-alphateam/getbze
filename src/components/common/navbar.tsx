import { Box, Button, Flex, Image, Spacer, useColorModeValue } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

export const Navbar = () => {
  return (
    <Flex mb={5} flex={1} flexDirection={'row'} alignItems={'center'} maxHeight={'60px'}>
      <Box>
        <Image height='50px' width='200px' src={useColorModeValue('beezee-dark.svg', 'beezee-light.svg')} />
      </Box>
      <Spacer/>
      <Box>
        <Button as={'a'} href="https://app.getbze.com" target="_blank" colorScheme="blue">Open App</Button>
        <ColorModeSwitcher/>
      </Box>
    </Flex>
  );
}
