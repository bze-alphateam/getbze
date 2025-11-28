
import {
  ChakraProvider,
  Box,
  extendTheme,
  Divider,
} from "@chakra-ui/react";
import { Footer, Navbar } from "./components/common";
import {Earn, Features, Info, Intro, Partners, Roadmap, Wallets} from "./components/sections";
import { UsefulLinks } from "./components/sections/links";
import { News } from "./components/sections/news";
import {Buy} from "./components/sections/buy";
import {useEffect, useState} from "react";
import {getBZERaffle, RaffleSDKType} from "./services/client";
import {RaffleDetails} from "./components/sections/raffle";

const customTheme = extendTheme({
  styles: {
    global: (props: any) => ({
      'html, body': {
        bg: props.colorMode === 'dark' ? 'gray.800' : 'gray.50',
      },
      '#root': {
        bg: props.colorMode === 'dark' ? 'gray.800' : 'gray.50',
      }
    })
  }
});

export const App = () => {
  const [raffle, setRaffle] = useState<RaffleSDKType|null>(null);

  useEffect(() => {
    const fetchRaffle = async () => {
      const raff = await getBZERaffle();
      if (raff !== null) {
        setRaffle(raff);
      }
    };

    fetchRaffle();
  }, []);

  return (
    <ChakraProvider theme={customTheme}>
      <Box
        minHeight="100vh"
        width="100%"
        position="relative"
      >
      <Box
        padding={5}
        margin={5}
        position="relative"
        zIndex={1}
      >
        <Navbar />
        <Intro raffle={raffle} />
        <Info />
        <Features />
        <Buy />
        <Roadmap />
        <Earn />
        { raffle && <RaffleDetails raffle={raffle}/>}
        <Wallets />
        <News />
        <UsefulLinks />
        <Partners />
      </Box>
      <Box>
        <Divider />
        <Footer />
      </Box>
      </Box>
    </ChakraProvider>
  )
}
