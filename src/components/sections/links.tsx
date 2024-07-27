import { Box, Flex, Image, Menu, MenuButton, Button, MenuItem, MenuList, Text, useColorModeValue } from "@chakra-ui/react"
import { Subtitle, colors } from "../common"
import { ChevronDownIcon } from "@chakra-ui/icons";

const ExplorersMenu = () => {
  return (
    <Menu>
      <MenuButton as={Button} size={'sm'} rightIcon={<ChevronDownIcon />}>
        Explorers
      </MenuButton>
      <MenuList>
        <MenuItem as={'a'} href="https://ping.pub/beezee" target="_blank">Ping.pub</MenuItem>
        <MenuItem as={'a'} href="https://explorer.getbze.com/" target="_blank">BZE Explorer</MenuItem>
        <MenuItem as={'a'} href="https://explorer.chaintools.tech/beezee" target="_blank">Chaintools</MenuItem>
        <MenuItem as={'a'} href="https://explorer.whenmoonwhenlambo.money/beezee" target="_blank">🚀 WHEN MOON 🌕 WHEN LAMBO 🔥</MenuItem>
        <MenuItem as={'a'} href="https://atomscan.com/beezee" target="_blank">ATOMScan</MenuItem>
      </MenuList>
    </Menu>
  );
}

interface LinkItemButtonProps {
  url: string;
  text: string;
}

const LinkItemButton = ({url, text}: LinkItemButtonProps) => (<Button variant={'solid'} size={'sm'} as={'a'} href={url} target="_blank">{text}</Button>);

interface LinkItemProps {
  button: React.ReactNode;
  logo: string;
}

const LinkItem = ({button, logo}: LinkItemProps) => {
  return (
    <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} p={2}>
      <Image 
        p={2}
        src={logo}
        height={50}
      />
      {button}
    </Flex>
  );
}

export const UsefulLinks = () => {
  return (
    <Flex margin={15} flex={1} flexDirection={'column'}  alignItems={'center'} gap={5} flexWrap={'wrap'}>
      <Box mt={45}>
        <Subtitle text="Useful Links" color={useColorModeValue(colors.colorDark, colors.colorLight)}/>
      </Box>
      <Flex flex={1} flexWrap={'wrap'} flexDirection={{base: 'column', sm: 'row', md: 'row', lg: 'row'}} gap={[2, 2, 20, 25]}>
        <LinkItem button={<LinkItemButton text="BZE dApp" url="https://app.getbze.com"/>} logo={"bze_icon.png"}/>
        <LinkItem button={<ExplorersMenu />} logo={"logos/ping_pub_logo.svg"}/>
        <LinkItem button={<LinkItemButton text="GitHub" url="https://github.com/bze-alphateam"/>} logo={useColorModeValue("logos/github_logo_dark.svg", "logos/github_logo_light.svg")}/>
        <LinkItem button={<LinkItemButton text="CoinTrunk.io" url="https://cointrunk.io"/>} logo={"logos/cointrunk_logo.svg"}/>
      </Flex>
      <Flex flex={1} flexWrap={'wrap'} flexDirection={{base: 'column', sm: 'row', md: 'row', lg: 'row'}} gap={[2, 2, 20, 25]}>
        <LinkItem button={<LinkItemButton text="Medium" url="https://medium.com/bzedge-community"/>} logo={useColorModeValue("logos/medium_logo_dark.png", "logos/medium_logo_light.png")}/>
        <LinkItem button={<LinkItemButton text="X (Twitter)" url="https://x.com/BZEdgeCoin"/>} logo={useColorModeValue("logos/x_logo_dark.png", "logos/x_logo_light.png")}/>
        <LinkItem button={<LinkItemButton text="Discord" url="https://discord.gg/wb68JV3QhZ"/>} logo={"logos/discord_logo_blue.svg"}/>
        <LinkItem button={<LinkItemButton text="Telegram" url="https://t.me/BZEdgeOfficial"/>} logo={"logos/telegram_logo.svg"}/>
      </Flex>
      <Flex flex={1} flexWrap={'wrap'} flexDirection={{base: 'column', sm: 'row', md: 'row', lg: 'row'}} gap={[2, 2, 20, 25]}>
        <LinkItem button={<LinkItemButton text="Osmosis" url="https://app.osmosis.zone/pool/856"/>} logo={"logos/osmosis_logo.png"}/>
        <LinkItem button={<LinkItemButton text="CoinGecko" url="https://www.coingecko.com/en/coins/beezee"/>} logo={"logos/cg_logo.svg"}/>
        <LinkItem button={<LinkItemButton text="LiveCoinWatch" url="https://www.livecoinwatch.com/price/BZEdge-BZE"/>} logo={"logos/lcw_logo.svg"}/>
        <LinkItem button={<LinkItemButton text="DEXTools" url="https://www.dextools.io/app/en/osmosis/pair-explorer/856?t=1722095315807"/>} logo={"logos/dextools_logo.png"}/>
      </Flex>
    </Flex>
  );
}
