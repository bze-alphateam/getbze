
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
import {useEffect, useState} from "react";
import {getBZERaffle, RaffleSDKType} from "./services/client";
import {RaffleDetails} from "./components/sections/raffle";

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
    <ChakraProvider theme={theme}>
      <Box 
        padding={5}
        margin={5}
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
    </ChakraProvider>
  )
}
