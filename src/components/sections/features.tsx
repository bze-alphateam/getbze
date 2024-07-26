import { Box, Button, Card, CardBody, CardFooter, Flex, Heading, Icon, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { MdOutlineBarChart, MdOutlineSmartphone, MdOutlineLocalFireDepartment, MdOutlineNewspaper, MdOutlineFactory, MdOutlineArrowOutward } from "react-icons/md";
import { GiMining } from "react-icons/gi";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

import { CosmosLogo, Subtitle, colors } from "../common";

interface FeaturesItemProps {
  icon: React.ReactNode,
  title: string,
  description: string,
  footer: React.ReactNode,
  [key: string]: any; // Allows additional props
}

interface ExternalButtonProps {
  text: string,
  url: string,
}

const FeatureIcon = ({icon}: {icon: React.ElementType}) => (<Icon as={icon} boxSize={50} color={useColorModeValue(colors.colorDark, colors.colorLight)}/>);

const ExternalButton = (props: ExternalButtonProps) => (<Button as={'a'} variant='outline' href={props.url} target="_blank" rightIcon={<MdOutlineArrowOutward/>}>{props.text}</Button>)

const FeaturesItem = (props: FeaturesItemProps) => {
  const { icon, title, description, footer, ...rest } = props; 
  return (
    <Card
      direction={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}
      overflow='hidden'
      variant='outline'
      alignItems={'center'}
      width={{base: '100%', sm: '100%', md: '100%', lg: '50%'}}
      {...rest}
    >
      <Box p={15} m={15}> 
        {icon}
      </Box>
      <Stack>
        <CardBody>
          <Heading size='md'>{title}</Heading>
          <Text py='2'>{description}</Text>
        </CardBody>
        <CardFooter flexDirection={{base: 'column', sm: 'column', md: 'row'}} justifyContent={{base: 'center', sm: 'center', md: 'normal'}} flex={1} gap={5}>
          {footer}
        </CardFooter>
      </Stack>
    </Card>
  );
}

export const Features = () => {

  return (
    <Flex margin={15} flex={1} flexDirection={'column'}  alignItems={'center'} gap={5} flexWrap={'wrap'}>
      <Box mt={45} mb={5}>
        <Subtitle text="Features" color={useColorModeValue(colors.colorDark, colors.colorLight)}/>
      </Box>
      <Flex flex={1} flexDirection={{base: 'column', sm: 'column', md: 'column', lg: 'row'}} gap={5}>
        <FeaturesItem 
          icon={<FeatureIcon icon={MdOutlineFactory} />}
          title="Token Factory" 
          description="With Token Factory, you can create your own token in seconds, no technical background required. Your tokens can be used on the BeeZee blockchain and seamlessly transferred to other networks via IBC."
          footer={<ExternalButton text="Go To Token Factory" url="https://app.getbze.com/factory"/>}
        />
        <FeaturesItem 
          icon={<FeatureIcon icon={MdOutlineBarChart} />}
          title="Order Book DEX" 
          description="Create a market pair for your own token against any other tokens on the network or trade your favorite assets at low cost. The DEX module enables permissionless market creation and features order-book style trading, allowing users to list and trade their favorite assets affordably."
          footer={<ExternalButton url="https://app.getbze.com" text="Check Out The DEX" />}
        />
      </Flex>
      <Flex flexDirection={{base: 'column', sm: 'column', md: 'column', lg: 'row'}} gap={5}>
        <FeaturesItem 
          icon={<FeatureIcon icon={FaMoneyBillTrendUp} />}
          title="Earn & Rewards" 
          description="Create incentives to engage your token's community, or earn coins by joining in staking and trading rewards. Users can set up rewards for those who lock their coins for a certain period or trade actively in specific markets. Rewards can be configured to accept any coins or tokens for staking and can be paid out in different coins or tokens."
          footer={<ExternalButton text="Check Out Rewards" url="https://app.getbze.com/earn" />}
        />
        <FeaturesItem 
          icon={<FeatureIcon icon={MdOutlineSmartphone} />}
          title="Mobile Wallet" 
          description="BZE is developing and maintaining CoinTrunk.io, a self-custodial mobile application that brings your tokens right to your pocket with out-of-the-box support for BZE Tokens. Additionally, the wallet supports multiple blockchains, providing even more flexibility and convenience."
          footer={<ExternalButton text="Visit CoinTrunk.io" url="https://cointrunk.io" />}
        />
      </Flex>
      <Flex flexDirection={{base: 'column', sm: 'column', md: 'column',  lg: 'row'}} gap={5}>
        <FeaturesItem 
          icon={<FeatureIcon icon={MdOutlineLocalFireDepartment} />}
          title="Periodical Burnings" 
          description="BZE is a community committed to periodic token burnings through governance proposals. Taxes collected from token creation, market trading, and other activities are sent to the community pool or directly to the burning address. Additionally, community members can participate in burning raffles and earn a percentage of the burned amount, adding an element of fun and potential rewards."
          footer={<ExternalButton text="See Burnings" url="https://app.getbze.com/burner" />}
        />
        <FeaturesItem 
          icon={<FeatureIcon icon={MdOutlineNewspaper} />}
          title="Decentralized News" 
          description="BeeZee blockchain supports content sharing from trusted internet domains through its web and mobile applications, with the shared content saved on the blockchain. The allowed internet domains, publishers, and cost of paid articles are determined by blockchain parameters set by the community via governance proposals."
          footer={
            <>
              <ExternalButton text="More Details" url="https://cointrunk.io" />
              <ExternalButton text="Docs" url="https://docs.cointrunk.io" />
            </>
          }
        />
      </Flex>
      <Flex flexDirection={{base: 'column', sm: 'column', md: 'column',  lg: 'row'}} gap={5}>
        <FeaturesItem 
          icon={<CosmosLogo width={50}/>}
          title="IBC Enabled" 
          description="BeeZee is a sovereign blockchain built with the Cosmos SDK, leveraging the full power of the interchain by connecting with other blockchains that support IBC. The BZE coin and all tokens minted on BeeZee can be sent to connected blockchains, allowing users to take advantage of their features in a permissionless and secure way."
          footer={<ExternalButton text="About IBC" url="https://www.ibcprotocol.dev/" />}
        />
        <FeaturesItem 
          icon={<FeatureIcon icon={GiMining} />}
          title="Minable Tokens" 
          description="Create your own CPU-minable token and enable users to join the mining process by selling mining power, which can be purchased with a token of your choice or directly with BZE. The mining software and other necessary tools are developed and ready to use out of the box, requiring no technical background."
          footer={<Button variant='outline' isDisabled={true}>Coming soon</Button>}
        />
      </Flex>
    </Flex>
  );
}