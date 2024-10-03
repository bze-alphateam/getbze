import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { Subtitle, colors } from "../common";
import {RaffleSDKType} from "../../services/client";
import BigNumber from "bignumber.js";
import {bigNumberToIntlFormat, bigNumberToPrettyString} from "../../services";

interface RaffleDetailsProps {
  raffle: RaffleSDKType;
}

export const RaffleDetails = ({ raffle }: RaffleDetailsProps) => {
  const getPot = (): BigNumber =>  (new BigNumber(raffle.pot)).div(1_000_000);

  const prettyPot = (): string => `~${bigNumberToIntlFormat(getPot())} BZE`;

  return (
    <Flex margin={15} flex={1} flexDirection={'column'}  alignItems={'center'} gap={2} flexWrap={'wrap'} textAlign={'center'} id={'raffle-description'}>
      <Card variant={'elevated'}>
        <CardHeader>
          <Heading size={'md'} textColor={useColorModeValue(colors.colorDark, colors.colorLight)}>🔥 Win with BZE Burning Raffles! 🔥</Heading>
        </CardHeader>
        <CardBody>
          <Text fontWeight={'bold'}>We’re thrilled to introduce the BZE Burning Raffle, a fun and rewarding way to engage with our community while helping to fight inflation! The Raffle running right now started with a pot of {prettyPot()} and every ticket you buy gives you a shot at winning a pot, and even if you don’t win, you’ll still contribute to an event that benefits the entire BZE ecosystem by burning some coins.</Text>
          <Text fontWeight={'bold'}>This is your chance to enjoy some thrilling action on the blockchain, support the value of BZE, and maybe even walk away with a prize!</Text>
        </CardBody>
        <CardFooter>
          <Flex margin={15} flex={1} flexDirection={'column'}  alignItems={'center'} gap={2} flexWrap={'wrap'} textAlign={'center'}>
            <Button as={'a'} href={'https://app.getbze.com/burner'} target="_blank" variant={'outline'}> Try your luck 🔥</Button>
          </Flex>
        </CardFooter>
      </Card>
    </Flex>
  );
}
