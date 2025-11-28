import { Box, Button, Flex, Image, Spacer, useColorModeValue } from "@chakra-ui/react";
import { ColorModeSwitcher } from "../../ColorModeSwitcher";

export const Navbar = () => {
  const buttonBg = useColorModeValue('white', 'transparent');
  const buttonColor = useColorModeValue('blue.600', 'white');
  const buttonBorder = useColorModeValue('blue.300', 'blue.500');
  const buttonHoverBg = useColorModeValue('blue.50', 'blue.600');
  const buttonHoverColor = useColorModeValue('blue.700', 'white');

  return (
    <Box
      position="sticky"
      top={0}
      zIndex={1000}
      width="100%"
      bgGradient={useColorModeValue(
        'linear(to-r, white, blue.50, white)',
        'linear(to-r, gray.800, blue.900, gray.800)'
      )}
      borderBottomWidth="2px"
      borderBottomColor={useColorModeValue('blue.100', 'blue.700')}
      boxShadow="lg"
      backdropFilter="blur(10px)"
    >
      <Flex
        flexDirection={'row'}
        alignItems={'center'}
        maxW="1400px"
        mx="auto"
        px={4}
        py={3}
      >
        <Box>
          <Image height='50px' width='200px' src={useColorModeValue('beezee-dark.svg', 'beezee-light.svg')} />
        </Box>
        <Spacer/>
        <Box>
          <Button
            as={'a'}
            href="#ecosystem"
            bg={buttonBg}
            color={buttonColor}
            borderWidth="2px"
            borderColor={buttonBorder}
            _hover={{
                bg: buttonHoverBg,
                color: buttonHoverColor,
                transform: 'scale(1.05)',
                boxShadow: 'lg'
            }}
            transition="all 0.2s ease"
          >
            Apps
          </Button>
          <ColorModeSwitcher/>
        </Box>
      </Flex>
    </Box>
  );
}
