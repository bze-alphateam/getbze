import {
    Box,
    Flex,
    Image,
    Menu,
    MenuButton,
    Button,
    MenuItem,
    MenuList,
    useColorModeValue,
    Card,
    CardBody,
    Heading,
    Text,
    SimpleGrid,
    VStack,
    HStack,
    Icon
} from "@chakra-ui/react"
import { Subtitle, colors } from "../common"
import { ChevronDownIcon } from "@chakra-ui/icons"
import { MdArrowOutward } from "react-icons/md";

// Feature App Card - for BeeZee apps
interface FeatureAppProps {
  title: string;
  description: string;
  url: string;
  logo?: string;
  useBeezeeLogo?: boolean;
  badge?: string;
  deprecated?: boolean;
}

const FeatureApp = ({ title, description, url, logo, useBeezeeLogo, badge, deprecated }: FeatureAppProps) => {
  const beezeeLogo = useColorModeValue("beezee-dark.svg", "beezee-light.svg");
  const bgGradient = useColorModeValue(
    'linear(to-br, white, blue.50)',
    'linear(to-br, gray.800, blue.900)'
  );
  const borderColor = useColorModeValue('blue.100', 'blue.700');
  const hoverBorderColor = useColorModeValue('blue.300', 'blue.500');
  const hoverBgGradient = useColorModeValue(
    'linear(to-br, blue.50, cyan.50)',
    'linear(to-br, blue.900, cyan.900)'
  );
  const headingGradient = useColorModeValue(
    'linear(to-r, blue.600, cyan.500)',
    'linear(to-r, blue.300, cyan.300)'
  );
  const iconColor = useColorModeValue('blue.500', 'blue.300');
  const textColor = useColorModeValue('gray.600', 'gray.400');
  const badgeBg = useColorModeValue('blue.100', 'blue.800');
  const badgeColor = useColorModeValue('blue.700', 'blue.200');
  const deprecatedBg = useColorModeValue('orange.100', 'orange.800');
  const deprecatedColor = useColorModeValue('orange.700', 'orange.200');

  return (
    <Card
      as="a"
      href={url}
      target="_blank"
      cursor="pointer"
      opacity={deprecated ? 0.75 : 1}
      bgGradient={bgGradient}
      borderWidth="2px"
      borderColor={borderColor}
      boxShadow="lg"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: '2xl',
        borderColor: hoverBorderColor,
        bgGradient: hoverBgGradient,
        textDecoration: 'none'
      }}
    >
      <CardBody>
        <VStack spacing={4} align="stretch">
          <VStack align="stretch" spacing={2}>
            <HStack spacing={3}>
              {useBeezeeLogo && (
                <Image
                  src={beezeeLogo}
                  height={{base: 7, md: 10}}
                />
              )}
              {logo && <Image src={logo} height={{base: 7, md: 10}} />}
              <Heading
                size={{base: 'sm', md: 'md'}}
                bgGradient={headingGradient}
                bgClip="text"
                flex={1}
              >
                {title}
              </Heading>
              <Icon as={MdArrowOutward} boxSize={5} color={iconColor} flexShrink={0} />
            </HStack>
            {badge && (
              <Text
                fontSize="xs"
                fontWeight="bold"
                bg={badgeBg}
                color={badgeColor}
                px={2}
                py={1}
                borderRadius="md"
                alignSelf="flex-start"
              >
                {badge}
              </Text>
            )}
            {deprecated && (
              <Text
                fontSize="xs"
                fontWeight="bold"
                bg={deprecatedBg}
                color={deprecatedColor}
                px={2}
                py={1}
                borderRadius="md"
                alignSelf="flex-start"
              >
                Sunsetting
              </Text>
            )}
          </VStack>
          <Text fontSize="sm" color={textColor}>
            {description}
          </Text>
        </VStack>
      </CardBody>
    </Card>
  );
};

// Quick Link Card - for external services
interface QuickLinkProps {
  name: string;
  url: string;
  logo: string;
  logoHeight?: number;
}

const QuickLink = ({ name, url, logo, logoHeight }: QuickLinkProps) => {
  const borderColor = useColorModeValue('blue.100', 'blue.700');
  const bgGradient = useColorModeValue(
    'linear(to-br, white, gray.50)',
    'linear(to-br, gray.800, gray.900)'
  );
  const hoverBorderColor = useColorModeValue('blue.300', 'blue.500');
  const hoverBgGradient = useColorModeValue(
    'linear(to-br, blue.50, cyan.50)',
    'linear(to-br, blue.900, cyan.900)'
  );

  return (
    <Button
      as="a"
      href={url}
      target="_blank"
      variant="outline"
      size="md"
      height="auto"
      py={3}
      px={4}
      borderWidth="2px"
      borderColor={borderColor}
      bgGradient={bgGradient}
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: 'xl',
        borderColor: hoverBorderColor,
        bgGradient: hoverBgGradient
      }}
    >
      <VStack spacing={2}>
        <Image src={logo} height={logoHeight ?? 8} />
        <Text fontSize="xs" fontWeight="semibold">{name}</Text>
      </VStack>
    </Button>
  );
};

// Section Header Component
interface SectionHeaderProps {
  title: string;
  description?: string;
}

const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  const headingGradient = useColorModeValue(
    'linear(to-r, blue.600, cyan.500)',
    'linear(to-r, blue.300, cyan.300)'
  );
  const textColor = useColorModeValue('gray.600', 'gray.400');

  return (
    <VStack spacing={2} align="start" width="100%">
      <Heading
        size="sm"
        bgGradient={headingGradient}
        bgClip="text"
      >
        {title}
      </Heading>
      {description && (
        <Text fontSize="sm" color={textColor}>
          {description}
        </Text>
      )}
    </VStack>
  );
};

export const UsefulLinks = () => {
  const titleColor = useColorModeValue(colors.colorDark, colors.colorLight);
  const skipGoLogo = useColorModeValue("logos/skip_go_pink_logo.svg", "logos/skip_go_pink_ko_logo.svg");
  const nonKycLogo = useColorModeValue("logos/nonkyc_logo_light.svg", "logos/nonkyc_logo_dark.svg");
  const coinCodexLogo = useColorModeValue("logos/coincodex-logo-light.svg", "logos/coincodex-logo-dark.svg");
  const mediumLogo = useColorModeValue("logos/medium_logo_dark.png", "logos/medium_logo_light.png");
  const xLogo = useColorModeValue("logos/x_logo_dark.png", "logos/x_logo_light.png");
  const githubLogo = useColorModeValue("logos/github_logo_dark.svg", "logos/github_logo_light.svg");
  const explorerBorderColor = useColorModeValue('blue.100', 'blue.700');
  const explorerBgGradient = useColorModeValue(
    'linear(to-br, white, gray.50)',
    'linear(to-br, gray.800, gray.900)'
  );
  const explorerHoverBorderColor = useColorModeValue('blue.300', 'blue.500');
  const explorerHoverBgGradient = useColorModeValue(
    'linear(to-br, blue.50, cyan.50)',
    'linear(to-br, blue.900, cyan.900)'
  );

  return (
    <Flex margin={15} flex={1} flexDirection={'column'} alignItems={'center'} gap={10} maxW="1400px" mx="auto" id="ecosystem">
      <Box mt={45}>
        <Subtitle text="Explore Our Ecosystem" color={titleColor} />
      </Box>

      {/* BeeZee Apps Section */}
      <VStack spacing={6} width="100%" align="stretch">
        <SectionHeader
          title="BeeZee Applications"
          description="Explore our suite of decentralized applications"
        />
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} width="100%">
          <FeatureApp
            title="DEX"
            description="Trade assets with our order book exchange"
            url="https://dex.getbze.com"
            useBeezeeLogo
          />
          <FeatureApp
            title="Staking"
            description="Stake BZE tokens and earn rewards from validators"
            url="https://staking.getbze.com"
            useBeezeeLogo
          />
          <FeatureApp
            title="Burner"
            description="Participate in burning raffles and win BZE"
            url="https://burner.getbze.com/"
            useBeezeeLogo
          />
          <FeatureApp
            title="Token Factory"
            description="Create your own token in seconds"
            url="https://factory.getbze.com/"
            useBeezeeLogo
            badge="New"
          />
          <FeatureApp
            title="Communities"
            description="Discover, join and grow the communities behind BZE tokens"
            url="https://communities.getbze.com/"
            useBeezeeLogo
            badge="New"
          />
          <FeatureApp
            title="CoinTrunk"
            description="Web3 tools"
            url="https://cointrunk.io"
            logo="logos/cointrunk_logo.svg"
          />
          <FeatureApp
            title="BZE App"
            description="Legacy all-in-one app — please use the dedicated apps above instead"
            url="https://app.getbze.com"
            useBeezeeLogo
            deprecated
          />
        </SimpleGrid>
      </VStack>

      {/* Trade & Market Data */}
      <VStack spacing={6} width="100%" align="stretch">
        <SectionHeader
          title="Trade & Track BZE"
          description="Buy BZE and monitor market data"
        />
        <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 6 }} spacing={4} width="100%">
          <QuickLink name="BZE DEX" url="https://dex.getbze.com" logo="bze_icon.png" />
          <QuickLink name="Skip.Go" url="https://go.skip.build?src_chain=1&src_asset=ethereum-native&dest_chain=beezee-1&dest_asset=ubze" logo={skipGoLogo} logoHeight={10} />
          <QuickLink name="Osmosis" url="https://app.osmosis.zone/pool/856" logo="logos/osmosis_logo.png" />
          <QuickLink name="NonKYC" url="https://nonkyc.io/market/BZE_USDT?ref=66ef24ed678488447ea9b8cb" logo={nonKycLogo} />
          <QuickLink name="CoinGecko" url="https://www.coingecko.com/en/coins/beezee" logo="logos/cg_logo.svg" />
          <QuickLink name="LiveCoinWatch" url="https://www.livecoinwatch.com/price/BZEdge-BZE" logo="logos/lcw_logo.svg" />
          <QuickLink name="DEXTools" url="https://www.dextools.io/app/en/osmosis/pair-explorer/856?t=1722095315807" logo="logos/dextools_logo.png" />
          <QuickLink name="CoinCodex" url="https://coincodex.com/crypto/bzedge/" logo={coinCodexLogo} />
        </SimpleGrid>
      </VStack>

      {/* Community & Resources */}
      <VStack spacing={6} width="100%" align="stretch">
        <SectionHeader
          title="Community & Resources"
          description="Connect with us and explore the network"
        />
        <SimpleGrid columns={{ base: 2, sm: 3, md: 4, lg: 6 }} spacing={4} width="100%">
          <QuickLink name="Medium" url="https://medium.com/bzedge-community" logo={mediumLogo} />
          <QuickLink name="X (Twitter)" url="https://x.com/BZEdgeCoin" logo={xLogo} />
          <QuickLink name="Discord" url="https://discord.gg/wb68JV3QhZ" logo="logos/discord_logo_blue.svg" />
          <QuickLink name="Telegram" url="https://t.me/BZEdgeOfficial" logo="logos/telegram_logo.svg" />
          <QuickLink name="GitHub" url="https://github.com/bze-alphateam" logo={githubLogo} />
          <Menu>
            <MenuButton
              as={Button}
              variant="outline"
              size="md"
              height="auto"
              py={3}
              px={4}
              borderWidth="2px"
              borderColor={explorerBorderColor}
              bgGradient={explorerBgGradient}
              rightIcon={<ChevronDownIcon />}
              transition="all 0.3s ease"
              _hover={{
                transform: 'translateY(-8px)',
                boxShadow: 'xl',
                borderColor: explorerHoverBorderColor,
                bgGradient: explorerHoverBgGradient
              }}
            >
              <VStack spacing={2}>
                <Image src="logos/ping_pub_logo.svg" height={8} />
                <Text fontSize="xs" fontWeight="semibold">Explorers</Text>
              </VStack>
            </MenuButton>
            <MenuList>
              <MenuItem as={'a'} href="https://ping.pub/beezee" target="_blank">Ping.pub</MenuItem>
              <MenuItem as={'a'} href="https://explorer.getbze.com/" target="_blank">BZE Explorer</MenuItem>
              <MenuItem as={'a'} href="https://explorer.chaintools.tech/beezee" target="_blank">Chaintools</MenuItem>
              <MenuItem as={'a'} href="https://explorer.whenmoonwhenlambo.money/beezee" target="_blank">🚀 WHEN MOON 🌕 WHEN LAMBO 🔥</MenuItem>
              <MenuItem as={'a'} href="https://atomscan.com/beezee" target="_blank">ATOMScan</MenuItem>
            </MenuList>
          </Menu>
        </SimpleGrid>
      </VStack>
    </Flex>
  );
}
