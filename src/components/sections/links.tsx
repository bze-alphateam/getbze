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

// The BeeZee apps, with the icons and colours of the official app identity
// (Official-BZEdge-Graphics, beezee/apps). `ink` is the app colour for text on
// light backgrounds, `onDark` the one for dark backgrounds.
interface BeezeeApp {
  key: string;
  title: string;
  description: string;
  domain: string;
  ink: string;
  onDark: string;
  badge?: string;
}

const BEEZEE_APPS: BeezeeApp[] = [
  { key: "factory", title: "Factory", description: "Create a token and manage everything about it: supply, brand, pools and rewards.", domain: "factory.getbze.com", ink: "#9A6A00", onDark: "#FFC933" },
  { key: "communities", title: "Communities", description: "Every token's own branded page, plus a directory of all tokens on BeeZee.", domain: "communities.getbze.com", ink: "#1A7A43", onDark: "#3DD07A" },
  { key: "dex", title: "DEX", description: "Trade any token with instant swaps or an order book.", domain: "dex.getbze.com", ink: "#0E74AD", onDark: "#12C1E1" },
  { key: "staking", title: "Staking", description: "Stake BZE with validators and claim your rewards.", domain: "staking.getbze.com", ink: "#8E44AD", onDark: "#B57EDC" },
  { key: "burner", title: "Burner", description: "Burn tokens in public and join burning raffles.", domain: "burner.getbze.com", ink: "#C24A00", onDark: "#FF8A1F" },
  { key: "explorer", title: "Explorer", description: "Every block and transaction, explained in plain language.", domain: "explorer.getbze.com", ink: "#0B74A8", onDark: "#22C4E2", badge: "New" },
];

/** The app's icon for the current colour mode: the disc is a shade lighter on dark backgrounds. */
const useAppIcon = (key: string) => useColorModeValue(`apps/${key}/icon.svg`, `apps/${key}/icon-on-dark.svg`);

const useCardStyle = () => ({
  bgGradient: useColorModeValue('linear(to-br, white, blue.50)', 'linear(to-br, gray.800, blue.900)'),
  borderColor: useColorModeValue('blue.100', 'blue.700'),
  hoverBgGradient: useColorModeValue('linear(to-br, blue.50, cyan.50)', 'linear(to-br, blue.900, cyan.900)'),
  headingGradient: useColorModeValue('linear(to-r, blue.600, cyan.500)', 'linear(to-r, blue.300, cyan.300)'),
  textColor: useColorModeValue('gray.600', 'gray.400'),
});

const Badge = ({ text, scheme }: { text: string; scheme: 'blue' | 'orange' }) => (
  <Text
    fontSize="xs"
    fontWeight="bold"
    bg={useColorModeValue(`${scheme}.100`, `${scheme}.800`)}
    color={useColorModeValue(`${scheme}.700`, `${scheme}.200`)}
    px={2}
    py={1}
    borderRadius="md"
    flexShrink={0}
  >
    {text}
  </Text>
);

// App Card - one BeeZee app, its border and link in the app's colour on hover
const AppCard = ({ app }: { app: BeezeeApp }) => {
  const style = useCardStyle();
  const icon = useAppIcon(app.key);
  const accent = useColorModeValue(app.ink, app.onDark);

  return (
    <Card
      as="a"
      href={`https://${app.domain}`}
      target="_blank"
      rel="noopener"
      cursor="pointer"
      bgGradient={style.bgGradient}
      borderWidth="2px"
      borderColor={style.borderColor}
      boxShadow="lg"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: '2xl',
        borderColor: accent,
        bgGradient: style.hoverBgGradient,
        textDecoration: 'none'
      }}
    >
      <CardBody>
        <VStack spacing={3} align="stretch" height="100%">
          <HStack spacing={3}>
            <Image src={icon} alt="" boxSize={{ base: 10, md: 12 }} flexShrink={0} />
            <Heading size={{ base: 'sm', md: 'md' }} bgGradient={style.headingGradient} bgClip="text" flex={1}>
              {app.title}
            </Heading>
            {app.badge && <Badge text={app.badge} scheme="blue" />}
          </HStack>
          <Text fontSize="sm" color={style.textColor}>
            {app.description}
          </Text>
          <HStack spacing={1} marginTop="auto" color={accent} fontSize="sm" fontWeight="semibold">
            <Text>{app.domain}</Text>
            <Icon as={MdArrowOutward} boxSize={4} />
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
};

// Ecosystem Card - a smaller card for the apps outside the BeeZee app family
interface EcosystemCardProps {
  title: string;
  description: string;
  url: string;
  logo: string;
  badge?: string;
}

const EcosystemCard = ({ title, description, url, logo, badge }: EcosystemCardProps) => {
  const style = useCardStyle();
  const hoverBorderColor = useColorModeValue('blue.300', 'blue.500');
  const iconColor = useColorModeValue('blue.500', 'blue.300');

  return (
    <Card
      as="a"
      href={url}
      target="_blank"
      rel="noopener"
      cursor="pointer"
      bgGradient={style.bgGradient}
      borderWidth="2px"
      borderColor={style.borderColor}
      boxShadow="md"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'xl',
        borderColor: hoverBorderColor,
        bgGradient: style.hoverBgGradient,
        textDecoration: 'none'
      }}
    >
      <CardBody py={4} display="flex" alignItems="center">
        <HStack spacing={3} width="100%">
          <Image src={logo} alt="" boxSize={8} flexShrink={0} />
          <VStack spacing={0} align="start" flex={1}>
            <HStack spacing={2}>
              <Heading size="sm">{title}</Heading>
              {badge && <Badge text={badge} scheme="orange" />}
            </HStack>
            <Text fontSize="sm" color={style.textColor}>{description}</Text>
          </VStack>
          <Icon as={MdArrowOutward} boxSize={5} color={iconColor} flexShrink={0} />
        </HStack>
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
  const dexIcon = useAppIcon("dex");
  const moreColor = useColorModeValue('gray.600', 'gray.400');
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
          {BEEZEE_APPS.map((app) => <AppCard key={app.key} app={app} />)}
        </SimpleGrid>
        <Text fontSize="sm" fontWeight="semibold" color={moreColor} pt={2}>More from the ecosystem</Text>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} width="100%">
          <EcosystemCard
            title="CoinTrunk"
            description="News and articles from trusted publishers, saved on the chain."
            url="https://cointrunk.io"
            logo="logos/cointrunk_logo.svg"
          />
          <EcosystemCard
            title="BZE App"
            description="The original all-in-one app. Still online, but the apps above do everything better."
            url="https://app.getbze.com"
            logo="icon-192.png"
            badge="Legacy"
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
          <QuickLink name="BZE DEX" url="https://dex.getbze.com" logo={dexIcon} />
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
