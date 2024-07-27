import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { Subtitle, colors } from "../common";

interface EarnItemProps {
  heading: string;
  body: string;
  url: string;
}

const EarnItem = ({heading, body, url}: EarnItemProps) => {
  return (
    <Card variant={'elevated'}>
      <CardHeader>
        <Heading size={'md'} textColor={useColorModeValue(colors.colorDark, colors.colorLight)}>{heading}</Heading>
      </CardHeader>
      <CardBody>
        <Text>{body}</Text>
      </CardBody>
      <CardFooter>
        <Button as={'a'} href={url} target="_blank" variant={'ghost'}> More Info</Button>
      </CardFooter>
    </Card>
  );
}

export const Earn = () => {
  return (
    <Flex margin={15} flex={1} flexDirection={'column'}  alignItems={'center'} gap={5} flexWrap={'wrap'}>
      <Box mt={45} mb={5}>
        <Subtitle text="Earn Crypto" color={useColorModeValue(colors.colorDark, colors.colorLight)}/>
      </Box>
      <Box textAlign={'center'} maxW={'700px'}>
        <Text py={5}>Join us on our journey and explore the earning possibilities. Discover how you can earn $BZE and use your coins to earn other cryptocurrencies as well.</Text>
      </Box>
      <Flex flex={1} flexDirection={{base: 'column', sm: 'column', md: 'column', lg: 'row'}} gap={5}>
        <EarnItem 
          heading="Stake $BZE"
          body="Delegate your $BZE to one or multiple validators participating in the BeeZee network. Be sure to claim and stake your rewards periodically to maximize your earnings."
          url="https://docs.getbze.com"
        />
        <EarnItem 
          heading="Provide Liquidity on Osmosis"
          body="Osmosis is one of the largest DEXs in the crypto space where $BZE can be traded. Provide liquidity, lock your shares for 14 days, and earn a share of the available rewards."
          url="https://app.osmosis.zone/pool/856"
        />
        <EarnItem 
          heading="Staking Rewards"
          body='Participate in staking rewards on the BeeZee Network to earn $BZE and other coins. Users can set up different rewards for those who stake $BZE or other tokens. Visit the "Earn" section on the dApp to explore the opportunities.'
          url="https://app.getbze.com/earn"
        />
        <EarnItem 
          heading="Trading Rewards"
          body='The BeeZee Network features a DEX that allows the community to create trading rewards for specific markets. Become a top trader on the DEX and claim your rewards. Visit the "Earn" section on the dApp to explore the opportunities.'
          url="https://app.getbze.com/earn"
        />
        <EarnItem 
          heading="Burning Raffles"
          body='Keep an eye out for active Burning Raffles! Occasionally, we invite people to participate in a burning event. Burn some $BZE for a chance to win a portion of the burned coins.'
          url="https://app.getbze.com/burner"
        />
      </Flex>
    </Flex>
  );
}
