import {
    Box,
    Badge,
    Button,
    Card,
    CardBody,
    Flex,
    Grid,
    Heading,
    Icon,
    Link,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useColorModeValue,
    useDisclosure,
    VStack,
    HStack,
} from "@chakra-ui/react";
import {Subtitle, colors} from "../common";
import {MdBuild, MdCheckCircle, MdOutlineAccessTime, MdPauseCircle} from "react-icons/md";
import {useState} from "react";

const statusSuccess = 2;
const statusInProgress = 1;
const statusWaiting = 0;
const statusPostponed = -1;

interface RoadmapItemData {
    id: string;
    title: string;
    status: number;
    category?: string;
    children?: string[];
    description?: string;
    details?: string[];
    link?: string;
    quarter?: string;
    version?: string;
}

interface RoadmapItemProps {
    item: RoadmapItemData;
    onClick: () => void;
}

const StatusBadge = ({status}: { status: number }) => {
    const grayGradient = useColorModeValue(
        'linear(to-r, gray.100, gray.200)',
        'linear(to-r, gray.700, gray.600)'
    );
    const greenGradient = useColorModeValue(
        'linear(to-r, green.100, green.200)',
        'linear(to-r, green.700, green.600)'
    );
    const orangeGradient = useColorModeValue(
        'linear(to-r, orange.100, orange.200)',
        'linear(to-r, orange.700, orange.600)'
    );
    const redGradient = useColorModeValue(
        'linear(to-r, red.100, red.200)',
        'linear(to-r, red.700, red.600)'
    );
    const textColor = useColorModeValue('gray.800', 'white');

    let label = "Planned";
    let bgGradient = grayGradient;

    switch (status) {
        case statusSuccess:
            label = "Completed";
            bgGradient = greenGradient;
            break;
        case statusInProgress:
            label = "In Progress";
            bgGradient = orangeGradient;
            break;
        case statusPostponed:
            label = "Postponed";
            bgGradient = redGradient;
            break;
    }

    return (
        <Badge
            bgGradient={bgGradient}
            color={textColor}
            px={3}
            py={1}
            borderRadius="full"
            fontSize="xs"
            fontWeight="bold"
            textTransform="uppercase"
        >
            {label}
        </Badge>
    );
};

const RoadmapItemCard = ({item, onClick}: RoadmapItemProps) => {
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

    let icon = MdOutlineAccessTime;
    let iconColor = colors.status.fail;

    switch (item.status) {
        case statusSuccess:
            iconColor = colors.status.success;
            icon = MdCheckCircle;
            break;
        case statusInProgress:
            iconColor = colors.status.inProgress;
            icon = MdBuild;
            break;
        case statusPostponed:
            iconColor = "red.400";
            icon = MdPauseCircle;
            break;
    }

    return (
        <Card
            cursor="pointer"
            onClick={onClick}
            bgGradient={bgGradient}
            borderWidth="2px"
            borderColor={borderColor}
            boxShadow="md"
            transition="all 0.3s ease"
            _hover={{
                transform: 'translateY(-8px)',
                boxShadow: '2xl',
                borderColor: hoverBorderColor,
                bgGradient: hoverBgGradient
            }}
        >
            <CardBody>
                <HStack spacing={3} align="start">
                    <Icon as={icon} boxSize={6} color={iconColor} mt={1}/>
                    <VStack align="start" spacing={2} flex={1}>
                        <HStack justify="space-between" width="100%" flexWrap="wrap" gap={2}>
                            <Heading size="sm" flex={1}>{item.title}</Heading>
                            <HStack spacing={2}>
                                <StatusBadge status={item.status}/>
                            </HStack>
                        </HStack>
                        <HStack>

                            {item.version && (
                                <Badge
                                    colorScheme={item.version.startsWith("v9") ? "pink" : "purple"}
                                    variant="solid"
                                    px={2}
                                    py={1}
                                    borderRadius="md"
                                    fontSize="xs"
                                >
                                    {item.version}
                                </Badge>
                            )}
                            {item.quarter && (
                                <Badge
                                    colorScheme="cyan"
                                    variant="outline"
                                    px={2}
                                    py={1}
                                    borderRadius="md"
                                    fontSize="xs"
                                    fontWeight="bold"
                                >
                                    {item.quarter}
                                </Badge>
                            )}
                        </HStack>
                    </VStack>
                </HStack>
            </CardBody>
        </Card>
    );
};

const RoadmapDetailModal = ({item, isOpen, onClose}: {
    item: RoadmapItemData | null,
    isOpen: boolean,
    onClose: () => void
}) => {
    const modalBgGradient = useColorModeValue(
        'linear(to-br, white, blue.50)',
        'linear(to-br, gray.800, blue.900)'
    );
    const modalBorderColor = useColorModeValue('blue.200', 'blue.600');
    const headingGradient = useColorModeValue(
        'linear(to-r, blue.600, cyan.500)',
        'linear(to-r, blue.300, cyan.300)'
    );

    if (!item) return null;

    return (
        <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered>
            <ModalOverlay backdropFilter="blur(4px)"/>
            <ModalContent
                bgGradient={modalBgGradient}
                borderWidth="2px"
                borderColor={modalBorderColor}
            >
                <ModalHeader>
                    <VStack align="start" spacing={2}>
                        <Heading
                            size="md"
                            bgGradient={headingGradient}
                            bgClip="text"
                        >
                            {item.title}
                        </Heading>
                        <StatusBadge status={item.status}/>
                    </VStack>
                </ModalHeader>
                <ModalCloseButton/>
                <ModalBody pb={6}>
                    <VStack align="start" spacing={4}>
                        {item.description && (
                            <Text fontSize="md" fontWeight="medium">
                                {item.description}
                            </Text>
                        )}
                        {item.details && item.details.map((detail, idx) => (
                            <Text key={idx} fontSize="sm">
                                {detail}
                            </Text>
                        ))}
                        {item.children && item.children.length > 0 && (
                            <Box>
                                <Heading size="sm" mb={2}>Key Features:</Heading>
                                <VStack align="start" spacing={1}>
                                    {item.children.map((child, idx) => (
                                        <Text key={idx} fontSize="sm">
                                            • {child}
                                        </Text>
                                    ))}
                                </VStack>
                            </Box>
                        )}
                        {item.link && (
                            <Button
                                as={Link}
                                href={item.link}
                                target="_blank"
                                size="sm"
                                bgGradient="linear(to-r, blue.500, cyan.500)"
                                color="white"
                                _hover={{
                                    bgGradient: "linear(to-r, blue.600, cyan.600)",
                                    textDecoration: 'none'
                                }}
                            >
                                Learn More
                            </Button>
                        )}
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

const YearTabPanel = ({items}: { items: RoadmapItemData[] }) => {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [selectedItem, setSelectedItem] = useState<RoadmapItemData | null>(null);

    const handleItemClick = (item: RoadmapItemData) => {
        setSelectedItem(item);
        onOpen();
    };

    return (
        <TabPanel px={0}>
            <Grid
                templateColumns={{
                    base: '1fr',
                    md: 'repeat(2, 1fr)',
                    lg: 'repeat(3, 1fr)'
                }}
                gap={4}
            >
                {items.map((item) => (
                    <RoadmapItemCard
                        key={item.id}
                        item={item}
                        onClick={() => handleItemClick(item)}
                    />
                ))}
            </Grid>
            <RoadmapDetailModal item={selectedItem} isOpen={isOpen} onClose={onClose}/>
        </TabPanel>
    );
};

// Roadmap data structure - you can expand descriptions later
const roadmapData: Record<string, RoadmapItemData[]> = {
    "2023": [
        {
            id: "2023-1",
            title: "BZE Blockchain: v6 Upgrade - CoinTrunk Module",
            status: statusSuccess,
            version: "v6.0.0",
            quarter: "Q1",
            description: "Major blockchain upgrade introducing the CoinTrunk module for decentralized content sharing.",
            details: [
                "This upgrade brought decentralized news and content sharing capabilities to the BeeZee blockchain. The CoinTrunk module allows trusted publishers to share content from verified domains, with all shared content permanently stored on-chain.",
                "The system supports both free and paid articles, with pricing and publisher permissions managed through blockchain governance. This ensures complete transparency and community control over what content is shared and how it's monetized."
            ]
        },
        {
            id: "2023-2",
            title: "Burning event: 150M $BZE Burned",
            status: statusSuccess,
            quarter: "Q2",
            description: "Historic token burn reducing total supply by 150 million BZE coins.",
            details: [
                "This massive burning event permanently removed 150 million BZE tokens from circulation, significantly reducing the total supply and demonstrating the community's commitment to long-term value creation.",
                "The burn was executed through a transparent on-chain transaction, with all burned tokens sent to an unrecoverable address. This deflationary action helps maintain scarcity and supports long-term price stability."
            ]
        },
        {
            id: "2023-3",
            title: "CoinTrunk.io: Website & Web Application",
            status: statusSuccess,
            quarter: "Q3",
            description: "Launch of CoinTrunk.io web platform for accessing decentralized news.",
            details: [
                "The CoinTrunk web application provides a user-friendly interface for accessing blockchain-stored content. Users can browse, read, and interact with articles published through the CoinTrunk module.",
                "The platform features a modern design, seamless wallet integration, and support for multiple blockchains, making decentralized content accessible to everyone."
            ],
            link: "https://cointrunk.io"
        },
        {
            id: "2023-4",
            title: "BZE Website: Revamp",
            status: statusSuccess,
            quarter: "Q3",
            description: "Complete redesign of the BZE website with improved UX and information architecture.",
            details: [
                "The website revamp brought a modern, user-friendly design that better showcases the BeeZee ecosystem and its features. Improved navigation and clear information hierarchy help visitors quickly understand what BZE offers."
            ]
        },
        {
            id: "2023-5",
            title: "BZE Blockchain: v6.1 Upgrade - Small improvements & dependencies upgrades",
            status: statusSuccess,
            version: "v6.1",
            quarter: "Q4",
            description: "Maintenance upgrade with performance improvements and security updates.",
            details: [
                "This upgrade focused on improving blockchain stability and performance through dependency updates and various small enhancements. It ensured the network remained secure and efficient while laying groundwork for future features."
            ]
        }
    ],
    "2024": [
        {
            id: "2024-1",
            title: "CoinTrunk.io: Mobile App Internal Testing",
            status: statusSuccess,
            quarter: "Q1",
            description: "Rigorous internal testing phase for the CoinTrunk mobile application.",
            details: [
                "The mobile app underwent extensive testing to ensure stability, security, and user experience quality before public release. This phase included functionality testing, security audits, and UX refinements."
            ]
        },
        {
            id: "2024-2",
            title: "Burning event: 29M $BZE Burned",
            status: statusSuccess,
            quarter: "Q1",
            description: "Community-driven token burn removing 29 million BZE from circulation.",
            details: [
                "Another successful burning event demonstrating the community's ongoing commitment to deflationary tokenomics and long-term value preservation."
            ]
        },
        {
            id: "2024-3",
            title: "CoinTrunk.io: Mobile App Release for Android",
            status: statusSuccess,
            quarter: "Q2",
            description: "Public launch of CoinTrunk mobile app for Android devices.",
            details: [
                "The Android app brings decentralized content and multi-chain wallet functionality to mobile users, featuring an intuitive interface and secure key management."
            ],
            link: "https://cointrunk.io"
        },
        {
            id: "2024-4",
            title: "CoinTrunk.io: List Osmosis, Jackal, Celestia on Mobile",
            status: statusSuccess,
            quarter: "Q2",
            description: "Expanded blockchain support with major Cosmos ecosystem integrations.",
            details: [
                "Added support for multiple major Cosmos chains, allowing users to manage assets from Osmosis, Jackal, and Celestia directly within the CoinTrunk mobile app."
            ]
        },
        {
            id: "2024-5",
            title: "BZE Blockchain: v7 Upgrade - Token Factory, Rewards and DEX",
            status: statusSuccess,
            version: "v7.0.0",
            quarter: "Q3",
            description: "Revolutionary upgrade introducing permissionless token creation and decentralized trading.",
            details: [
                "This major upgrade transformed BeeZee into a complete DeFi platform with three groundbreaking features: Token Factory for anyone to create tokens without coding, a Rewards system for incentivizing community engagement, and an order-book DEX for decentralized trading.",
                "The Token Factory enables users to launch tokens in seconds with customizable parameters. The Rewards module lets token creators incentivize staking and trading, while the DEX provides efficient order-book trading at minimal cost."
            ],
            link: "https://dex.getbze.com"
        },
        {
            id: "2024-6",
            title: "BZE dApp: Initial release including Token Factory, Rewards and Burner",
            status: statusSuccess,
            description: "Launch of the BZE web application for interacting with new blockchain features.",
            details: [
                "The dApp provides a comprehensive interface for accessing all BZE blockchain features, including token creation, rewards management, and the burning mechanism. Built with modern web technologies for optimal performance and user experience."
            ],
            link: "https://dex.getbze.com",
            quarter: "Q3",
        },
        {
            id: "2024-7",
            title: "Partnerships: VDL migration to BZE",
            status: statusSuccess,
            description: "Strategic partnership bringing the Vidulum ecosystem to BeeZee.",
            details: [
                "Vidulum's migration to BZE strengthens both ecosystems, bringing additional users, liquidity, and development expertise to the BeeZee network."
            ],
            quarter: "Q3",
        },
        {
            id: "2024-8",
            title: "BZE Website: New website release",
            status: statusSuccess,
            description: "Launch of completely redesigned website showcasing the evolved BZE ecosystem.",
            details: [
                "The new website features modern design, comprehensive information about all BZE features, and improved user journey for both newcomers and experienced crypto users."
            ],
            quarter: "Q3",
        },
        {
            id: "2024-9",
            title: "BZE dApp: Open DEX Trading",
            status: statusSuccess,
            description: "Public launch of decentralized exchange for permissionless trading.",
            details: [
                "The DEX went live with full trading functionality, allowing users to trade BZE and all tokens created on the network. Features include limit orders, market orders, and detailed trading charts."
            ],
            link: "https://dex.getbze.com",
            quarter: "Q3",
        },
        {
            id: "2024-10",
            title: "Marketing: Marketing Campaign",
            status: statusSuccess,
            description: "Comprehensive marketing initiative to grow the BZE community.",
            details: [
                "Multi-channel marketing campaign including social media, partnerships, and community engagement initiatives to increase awareness and adoption of BZE."
            ],
            quarter: "Q4",
        },
        {
            id: "2024-11",
            title: "BZE Blockchain: v7.1 Upgrade - Burning Raffles & DEX improvements",
            status: statusSuccess,
            description: "Enhanced burning mechanism with gamification and DEX optimizations.",
            details: [
                "Introduced Burning Raffles, allowing users to burn BZE for a chance to win back a portion of burned tokens, making deflation more engaging. Also included various DEX performance and UX improvements."
            ],
            quarter: "Q4",
            version: "v7.1.0"
        },
        {
            id: "2024-12",
            title: "BZE dApp: Open Burning Raffles",
            status: statusSuccess,
            description: "Launch of gamified token burning mechanism.",
            details: [
                "Users can now participate in burning raffles, adding an element of excitement to the deflationary mechanics while contributing to reduced token supply."
            ],
            link: "https://burner.getbze.com",
            quarter: "Q4",
        },
        {
            id: "2024-13",
            title: "BZE dApp: DEX Aggregator & API",
            status: statusSuccess,
            description: "Advanced trading tools including aggregator and public API access.",
            details: [
                "The DEX aggregator finds the best prices across markets, while the API enables third-party integrations and trading bot development."
            ],
            quarter: "Q4",
        },
        {
            id: "2024-14",
            title: "BZE dApp: DEX Listing on CoinGecko & LiveCoinWatch",
            status: statusSuccess,
            description: "Major visibility boost through listings on top crypto tracking platforms.",
            details: [
                "BZE DEX and token listings on CoinGecko and LiveCoinWatch provide increased visibility, price tracking, and credibility within the broader crypto ecosystem."
            ],
            quarter: "Q4",
        },
        {
            id: "2024-15",
            title: "BZE Blockchain: 2025 Roadmap",
            status: statusSuccess,
            description: "Community-driven roadmap planning for 2025 developments.",
            details: [
                "Comprehensive planning session with community input to define 2025 priorities and development goals."
            ],
            quarter: "Q4",
        }
    ],
    "2025": [
        {
            id: "2025-1",
            title: "BZE Blockchain: Blockchain Upgrade",
            status: statusSuccess,
            children: [
                "Market buy/sell feature",
                "Improve DEX events",
                "Burn BZE every 4 weeks",
                "Add Amino support for Ledger"
            ],
            description: "Comprehensive blockchain upgrade with trading improvements and enhanced hardware wallet support.",
            details: [
                "This upgrade introduces market buy/sell functionality for easier trading, improved event handling for better DEX performance, automated monthly burning for consistent deflationary pressure, and Ledger hardware wallet support for enhanced security.",
                "The market orders feature simplifies trading for users who want instant execution, while the automated burning mechanism ensures regular supply reduction without manual intervention."
            ],
            quarter: "Q1",
            version: "v7.2.0"
        },
        {
            id: "2025-2",
            title: "BZE dApp: Improvements",
            status: statusSuccess,
            children: [
                "Improve Market & Assets page",
                "Add \"Cancel All\" on user orders",
                "Bulk buy/sell"
            ],
            description: "Major UX improvements to the trading interface and order management.",
            details: [
                "Enhanced market and assets pages provide better visualization of trading data and portfolio management. The bulk order features and cancel all functionality make managing multiple positions much more efficient for active traders."
            ],
            quarter: "Q1",
        },
        {
            id: "2025-3",
            title: "Others: Staking Page",
            status: statusSuccess,
            description: "Dedicated staking information and management page.",
            details: [
                "A comprehensive staking page providing all information about validators, rewards, and staking mechanisms in one convenient location."
            ],
            link: "https://staking.getbze.com",
            quarter: "Q2",
        },
        {
            id: "2025-4",
            title: "BZE dApp: Enable Ledger",
            status: statusSuccess,
            description: "Integration of Ledger hardware wallet support for enhanced security.",
            details: [
                "Users can now securely manage their BZE assets using Ledger hardware wallets, providing enterprise-grade security for token holders."
            ],
            quarter: "Q2",
        },
        {
            id: "2025-5",
            title: "BZE dApp: Bulk Buy/Sell",
            status: statusSuccess,
            description: "Advanced trading feature for executing multiple orders simultaneously.",
            details: [
                "Traders can now place multiple buy or sell orders at once, significantly improving efficiency for market makers and active traders."
            ],
            quarter: "Q2",
        },
        {
            id: "2025-6",
            title: "BZE Blockchain: Blockchain Upgrade",
            status: statusSuccess,
            children: [
                "Cosmos SDK upgrade to 0.50",
                "AMM Liquidity Pools",
                "TX Fee module"
            ],
            version: "v8.0.0",
            description: "Major infrastructure upgrade with AMM DEX capabilities.",
            details: [
                "This critical upgrade brings the blockchain to the latest Cosmos SDK version, introducing automated market-making liquidity pools alongside the existing order book DEX, and implementing a flexible transaction fee system.",
                "The AMM pools enable passive liquidity provision and simpler trading experiences, while the SDK upgrade ensures long-term compatibility and access to the latest Cosmos ecosystem features."
            ],
            quarter: "Q4",
            link: "https://medium.com/bzedge-community/bze-status-update-nov-20-2025-introducing-the-v8-upgrade-5cdfc70c5e98"
        },
        {
            id: "2025-7",
            title: "Burner & Raffles App release",
            status: statusSuccess,
            description: "Standalone application for burning mechanics and raffle participation.",
            details: [
                "A dedicated app focused on the burning ecosystem, providing streamlined access to burning raffles and related features with an optimized user interface."
            ],
            quarter: "Q4",
        },
        {
            id: "2025-8",
            title: "New DEX App release",
            status: statusSuccess,
            description: "Next-generation trading platform with advanced features and improved UX.",
            details: [
                "A completely redesigned DEX application featuring enhanced charting, advanced order types, better performance, and a more intuitive trading experience for both beginners and professional traders."
            ],
            quarter: "Q4",
        },
    ],
    "2026": [
        {
            id: "2026-0",
            title: "CoinTrunk.io: New Website",
            status: statusSuccess,
            description: "Complete redesign of the CoinTrunk.io web platform.",
            details: [
                "A fresh, modern website design for CoinTrunk with improved content discovery, better mobile experience, and enhanced integration with the blockchain features."
            ],
            link: "https://cointrunk.io",
            quarter: "Q1",
        },
        {
            id: "2026-audit",
            title: "BZE Blockchain: Security Audit",
            status: statusSuccess,
            description: "Comprehensive security audit of the BeeZee blockchain by a top blockchain auditing firm.",
            details: [
                "The BeeZee blockchain was audited by Oak Security, a leading blockchain auditing company. The audit covered all core modules, consensus mechanisms, and on-chain functionality to ensure the highest level of security and reliability for our users."
            ],
            link: "https://medium.com/bzedge-community/bze-code-audited-by-oak-security-51f1c093477e",
            quarter: "Q1",
        },
        {
            id: "2026-0-1",
            title: "BZE Blockchain: Blockchain upgrade",
            status: statusSuccess,
            children: [
                "Security patches",
                "Various improvements"
            ],
            description: "Security and stability upgrade laying the groundwork for future development.",
            details: [
                "This upgrade focuses on applying critical security patches and various improvements that lay the foundation for upcoming features and enhancements across the blockchain."
            ],
            quarter: "Q2",
            version: "v8.1.0"
        },
        {
            id: "2026-0-3",
            title: "Factory App release",
            status: statusSuccess,
            description: "Dedicated application for token creation and management.",
            details: [
                "A specialized app focusing on the token factory features, making it even easier to create, configure, and manage custom tokens with an intuitive step-by-step interface.",
                "Creators can create tokens, open DEX markets, create liquidity pools with their chosen swap fees, set up staking rewards and manage everything they created in one place. More tools will follow as new chain features launch."
            ],
            link: "https://factory.getbze.com",
            quarter: "Q3",
        },
        {
            id: "2026-hub",
            title: "BZE Hub: Desktop App",
            status: statusInProgress,
            description: "Desktop app that runs its own BZE node, so BZE keeps working even when public endpoints are down.",
            details: [
                "BZE Hub brings the BZE apps to your desktop and runs its own node in the background, so you are never dependent on public endpoints.",
                "It already covers portfolio, send and receive, swaps, a trading terminal and liquidity pools. Staking and earning come next."
            ],
        },
        {
            id: "2026-explorer",
            title: "BZE Explorer",
            status: statusInProgress,
            description: "A block explorer built specifically for BeeZee.",
            details: [
                "A BZE-specific explorer that explains DEX, burner, rewards and token activity in plain language, with a layout familiar to users coming from other ecosystems.",
                "It is built to grow with the chain, so every new feature can be shown the way it deserves instead of as raw transaction data."
            ],
        },
        {
            id: "2026-2",
            title: "BZE Blockchain: Blockchain Upgrade",
            status: statusInProgress,
            children: [
                "Denom Rewards: staking pools for any token",
                "On-chain token branding",
                "Governance trading halt for tokens",
                "Noble USDC wind-down"
            ],
            description: "Denom Rewards, on-chain token branding and the Noble USDC wind-down.",
            details: [
                "Denom Rewards: every token on BZE can have its own staking pool that pays stakers in any token, up to 50 prize tokens at a time. Anyone can fund a pool, either as a daily campaign or as a one-time airdrop.",
                "On-chain token branding: token admins can store a font and light/dark colour palettes on-chain, so every app shows the token with the same identity. This powers the branded token pages of the Communities app.",
                "Governance trading halt: governance can halt trading of a token that loses its backing, while withdrawals, order cancellations and transfers keep working.",
                "Noble USDC wind-down: Circle is retiring USDC on Noble. The upgrade stops accepting new Noble USDC and moves the protocol-owned USDC/BZE liquidity to USDC issued on Injective.",
                "Also included: anyone can clean up finished staking rewards, the latest CometBFT security updates and richer DEX events for indexers and the upcoming explorer. Already live on testnet."
            ],
            link: "https://medium.com/bzedge-community/bze-status-update-oct-8-2026-39e51d830cdd",
            quarter: "Q4",
            version: "v8.2.0"
        },
        {
            id: "2026-5",
            title: "Token Community Page release",
            status: statusInProgress,
            description: "A branded, standalone page for every token on BZE, with everything its community needs in one place.",
            details: [
                "Every token gets its own page styled with its on-chain brand colours and font, featuring key numbers, token details and a wallet that shows your balance and positions in that token, with Claim all, Send and a quick way to get the token from anything you hold.",
                "Holders can stake in the token's holders pool and fixed-term programs, discover other ways to earn the token, trade it with an instant swap backed by a price chart, add and remove liquidity in its pools, and follow burns and burning raffles - all without leaving the page.",
                "Tokens with enough liquidity pay network fees in the token itself by default. A searchable token directory with filters and sorting helps you discover projects. Already completed and currently being tested on testnet."
            ],
            quarter: "Q4",
        },
        {
            id: "2026-0-2",
            title: "CoinTrunk.io: Payment Processor",
            status: statusInProgress,
            description: "Payment processing solution for accepting BeeZee blockchain assets.",
            details: [
                "Accept BZE and BeeZee blockchain assets with ease. A simple, powerful payment solution for merchants and businesses in the Web3 ecosystem."
            ],
            quarter: "Q4",
        },
        {
            id: "2026-1",
            title: "BZE DEX: Open Trading Rewards",
            status: statusWaiting,
            description: "Launch of trading rewards program to incentivize DEX liquidity.",
            details: [
                "A comprehensive rewards system that incentivizes active trading on the DEX, distributing rewards to top traders and liquidity providers to ensure deep markets and tight spreads.",
                "The program can be customized by token creators to bootstrap liquidity for their own markets, creating a thriving trading ecosystem."
            ],
            quarter: "Q4",
        },
        {
            id: "2026-3",
            title: "BZE Blockchain: Blockchain Upgrade",
            status: statusWaiting,
            children: [
                "Cosmos SDK 0.53 & IBC v10",
                "Native DAO module",
                "Airdrops to address lists & holder snapshots",
                "Governance-assigned token admins"
            ],
            description: "Core infrastructure upgrade plus native DAOs and new airdrop tools.",
            details: [
                "Moves the chain to Cosmos SDK 0.53 and IBC v10, keeping BeeZee on a supported, security-maintained foundation. Unused modules are removed to keep the chain lean.",
                "Native DAO module: communities can create DAOs with a fixed list of members or with voting power based on staking, submit and vote on proposals, and manage a shared treasury.",
                "Airdrops can be sent to a list of addresses or to a snapshot of a token's holders.",
                "Governance can assign a new admin to any factory token, including tokens whose admin was renounced, so a token can be handed over to its DAO.",
                "Every upgrade is now validated by a full end-to-end test suite that runs the real chain software before release."
            ],
            quarter: "Q4",
            version: "v8.3.0"
        },
        {
            id: "2026-next",
            title: "BZE Blockchain: Blockchain Upgrade",
            status: statusWaiting,
            children: [
                "BZE Max supply to 400M",
                "Compounded Staking Rewards",
                "Token Addon: Fees & Distribution",
                "Token Addon: Community Pool",
                "DEX engine performance improvements"
            ],
            description: "The next upgrade after v8.3.0, most likely before the end of the year.",
            details: [
                "These are the features currently on our list for the upgrade following v8.3.0. The final scope is not set yet: some of them might be moved to a later release and new ones might be added.",
                "A hard cap at 400 million BZE tokens, as approved by governance, ensuring absolute scarcity and predictable supply.",
                "Auto-compounding staking rewards, plus token addons that let creators implement custom transfer fees distributed to stakers, liquidity providers or any specified recipients, and a community pool for funding development and marketing.",
                "Further performance improvements to the DEX engine."
            ],
            quarter: "Q4",
            version: "TBA"
        },
        {
            id: "2026-6",
            title: "CoinTrunk.io: Mobile App",
            status: statusPostponed,
            description: "CoinTrunk mobile app development including iOS release, WalletConnect integration, and app revamp.",
            details: [
                "The CoinTrunk mobile app plans have been postponed. This includes the iOS release, WalletConnect integration for dApp connections, and a complete app redesign with unified wallet interface and streamlined experience."
            ],
            link: "https://cointrunk.io",
        },
        {
            id: "2026-8",
            title: "BZE Blockchain: Blockchain Upgrade - Tokens Addons Phase 2",
            status: statusWaiting,
            children: [
                "Minable Tokens",
                "Mining software release"
            ],
            description: "Introduction of CPU-minable token creation capabilities.",
            details: [
                "Token creators can make their tokens minable, allowing users to earn tokens through CPU mining. Mining power can be purchased with BZE or other tokens, creating new economic models and engagement mechanisms.",
                "Complete mining software and tools are provided out-of-the-box, making it easy for projects to launch mineable tokens without technical expertise."
            ],
            version: "v9.0.0"
        },
        {
            id: "2026-roadmap-2027",
            title: "Roadmap 2027",
            status: statusWaiting,
            description: "The BZE roadmap for 2027.",
            details: [
                "Our plans for 2027, including major infrastructure upgrades, new tokenomics features and more, will be published here. Stay tuned for more details!"
            ],
            quarter: "Q4",
        },
    ]
};

export const Roadmap = () => {
    const tabBgGradient = useColorModeValue(
        'linear(to-br, white, blue.50)',
        'linear(to-br, gray.800, blue.900)'
    );
    const tabBorderColor = useColorModeValue('blue.100', 'blue.700');
    const selectedTabColor = useColorModeValue('blue.600', 'blue.300');
    const selectedTabBgGradient = useColorModeValue(
        'linear(to-b, blue.50, transparent)',
        'linear(to-b, blue.900, transparent)'
    );

    return (
        <Flex margin={{base: 4, md: 15}} flex={1} flexDirection={'column'} alignItems={'center'} gap={10} flexWrap={'wrap'} id="roadmap">
            <Box mt={45}>
                <Subtitle text="Roadmap" color={useColorModeValue(colors.colorDark, colors.colorLight)}/>
            </Box>
            <Box textAlign={'center'} maxW={'900px'}>
                <Text py={2}>
                    Explore our journey of continuous innovation and development. Click on any item to learn more about
                    what we've accomplished and what's coming next. Our roadmap reflects our commitment to building the
                    most comprehensive and user-friendly DeFi ecosystem.
                </Text>
            </Box>
            <Card
                width="100%"
                maxW="1400px"
                bgGradient={tabBgGradient}
                borderWidth="2px"
                borderColor={tabBorderColor}
                boxShadow="2xl"
                overflow="hidden"
                p={0}
            >
                <Tabs variant='enclosed' defaultIndex={3} isFitted>
                    <TabList>
                        {["2023", "2024", "2025", "2026"].map((year) => (
                            <Tab
                                key={year}
                                fontSize={{base: 'sm', md: 'md'}}
                                px={{base: 2, md: 4}}
                                _selected={{
                                    color: selectedTabColor,
                                    borderColor: tabBorderColor,
                                    borderBottomColor: 'transparent',
                                    fontWeight: 'bold',
                                    bgGradient: selectedTabBgGradient
                                }}
                            >
                                {year}
                            </Tab>
                        ))}
                    </TabList>
                    <TabPanels p={{base: 2, md: 6}}>
                        <YearTabPanel items={roadmapData["2023"]}/>
                        <YearTabPanel items={roadmapData["2024"]}/>
                        <YearTabPanel items={roadmapData["2025"]}/>
                        <YearTabPanel items={roadmapData["2026"]}/>
                    </TabPanels>
                </Tabs>
            </Card>
        </Flex>
    );
};
