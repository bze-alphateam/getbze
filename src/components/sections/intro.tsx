import {Box, Button, Flex, Image, Text, useColorModeValue} from "@chakra-ui/react";
import { Subtitle, Title, colors } from "../common";
import {RaffleSDKType} from "../../services/client";

interface IntroProps {
  raffle: RaffleSDKType|null;
}
export const Intro = ({ raffle }: IntroProps) => {

  return (
    <Flex flex={1} margin={5} flexDirection={{base: 'column-reverse', sm: 'column-reverse', md: 'row'}} alignItems={'center'} justifyContent={'space-evenly'} gap={5}>
      <Box>
        <Title text="BeeZee Network" color={useColorModeValue(colors.colorDark, colors.colorLight)}/>
        <Subtitle text="The hub of Simplified DeFi" />
        <Box mt={2}>
          <Text maxWidth={{sm: '100%', md: '450px'}}>
            Powered by $BZE Coin, BeeZee Network offers users access to decentralized services through a variety of applications built on a fast and cost-efficient blockchain.
          </Text>
          <Box flex={1} pt={2} display={'flex'}>
            <Button as={'a'} href={'#join-us'} flex={1} variant='outline' colorScheme='blue'>Buy BZE</Button>
          </Box>
          {
            raffle &&
            (
              <Box flex={1} pt={2} display={'flex'}>
                <Button as={'a'} href={'#raffle-description'} flex={1} variant='solid' colorScheme='blue'>Join Burning Raffle 🔥 and win BZE</Button>
              </Box>
            )
          }
        </Box>
      </Box>
      <Box>
        <Image src={'network.png'} />
      </Box>
    </Flex>
  );
}