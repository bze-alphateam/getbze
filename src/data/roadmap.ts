// The public roadmap: the one source for the Home strip and the Roadmap page.
// Edit items here. Statuses are the five below; order inside a year is chronological.

export const DONE = 'done';
export const IN_PROGRESS = 'in-progress';
export const TESTING = 'testing';
export const PLANNED = 'planned';
export const POSTPONED = 'postponed';

export type RoadmapStatus = typeof DONE | typeof IN_PROGRESS | typeof TESTING | typeof PLANNED | typeof POSTPONED;

export interface RoadmapItem {
    id: string;
    title: string;
    status: RoadmapStatus;
    category?: string;
    children?: string[];
    description?: string;
    details?: string[];
    quarter?: string;
    version?: string;
}

export const roadmapData: Record<string, RoadmapItem[]> = {
    "2023": [
        {
            id: "2023-1",
            title: "BZE Blockchain: v6 Upgrade - CoinTrunk Module",
            status: DONE,
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
            status: DONE,
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
            status: DONE,
            quarter: "Q3",
            description: "Launch of CoinTrunk.io web platform for accessing decentralized news.",
            details: [
                "The CoinTrunk web application provides a user-friendly interface for accessing blockchain-stored content. Users can browse, read, and interact with articles published through the CoinTrunk module.",
                "The platform features a modern design, seamless wallet integration, and support for multiple blockchains, making decentralized content accessible to everyone."
            ],
        },
        {
            id: "2023-4",
            title: "BZE Website: Revamp",
            status: DONE,
            quarter: "Q3",
            description: "Complete redesign of the BZE website with improved UX and information architecture.",
            details: [
                "The website revamp brought a modern, user-friendly design that better showcases the BeeZee ecosystem and its features. Improved navigation and clear information hierarchy help visitors quickly understand what BZE offers."
            ]
        },
        {
            id: "2023-5",
            title: "BZE Blockchain: v6.1 Upgrade - Small improvements & dependencies upgrades",
            status: DONE,
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
            status: DONE,
            quarter: "Q1",
            description: "Rigorous internal testing phase for the CoinTrunk mobile application.",
            details: [
                "The mobile app underwent extensive testing to ensure stability, security, and user experience quality before public release. This phase included functionality testing, security audits, and UX refinements."
            ]
        },
        {
            id: "2024-2",
            title: "Burning event: 29M $BZE Burned",
            status: DONE,
            quarter: "Q1",
            description: "Community-driven token burn removing 29 million BZE from circulation.",
            details: [
                "Another successful burning event demonstrating the community's ongoing commitment to deflationary tokenomics and long-term value preservation."
            ]
        },
        {
            id: "2024-3",
            title: "CoinTrunk.io: Mobile App Release for Android",
            status: DONE,
            quarter: "Q2",
            description: "Public launch of CoinTrunk mobile app for Android devices.",
            details: [
                "The Android app brings decentralized content and multi-chain wallet functionality to mobile users, featuring an intuitive interface and secure key management."
            ],
        },
        {
            id: "2024-4",
            title: "CoinTrunk.io: List Osmosis, Jackal, Celestia on Mobile",
            status: DONE,
            quarter: "Q2",
            description: "Expanded blockchain support with major Cosmos ecosystem integrations.",
            details: [
                "Added support for multiple major Cosmos chains, allowing users to manage assets from Osmosis, Jackal, and Celestia directly within the CoinTrunk mobile app."
            ]
        },
        {
            id: "2024-5",
            title: "BZE Blockchain: v7 Upgrade - Token Factory, Rewards and DEX",
            status: DONE,
            version: "v7.0.0",
            quarter: "Q3",
            description: "Revolutionary upgrade introducing permissionless token creation and decentralized trading.",
            details: [
                "This major upgrade transformed BeeZee into a complete DeFi platform with three groundbreaking features: Token Factory for anyone to create tokens without coding, a Rewards system for incentivizing community engagement, and an order-book DEX for decentralized trading.",
                "The Token Factory enables users to launch tokens in seconds with customizable parameters. The Rewards module lets token creators incentivize staking and trading, while the DEX provides efficient order-book trading at minimal cost."
            ],
        },
        {
            id: "2024-6",
            title: "BZE dApp: Initial release including Token Factory, Rewards and Burner",
            status: DONE,
            description: "Launch of the BZE web application for interacting with new blockchain features.",
            details: [
                "The dApp provides a comprehensive interface for accessing all BZE blockchain features, including token creation, rewards management, and the burning mechanism. Built with modern web technologies for optimal performance and user experience."
            ],
            quarter: "Q3",
        },
        {
            id: "2024-7",
            title: "Partnerships: VDL migration to BZE",
            status: DONE,
            description: "Strategic partnership bringing the Vidulum ecosystem to BeeZee.",
            details: [
                "Vidulum's migration to BZE strengthens both ecosystems, bringing additional users, liquidity, and development expertise to the BeeZee network."
            ],
            quarter: "Q3",
        },
        {
            id: "2024-8",
            title: "BZE Website: New website release",
            status: DONE,
            description: "Launch of completely redesigned website showcasing the evolved BZE ecosystem.",
            details: [
                "The new website features modern design, comprehensive information about all BZE features, and improved user journey for both newcomers and experienced crypto users."
            ],
            quarter: "Q3",
        },
        {
            id: "2024-9",
            title: "BZE dApp: Open DEX Trading",
            status: DONE,
            description: "Public launch of decentralized exchange for permissionless trading.",
            details: [
                "The DEX went live with full trading functionality, allowing users to trade BZE and all tokens created on the network. Features include limit orders, market orders, and detailed trading charts."
            ],
            quarter: "Q3",
        },
        {
            id: "2024-10",
            title: "Marketing: Marketing Campaign",
            status: DONE,
            description: "Comprehensive marketing initiative to grow the BZE community.",
            details: [
                "Multi-channel marketing campaign including social media, partnerships, and community engagement initiatives to increase awareness and adoption of BZE."
            ],
            quarter: "Q4",
        },
        {
            id: "2024-11",
            title: "BZE Blockchain: v7.1 Upgrade - Burning Raffles & DEX improvements",
            status: DONE,
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
            status: DONE,
            description: "Launch of gamified token burning mechanism.",
            details: [
                "Users can now participate in burning raffles, adding an element of excitement to the deflationary mechanics while contributing to reduced token supply."
            ],
            quarter: "Q4",
        },
        {
            id: "2024-13",
            title: "BZE dApp: DEX Aggregator & API",
            status: DONE,
            description: "Advanced trading tools including aggregator and public API access.",
            details: [
                "The DEX aggregator finds the best prices across markets, while the API enables third-party integrations and trading bot development."
            ],
            quarter: "Q4",
        },
        {
            id: "2024-14",
            title: "BZE dApp: DEX Listing on CoinGecko & LiveCoinWatch",
            status: DONE,
            description: "Major visibility boost through listings on top crypto tracking platforms.",
            details: [
                "BZE DEX and token listings on CoinGecko and LiveCoinWatch provide increased visibility, price tracking, and credibility within the broader crypto ecosystem."
            ],
            quarter: "Q4",
        },
        {
            id: "2024-15",
            title: "BZE Blockchain: 2025 Roadmap",
            status: DONE,
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
            status: DONE,
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
            status: DONE,
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
            status: DONE,
            description: "Dedicated staking information and management page.",
            details: [
                "A comprehensive staking page providing all information about validators, rewards, and staking mechanisms in one convenient location."
            ],
            quarter: "Q2",
        },
        {
            id: "2025-4",
            title: "BZE dApp: Enable Ledger",
            status: DONE,
            description: "Integration of Ledger hardware wallet support for enhanced security.",
            details: [
                "Users can now securely manage their BZE assets using Ledger hardware wallets, providing enterprise-grade security for token holders."
            ],
            quarter: "Q2",
        },
        {
            id: "2025-5",
            title: "BZE dApp: Bulk Buy/Sell",
            status: DONE,
            description: "Advanced trading feature for executing multiple orders simultaneously.",
            details: [
                "Traders can now place multiple buy or sell orders at once, significantly improving efficiency for market makers and active traders."
            ],
            quarter: "Q2",
        },
        {
            id: "2025-6",
            title: "BZE Blockchain: Blockchain Upgrade",
            status: DONE,
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
        },
        {
            id: "2025-7",
            title: "Burner & Raffles App release",
            status: DONE,
            description: "Standalone application for burning mechanics and raffle participation.",
            details: [
                "A dedicated app focused on the burning ecosystem, providing streamlined access to burning raffles and related features with an optimized user interface."
            ],
            quarter: "Q4",
        },
        {
            id: "2025-8",
            title: "New DEX App release",
            status: DONE,
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
            status: DONE,
            description: "Complete redesign of the CoinTrunk.io web platform.",
            details: [
                "A fresh, modern website design for CoinTrunk with improved content discovery, better mobile experience, and enhanced integration with the blockchain features."
            ],
            quarter: "Q1",
        },
        {
            id: "2026-audit",
            title: "BZE Blockchain: Security Audit",
            status: DONE,
            description: "Comprehensive two-phase security audit of the BeeZee blockchain by Oak Security.",
            details: [
                "The BeeZee blockchain was audited by Oak Security, a leading blockchain auditing company, in two phases covering the chain's core modules and on-chain functionality.",
                "All fixes from the audit are already live on mainnet, starting with the v8.1.0 upgrade. Going forward, the audited code is kept largely unchanged and is only modified when really needed.",
                "The full audit reports are public in Oak Security's audit-reports repository on GitHub."
            ],
            quarter: "Q1",
        },
        {
            id: "2026-0-1",
            title: "BZE Blockchain: Blockchain upgrade",
            status: DONE,
            children: [
                "Security patches",
                "All fees payable in other tokens",
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
            status: DONE,
            description: "Dedicated application for token creation and management.",
            details: [
                "A specialized app focusing on the token factory features, making it even easier to create, configure, and manage custom tokens with an intuitive step-by-step interface.",
                "Creators can create tokens, open DEX markets, create liquidity pools with their chosen swap fees, set up staking rewards and manage everything they created in one place. More tools will follow as new chain features launch."
            ],
            quarter: "Q3",
        },
        {
            id: "2026-explorer",
            title: "BZE Explorer",
            status: DONE,
            description: "A block explorer built specifically for BeeZee.",
            details: [
                "A BZE-specific explorer that explains DEX, burner, rewards and token activity in plain language, with a layout familiar to users coming from other ecosystems.",
                "It is built to grow with the chain, so every new feature can be shown the way it deserves instead of as raw transaction data.",
                "Live at explorer.getbze.com for mainnet, with a testnet explorer at testnet-explorer.getbze.com."
            ],
            quarter: "Q4",
        },
        {
            id: "2026-2",
            title: "BZE Blockchain: Blockchain Upgrade",
            status: DONE,
            children: [
                "Compounded staking rewards for any token",
                "On-chain token branding",
                "Governance trading halt for tokens",
                "Noble USDC wind-down"
            ],
            description: "Compounded staking rewards, on-chain token branding and the Noble USDC wind-down.",
            details: [
                "Compounded staking rewards: every token on BZE can have its own staking pool that pays stakers in any token, up to 50 prize tokens at a time. Anyone can fund a pool, either as a daily campaign or as a one-time airdrop.",
                "On-chain token branding: token admins can store a font and light/dark colour palettes on-chain, so every app shows the token with the same identity. This powers the branded token pages of the Communities app.",
                "Governance trading halt: governance can halt trading of a token that loses its backing, while withdrawals, order cancellations and transfers keep working.",
                "Noble USDC wind-down: Circle is retiring USDC on Noble. The upgrade stops accepting new Noble USDC and moves the protocol-owned USDC/BZE liquidity to USDC issued on Injective.",
                "Also included: anyone can clean up finished staking rewards, the latest CometBFT security updates and richer DEX events for indexers and the explorer.",
                "Live on mainnet since block height 25,263,600 (October 2026)."
            ],
            quarter: "Q4",
            version: "v8.2.0"
        },
        {
            id: "2026-5",
            title: "Token Community Page release",
            status: TESTING,
            description: "A branded, standalone page for every token on BZE, with everything its community needs in one place.",
            details: [
                "Every token gets its own page styled with its on-chain brand colours and font, featuring key numbers, token details and a wallet that shows your balance and positions in that token, with Claim all, Send and a quick way to get the token from anything you hold.",
                "Holders can stake in the token's holders pool and fixed-term programs, discover other ways to earn the token, trade it with an instant swap backed by a price chart, add and remove liquidity in its pools, and follow burns and burning raffles - all without leaving the page.",
                "Tokens with enough liquidity pay network fees in the token itself by default. A searchable token directory with filters and sorting helps you discover projects. Already completed and currently being tested on testnet."
            ],
            quarter: "Q4",
        },
        {
            id: "2026-rebrand",
            title: "BZE Apps: Unified Rebranding",
            status: DONE,
            description: "One visual identity across the whole suite of BeeZee apps.",
            details: [
                "Every BeeZee app - DEX, Staking, Burner, Factory, Communities and the Explorer - gets its own icon from a shared family and the same look and feel: one colour theme, the same typography, headers, buttons and drawers everywhere.",
                "Apps link to each other in a consistent way, so moving between trading, staking, burning and token management feels like using a single product instead of separate websites.",
                "The rebranded apps are complete and live."
            ],
            quarter: "Q4",
        },
        {
            id: "2026-0-2",
            title: "CoinTrunk.io: Payment Processor",
            status: IN_PROGRESS,
            description: "Payment processing solution for accepting BeeZee blockchain assets - currently in design.",
            details: [
                "Accept BZE and BeeZee blockchain assets with ease. A simple, powerful payment solution for merchants and businesses in the Web3 ecosystem.",
                "The payment processor is currently in the design phase. We are rethinking our strategy so that the product stays clear of regulatory and legal issues and does not require a MiCA license."
            ],
            quarter: "Q4",
        },
        {
            id: "2026-1",
            title: "BZE DEX: Open Trading Rewards",
            status: PLANNED,
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
            status: IN_PROGRESS,
            children: [
                "Cosmos SDK 0.53 & IBC v10",
                "Native DAO module",
                "Token Addons: Fees, Community Pool & Fixed Supply",
                "Faster order book",
                "IBC rate limiting",
                "Governance-assigned token admins"
            ],
            description: "Core infrastructure upgrade plus native DAOs, token addons and a faster order book.",
            details: [
                "Moves the chain to Cosmos SDK 0.53 and IBC v10, keeping BeeZee on a supported, security-maintained foundation. Unused modules are removed to keep the chain lean.",
                "Native DAO module: communities can create DAOs with a fixed list of members or with voting power based on staking, submit and vote on proposals, and manage a shared treasury.",
                "Token addons: creators can set custom transfer fees that go to their token's own community pool, to fund development and marketing, and can lock a token's supply so no more can ever be minted.",
                "Faster order book: orders are matched inside the transaction that places them instead of waiting for the end of the block, so trades settle right away.",
                "IBC rate limiting caps how much of a token can move in or out over IBC in a given period, limiting the damage if a connected chain is ever compromised.",
                "Governance can assign a new admin to any factory token, including tokens whose admin was renounced, so a token can be handed over to its DAO.",
                "Fixes and improvements across trading rewards, fee payments and the burner.",
                "Every upgrade is now validated by a full end-to-end test suite that runs the real chain software before release."
            ],
            quarter: "Q4",
            version: "v8.3.0"
        },
        {
            id: "2026-beepocket",
            title: "BeePocket: BeeZee Wallet",
            status: IN_PROGRESS,
            description: "BeePocket, the wallet built for BeeZee, launching first as a browser extension.",
            details: [
                "BeePocket is a self-custody wallet dedicated to the BeeZee blockchain: your keys stay on your device and only you control your funds.",
                "Made for BeeZee and its apps, so the DEX, staking, Factory, Burner and token community pages work together smoothly, with one wallet across all of them.",
                "The browser extension comes first. More platforms will follow later."
            ],
            quarter: "Q4"
        },
        {
            id: "2026-next",
            title: "BZE Blockchain: Blockchain Upgrade",
            status: PLANNED,
            description: "The next upgrade after v8.3.0. Details coming soon.",
            quarter: "Q4",
            version: "TBA"
        },
        {
            id: "2026-6",
            title: "CoinTrunk.io: Mobile App",
            status: POSTPONED,
            description: "CoinTrunk mobile app development including iOS release, WalletConnect integration, and app revamp.",
            details: [
                "The CoinTrunk mobile app plans have been postponed. This includes the iOS release, WalletConnect integration for dApp connections, and a complete app redesign with unified wallet interface and streamlined experience."
            ],
        },
        {
            id: "2026-roadmap-2027",
            title: "Roadmap 2027",
            status: PLANNED,
            description: "The BZE roadmap for 2027.",
            details: [
                "Our plans for 2027, including major infrastructure upgrades, new tokenomics features and more, will be published here. Stay tuned for more details!"
            ],
            quarter: "Q4",
        },
    ]
};
