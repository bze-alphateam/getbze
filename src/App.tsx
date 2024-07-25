
import {
  ChakraProvider,
  Box,
  theme,
} from "@chakra-ui/react"
import { Navbar } from "./components/common"
import { Intro } from "./components/sections"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box 
    // textAlign="center" fontSize="xl"
    >
      <Navbar />
      <Intro />
    </Box>
  </ChakraProvider>
)
