
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react";
import { Navbar } from "./components/common";
import { Features, Info, Intro, Roadmap } from "./components/sections";

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
    </Box>
  </ChakraProvider>
)
