
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react";
import { Navbar } from "./components/common";
import { Earn, Features, Info, Intro, Roadmap, Wallets } from "./components/sections";

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
      <Wallets />
      <Earn />
    </Box>
  </ChakraProvider>
)
