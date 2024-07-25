import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { colors } from "../common";


export const Intro = () => {
  return (
    <Flex padding={5} margin={5} flex={1} flexDirection={{sm: 'column-reverse', md: 'row'}} alignItems={'center'} justifyContent={'space-evenly'} gap={5}>
      <Box>
        <Heading as={'h1'} size='xl' textColor={useColorModeValue(colors.colorDark, colors.colorLight)}>BeeZee Network</Heading>
        <Heading as={'h2'} size='md'>The hub of Simplified DeFi</Heading>
        <Box mt={2}>
          <Text maxWidth={{sm: '100%', md: '300px'}}>
          Powered by $BZE Coin, BeeZee Network offers users access to decentralized services through a variety of applications built on a fast and cost-efficient blockchain.
          </Text>
        </Box>
      </Box>
      <Box>
        <Image src={'network.png'} />
      </Box>
    </Flex>
  );
}