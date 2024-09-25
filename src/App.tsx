
import {
  ChakraProvider,
  Box,
  theme,
  Divider,
} from "@chakra-ui/react";
import { Footer, Navbar } from "./components/common";
import {Earn, Features, Info, Intro, Partners, Roadmap, Wallets} from "./components/sections";
import { UsefulLinks } from "./components/sections/links";
import { News } from "./components/sections/news";
import {Buy} from "./components/sections/buy";

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
        <Buy />
        <Roadmap />
        <Earn />
        <Wallets />
        <News />
        <UsefulLinks />
        <Partners />
      </Box>
      <Box>
        <Divider />
        <Footer />
      </Box>
    </ChakraProvider>
  )
}
