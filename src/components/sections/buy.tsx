import {
    Box, BoxProps,
    Button,
    Card,
    CardBody,
    CardFooter,
    Flex,
    Heading,
    Image,
    Stack,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import {Subtitle, colors} from "../common";

interface BuyItemProps {
  url: string;
  logo: string;
  title: string;
  description: string;
  logoSize: number;
  buttonText: string;
}

interface ClickableBoxProps {
  children: React.ReactNode;
  onClick: () => void,
}

export function ClickableBox({ children, onClick}: ClickableBoxProps) {
  return(
    <div onClick={onClick} style={{ cursor: 'pointer' }}>
      {children}
    </div>
  );
}

const BuyItem = ({url, logo, title, description, logoSize, buttonText}: BuyItemProps) => {
  const onClick = () => {
    window.open(url, "_blank");
  }

  return (
    <ClickableBox onClick={onClick}>
      <Flex flex={1} flexDirection={{ base: 'column', sm: 'column', md: 'column', lg: 'row' }}>
          <Box display={'flex'} justifyContent={'center'} minWidth={250} alignContent={'center'}>
            <Image
              p={2}
              src={logo}
              maxHeight={logoSize}
              maxWidth={logoSize}
            />
          </Box>
        <Stack>
          <CardBody textAlign={{ base: 'center', sm: 'center', md: 'center', lg: 'left' }} >
            <Heading size='md'color={useColorModeValue(colors.colorDark, colors.colorLight)}>{title}</Heading>
            <Text py='2'>{description}</Text>
            <Button size={'xs'} variant='solid' colorScheme='blue'>{buttonText}</Button>
            {/*variants: 'solid' | 'outline' | 'wacky' | 'chill';*/}
          </CardBody>
        </Stack>
      </Flex>
    </ClickableBox>
  );
}

export const Buy = () => {
    return (
      <Flex margin={15} flex={1} flexDirection={'column'}  alignItems={'center'} gap={5} flexWrap={'wrap'}>
        <Box mt={45} id={'join-us'}>
          <Subtitle text="Join us!" color={useColorModeValue(colors.colorDark, colors.colorLight)}/>
        </Box>
        <Flex flex={1} gap={1}>
          <Card
            direction={'column'}
            variant='outline'
            alignItems={'center'}
          >
            <BuyItem
              description={"Our own Order Book DEX offers you the opportunity to trade BZE against other assets with ease. As the driving force behind the BeeZee Network, BZE powers the entire blockchain and its community, enabling market creation and supporting all blockchain features."}
              logo={useColorModeValue("beezee-dark.svg", "beezee-light.svg")}
              logoSize={180}
              title={"Buy BZE on our DEX"}
              url={"https://app.getbze.com/"}
              buttonText={'BZE DEX'}
            />
            <BuyItem
              description={"Skip.Go allows you to purchase BZE using assets from various chains such as Ethereum, Arbitrum, Binance Smart Chain, Avalanche, Polygon, Cosmos Hub, Osmosis, Akash, and more. You can use assets like BNB, ETH, USDC, USDT, 1INCH, AVAX, MATIC, ATOM, OSMO, and others to participate in BeeZee's future."}
              logo={useColorModeValue("logos/skip_go_pink_logo.svg", "logos/skip_go_pink_ko_logo.svg")}
              logoSize={200}
              title={"Buy BZE with... anything!"}
              url={"https://go.skip.build?src_chain=1&src_asset=ethereum-native&dest_chain=beezee-1&dest_asset=ubze"}
              buttonText={'Skip.Go'}
            />
            <BuyItem
              description={"BZE can be traded on Osmosis, one of the largest decentralized exchanges in the Cosmos ecosystem. Swap assets like ATOM, OSMO, TIA, DYM, SAGA, USDC, and more for BZE, and become part of the BeeZee Network."}
              logo={"logos/osmosis_logo.png"}
              logoSize={130}
              title={"Buy BZE on Osmosis"}
              url={"https://app.osmosis.zone/?sellOpen=false&buyOpen=false&to=BZE&tab=swap&from=OSMO&quote=USDT"}
              buttonText={'Osmosis DEX'}
            />
          </Card>
      </Flex>
    </Flex>
    );
}