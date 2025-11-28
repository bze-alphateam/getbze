import { Box, Button, Card, CardBody, CardFooter, CardHeader, Flex, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { Subtitle, colors } from "../common";

interface EarnItemProps {
  heading: string;
  body: string;
  url: string;
}

const EarnItem = ({heading, body, url}: EarnItemProps) => {
  return (
    <Card
      variant={'elevated'}
      bgGradient={useColorModeValue(
        'linear(to-br, white, blue.50)',
        'linear(to-br, gray.800, blue.900)'
      )}
      borderWidth="2px"
      borderColor={useColorModeValue('blue.100', 'blue.700')}
      boxShadow="xl"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: '2xl',
        borderColor: useColorModeValue('blue.300', 'blue.500'),
        bgGradient: useColorModeValue(
          'linear(to-br, blue.50, cyan.50)',
          'linear(to-br, blue.900, cyan.900)'
        )
      }}
    >
      <CardHeader>
        <Heading
          size={'md'}
          textColor={useColorModeValue(colors.colorDark, colors.colorLight)}
          bgGradient={useColorModeValue(
            'linear(to-r, blue.600, cyan.500)',
            'linear(to-r, blue.300, cyan.300)'
          )}
          bgClip="text"
        >
          {heading}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>{body}</Text>
      </CardBody>
      <CardFooter>
        <Button
          as={'a'}
          href={url}
          target="_blank"
          variant='outline'
          colorScheme='blue'
          _hover={{
            transform: 'scale(1.05)',
            boxShadow: 'md'
          }}
          transition="all 0.2s ease"
        >
          More Info
        </Button>
      </CardFooter>
    </Card>
  );
}

export const Earn = () => {
  return (
    <Flex margin={15} flex={1} flexDirection={'column'}  alignItems={'center'} gap={2} flexWrap={'wrap'}>
      <Box mt={45}>
        <Subtitle text="Earn Crypto" color={useColorModeValue(colors.colorDark, colors.colorLight)}/>
      </Box>
      <Box textAlign={'center'} maxW={'700px'}>
        <Text py={2}>Join us on our journey and explore the earning possibilities. Discover how you can earn $BZE and use your coins to earn other cryptocurrencies as well.</Text>
      </Box>
      <Flex flex={1} flexDirection={{base: 'column', sm: 'column', md: 'column', lg: 'row'}} gap={5}>
        <EarnItem 
          heading="Stake $BZE"
          body="Delegate your $BZE to one or multiple validators participating in the BeeZee network. Be sure to claim and stake your rewards periodically to maximize your earnings."
          url="https://staking.getbze.com"
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
          url="https://medium.com/bzedge-community/bze-burning-raffles-a02d4b40e4eb"
        />
      </Flex>
    </Flex>
  );
}
