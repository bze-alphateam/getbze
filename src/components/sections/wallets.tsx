import { Box, Button, Card, CardBody, CardFooter, Flex, Image, List, ListIcon, ListItem, Text, useColorModeValue } from "@chakra-ui/react";
import { Subtitle, colors } from "../common";
import { MdCheck, MdClose } from "react-icons/md";

interface WalletItemProps {
  logo: string;
  items: string[];
  buttons: React.ReactNode;
}

const browserFeature = "Browser";
const androidFeature = "Android";
const iOsFeature = "iOS";
const dappFeature = "dApp Connect";
const walletFeaturesList = [androidFeature, iOsFeature, browserFeature, dappFeature];

const WalletItemButton = ({text, url}: {text: string, url: string}) => (<Button as={'a'} variant={'outline'} size={'md'} href={url} target="_blank">{text}</Button>);

const WalletItem = (props: WalletItemProps) => {
  return (
    <Card justifyContent={'center'} flexDirection={'column'} alignItems={'center'} gap={2}>
      <Box p={5} m={5}>
        <Image src={props.logo} width={200} height={50}/>
      </Box>
      <CardBody>
        <List spacing={3}>
          {walletFeaturesList.map(item => {
            const isEnabled = props.items.find(s => s === item) ? true : false;
            return (
              <ListItem>
                <ListIcon as={isEnabled ? MdCheck : MdClose} color={isEnabled ? colors.status.success: colors.status.fail} />
                {item}
              </ListItem>
            )
          })}
        </List>
      </CardBody>
      <CardFooter>
        <Flex flexDirection={'column'} gap={2}>
          {props.buttons}
        </Flex>
      </CardFooter>
    </Card>
  );
}

export const Wallets = () => {
  return (
    <Flex margin={15} flex={1} flexDirection={'column'}  alignItems={'center'} gap={5} flexWrap={'wrap'}>
      <Box mt={45} mb={5}>
        <Subtitle text="Wallets" color={useColorModeValue(colors.colorDark, colors.colorLight)}/>
      </Box>
      <Box textAlign={'center'} maxW={'700px'}>
        <Text py={5}>$BZE and its tokens can be used anywhere, from mobile apps to browser extensions and other applications. Choose a wallet that best fits your needs, and remember to keep it secure and backed up.</Text>
      </Box>
      <Flex flex={1} flexDirection={{base: 'column', sm: 'column', md: 'column', lg: 'row'}} alignItems={'baseline'} gap={[2, 2, 5, 150]}>
        <WalletItem 
          logo={useColorModeValue("logos/keplr_logo_dark.svg", "logos/keplr_logo_light.svg")}
          items={[browserFeature, androidFeature, iOsFeature, dappFeature]}
          buttons={<WalletItemButton text="Download" url="https://www.keplr.app/get" />}
        />
        <WalletItem 
          logo={"logos/vidulum_full.svg"}
          items={[browserFeature, androidFeature, iOsFeature]}
          buttons={<WalletItemButton text="Download" url="https://vidulum.app/" />}
        />
        <WalletItem 
          logo={useColorModeValue("logos/cointrunk_dark.svg", "logos/cointrunk_light.svg")}
          items={[androidFeature]}
          buttons={<WalletItemButton text="Download" url="https://cointrunk.io/" />}
        />
      </Flex>
    </Flex>
  );
}
