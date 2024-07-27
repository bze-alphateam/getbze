
import {
  ChakraProvider,
  Box,
  theme,
  Divider,
  Flex,
  Text,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";
import { Navbar, colors } from "./components/common";
import { Earn, Features, Info, Intro, Roadmap, Wallets } from "./components/sections";
import { UsefulLinks } from "./components/sections/links";
import { News } from "./components/sections/news";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box 
      padding={5}
      margin={5}
    >
      <Navbar />
      <Intro />
      <Info />
      <Features />
      <Roadmap />
      <Earn />
      <Wallets />
      <News />
      <UsefulLinks />
    </Box>
    <Box>
      <Divider />
      <Flex m={15} flex={1} justifyContent={'space-evenly'} alignItems={'center'}>
        <Box>
          <Image height='50px' width='120px' src={useColorModeValue('beezee-light.svg', 'beezee-dark.svg')} />
        </Box>
        <Box>
          <Text p={2} fontWeight={'bold'} color={useColorModeValue(colors.colorLight, colors.colorDark)}>Developed by BZE Alpha Team</Text>
        </Box>
        <Box as={'a'} href="https://github.com/bze-alphateam/Official-BZEdge-Graphics" target="_blank">
          <Text p={2} fontWeight={'semibold'}>Press Kit</Text>
        </Box>
      </Flex>
    </Box>
  </ChakraProvider>
)
