import {
    Box,
    Card,
    Flex,
    Highlight,
    List,
    ListIcon,
    ListItem,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import {Subtitle, colors} from "../common";
import {MdBuild, MdCheckCircle, MdOutlineAccessTime} from "react-icons/md";

const statusSuccess = 2;
const statusInProgress = 1;
const statusWaiting = 0;

interface RoadmapItemProps {
    status: number;
    query: string;
    text: string;
}

const RoadmapItem = (props: RoadmapItemProps) => {
    let color = colors.status.fail;
    let icon = MdOutlineAccessTime;
    switch (props.status) {
        case statusSuccess:
            color = colors.status.success;
            icon = MdCheckCircle;
            break;
        case statusInProgress:
            color = colors.status.inProgress;
            icon = MdBuild;
            break;
    }

    return (
        <>
            <ListIcon as={icon} color={color}/>
            <Highlight query={props.query} styles={{
                px: '1',
                py: '1',
                rounded: 'full',
                fontWeight: 'bold',
                color: useColorModeValue(colors.colorDark, colors.colorLight)
            }}>
                {props.text}
            </Highlight>
        </>
    );
}

const blockchainQuery = 'BZE Blockchain:';
const marketingQuery = 'Marketing:';
const burningQuery = 'Burning event:';
const cointrunkQuery = 'CoinTrunk.io:';
const bzeWebsiteQuery = 'BZE Website:';
const bzeDappQuery = 'BZE dApp:';
const othersQuery = 'Others:';
const partnershipQuery = 'Partnerships:'

export const Roadmap = () => {
    return (
        <Flex margin={15} flex={1} flexDirection={'column'} alignItems={'center'} gap={2} flexWrap={'wrap'}>
            <Box mt={45}>
                <Subtitle text="Roadmap" color={useColorModeValue(colors.colorDark, colors.colorLight)}/>
            </Box>
            <Box textAlign={'center'} maxW={'700px'}>
                <Text py={2}>The roadmap contains a list of completed tasks, ongoing projects, and future plans. Some of
                    our work remains undisclosed to ensure its success and to keep an element of surprise for upcoming
                    announcements.</Text>
            </Box>
            <Card
                variant='outline'
                bgGradient={useColorModeValue(
                    'linear(to-br, white, blue.50)',
                    'linear(to-br, gray.800, blue.900)'
                )}
                borderWidth="2px"
                borderColor={useColorModeValue('blue.100', 'blue.700')}
                boxShadow="2xl"
            >
                <Tabs variant='enclosed' p={2} isFitted defaultIndex={2}>
                    <TabList>
                        <Tab>2023</Tab>
                        <Tab>2024</Tab>
                        <Tab>2025</Tab>
                        <Tab>2026</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <List spacing={3}>
                                <ListItem>
                                    <RoadmapItem query={blockchainQuery} status={statusSuccess}
                                                 text={`${blockchainQuery} v6 Upgrade - CoinTrunk Module`}/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={burningQuery} status={statusSuccess}
                                                 text={`${burningQuery} 150M $BZE Burned`}/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={cointrunkQuery} status={statusSuccess}
                                                 text={`${cointrunkQuery} Website & Web Application`}/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={bzeWebsiteQuery} status={statusSuccess}
                                                 text={`${bzeWebsiteQuery} Revamp`}/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={blockchainQuery} status={statusSuccess}
                                                 text={`${blockchainQuery} v6.1 Upgrade - Small improvements & dependencies upgrades`}/>
                                </ListItem>
                            </List>
                        </TabPanel>
                        <TabPanel>
                            <List spacing={3}>
                                <ListItem>
                                    <RoadmapItem query={cointrunkQuery} status={statusSuccess}
                                                 text={`${cointrunkQuery} Mobile App Internal Testing`}/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={burningQuery} status={statusSuccess}
                                                 text={`${burningQuery} 29M $BZE Burned`}/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={cointrunkQuery} status={statusSuccess}
                                                 text={`${cointrunkQuery} Mobile App Release for Android`}/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={cointrunkQuery} status={statusSuccess}
                                                 text={`${cointrunkQuery} List Osmosis, Jackal, Celestia on Mobile`}/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={blockchainQuery} status={statusSuccess}
                                                 text={`${blockchainQuery} v7 Upgrade - Token Factory, Rewards and DEX`}/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={bzeDappQuery} status={statusSuccess}
                                                 text={`${bzeDappQuery} Initial release including Token Factory, Rewards and Burner`}/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={partnershipQuery} status={statusSuccess}
                                                 text={`${partnershipQuery} VDL migration to BZE`}/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={bzeWebsiteQuery} status={statusSuccess}
                                                 text={`${bzeWebsiteQuery} New website release`}/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={bzeDappQuery} status={statusSuccess}
                                                 text={`${bzeDappQuery} Open DEX Trading`}/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={marketingQuery} status={statusSuccess}
                                                 text={`${marketingQuery} Marketing Campaign`}/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={blockchainQuery} status={statusSuccess}
                                                 text={`${blockchainQuery} v7.1 Upgrade - Burning Raffles & DEX improvements`}/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={bzeDappQuery} status={statusSuccess}
                                                 text={`${bzeDappQuery} Open Burning Raffles`}/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={bzeDappQuery} status={statusSuccess}
                                                 text={`${bzeDappQuery} DEX Aggregator & API`}/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={bzeDappQuery} status={statusSuccess}
                                                 text={`${bzeDappQuery} DEX Listing on CoinGecko & LiveCoinWatch`}/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={blockchainQuery} status={statusSuccess}
                                                 text={`${blockchainQuery} 2025 Roadmap`}/>
                                </ListItem>
                            </List>
                        </TabPanel>
                        <TabPanel>
                            <List spacing={3}>
                                <ListItem>
                                    <RoadmapItem query={blockchainQuery} status={statusSuccess}
                                                 text={`${blockchainQuery} Blockchain Upgrade`}/>
                                    <List>
                                        <ListItem>
                                            <Text ml={"30"}>* Market buy/sell feature</Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text ml={"30"}>* Improve DEX events</Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text ml={"30"}>* Burn BZE every 4 weeks</Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text ml={"30"}>* Add Amino support for Ledger</Text>
                                        </ListItem>
                                    </List>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={bzeDappQuery} status={statusSuccess}
                                                 text={`${bzeDappQuery} Improvements`}/>
                                    <List>
                                        <ListItem>
                                            <Text ml={"30"}>* Improve Market & Assets page</Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text ml={"30"}>* Add "Cancel All" on user orders</Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text ml={"30"}>* Bulk buy/sell</Text>
                                        </ListItem>
                                    </List>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={othersQuery} status={statusSuccess}
                                                 text={`${othersQuery} Staking Page`}/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={bzeDappQuery} status={statusSuccess}
                                                 text={`${bzeDappQuery} Enable Ledger`}/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={bzeDappQuery} status={statusSuccess}
                                                 text={`${bzeDappQuery} Bulk Buy/Sell`}/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={blockchainQuery} status={statusSuccess}
                                                 text={`${blockchainQuery} Blockchain Upgrade`}/>
                                    <List>
                                        <ListItem>
                                            <Text ml={"30"}>* Cosmos SDK upgrade to 0.50</Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text ml={"30"}>* AMM Liquidity Pools</Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text ml={"30"}>* TX Fee module</Text>
                                        </ListItem>
                                    </List>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query="Burner & Raffles App release" status={statusSuccess}
                                                 text="Burner & Raffles App release"/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query="New DEX App release" status={statusInProgress}
                                                 text="New DEX App release"/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query="Factory App release" status={statusInProgress}
                                                 text="Factory App release"/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={cointrunkQuery} status={statusInProgress}
                                                 text={`${cointrunkQuery} New Website`}/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={blockchainQuery} status={statusWaiting}
                                                 text={`${blockchainQuery} Blockchain upgrade`}/>
                                    <List>
                                        <ListItem>
                                            <Text ml={"30"}>* DEX engine performance improvements</Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text ml={"30"}>* Extend Token Factory Metadata</Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text ml={"30"}>* Compounded Staking Rewards</Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text ml={"30"}>* Allow Custom Fees in any token</Text>
                                        </ListItem>
                                    </List>
                                </ListItem>
                            </List>
                        </TabPanel>
                        <TabPanel>
                            <List spacing={3}>
                                <ListItem>
                                    <RoadmapItem query="BZE DEX:" status={statusWaiting}
                                                 text="BZE DEX: Open Trading Rewards"/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={blockchainQuery} status={statusWaiting}
                                                 text={`${blockchainQuery} Blockchain Upgrade`}/>
                                    <List>
                                        <ListItem>
                                            <Text ml={"30"}>* BZE Max supply to 400M</Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text ml={"30"}>* Token Addon: DAO & Governance</Text>
                                        </ListItem>
                                    </List>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={blockchainQuery} status={statusWaiting}
                                                 text={`${blockchainQuery} Blockchain Upgrade`}/>
                                    <List>
                                        <ListItem>
                                            <Text ml={"30"}>* Token Addon: Fees & Distribution</Text>
                                        </ListItem>
                                        <ListItem>
                                            <Text ml={"30"}>* Token Addon: Community Pool</Text>
                                        </ListItem>
                                    </List>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query="Factory App - Token Addons" status={statusWaiting}
                                                 text="Factory App - Token Addons"/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query="Token Community Page release" status={statusWaiting}
                                                 text="Token Community Page release"/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={cointrunkQuery} status={statusWaiting}
                                                 text={`${cointrunkQuery} Mobile App Release for iOS`}/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={cointrunkQuery} status={statusWaiting}
                                                 text={`${cointrunkQuery} Wallet Connect on CoinTrunk Mobile`}/>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query={blockchainQuery} status={statusWaiting}
                                                 text={`${blockchainQuery} Blockchain Upgrade - Tokens Addons Phase 2`}/>
                                    <List>
                                        <ListItem>
                                            <Text ml={"30"}>* Minable Tokens</Text>
                                        </ListItem>
                                    </List>
                                </ListItem>
                                <ListItem>
                                    <RoadmapItem query="Minable Tokens mining software release" status={statusWaiting}
                                                 text="Minable Tokens mining software release"/>
                                </ListItem>
                            </List>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Card>
        </Flex>
    );
}
