
import {
  ChakraProvider,
  Box,
  theme,
  Divider,
} from "@chakra-ui/react";
import { Footer, Navbar } from "./components/common";
import { Earn, Features, Info, Intro, Roadmap, Wallets } from "./components/sections";
import { UsefulLinks } from "./components/sections/links";
import { News } from "./components/sections/news";

export const App = () => {
  return (
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
        <Footer />
      </Box>
    </ChakraProvider>
  )
}
