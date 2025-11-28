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
            <Button
              as={'a'}
              href={'#join-us'}
              flex={1}
              variant='outline'
              colorScheme='blue'
              borderWidth="2px"
              _hover={{
                bgGradient: 'linear(to-r, blue.500, cyan.500)',
                color: 'white',
                transform: 'scale(1.05)',
                boxShadow: 'lg'
              }}
              transition="all 0.3s ease"
            >
              Buy BZE
            </Button>
          </Box>
          {
            raffle &&
            (
              <Box flex={1} pt={2} display={'flex'}>
                <Button
                  as={'a'}
                  href={'#raffle-description'}
                  flex={1}
                  variant='solid'
                  colorScheme='blue'
                  bgGradient="linear(to-r, blue.500, cyan.500)"
                  _hover={{
                    bgGradient: "linear(to-r, blue.600, cyan.600)",
                    transform: 'scale(1.05)',
                    boxShadow: 'xl'
                  }}
                  transition="all 0.3s ease"
                >
                  Join Burning Raffle 🔥 and win BZE
                </Button>
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