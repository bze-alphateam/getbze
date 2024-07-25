import { Box, Flex, Image, Spacer, useColorModeValue } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

export const Navbar = () => {
  return (
    <Flex flex={1} padding={5} margin={5} flexDirection={'row'} alignItems={'center'} maxHeight={'60px'}>
      <Box>
        <Image height='50px' width='200px' src={useColorModeValue('beezee-dark.svg', 'beezee-light.svg')} />
      </Box>
      <Spacer/>
      <Box>
        <ColorModeSwitcher/>
      </Box>
    </Flex>
  );
}
