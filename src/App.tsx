
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import { Navbar } from "./components/common"
import { Info, Intro } from "./components/sections"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box 
    // textAlign="center" fontSize="xl"
    padding={5}
    margin={5}
    >
      <Navbar />
      <Intro />
      <Info />
    </Box>
  </ChakraProvider>
)
