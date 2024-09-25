import { Box, Card, Flex, Highlight, List, ListIcon, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useColorModeValue } from "@chakra-ui/react";
import { Subtitle, colors } from "../common";
import { MdBuild, MdCheckCircle, MdOutlineAccessTime } from "react-icons/md";

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
    <ListIcon as={icon} color={color} />
    <Highlight query={props.query} styles={{ px: '1', py: '1', rounded: 'full', fontWeight: 'bold', color: useColorModeValue(colors.colorDark, colors.colorLight)}}>
      {props.text}
    </Highlight>
    </>
  );
}

const blockchainQuery = 'BZE Blockchain:';
const burningQuery = 'Burning event:';
const cointrunkQuery = 'CoinTrunk.io:';
const bzeWebsiteQuery = 'BZE Website:';
const bzeDappQuery = 'BZE dApp:';
const partnershipQuery = 'Partnerships:'

export const Roadmap = () => {
  return (
    <Flex margin={15} flex={1} flexDirection={'column'}  alignItems={'center'} gap={2} flexWrap={'wrap'}>
      <Box mt={45}>
        <Subtitle text="Roadmap" color={useColorModeValue(colors.colorDark, colors.colorLight)}/>
      </Box>
      <Box textAlign={'center'} maxW={'700px'}>
        <Text py={2}>The roadmap contains a list of completed tasks, ongoing projects, and future plans. Some of our work remains undisclosed to ensure its success and to keep an element of surprise for upcoming announcements.</Text>
      </Box>
      <Card variant='outline'>
        <Tabs variant='enclosed' p={2} isFitted defaultIndex={1}>
          <TabList>
            <Tab>2023</Tab>
            <Tab>2024</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
            <List spacing={3}>
              <ListItem>
                <RoadmapItem query={blockchainQuery} status={statusSuccess} text={`${blockchainQuery} v6 Upgrade - CoinTrunk Module`}/>
              </ListItem>
              <ListItem>
                <RoadmapItem query={burningQuery} status={statusSuccess} text={`${burningQuery} 150M $BZE Burned`}/>
              </ListItem>
              <ListItem>
                <RoadmapItem query={cointrunkQuery} status={statusSuccess} text={`${cointrunkQuery} Website & Web Application`}/>
              </ListItem>
              <ListItem>
                <RoadmapItem query={bzeWebsiteQuery} status={statusSuccess} text={`${bzeWebsiteQuery} Revamp`}/>
              </ListItem>
              <ListItem>
                <RoadmapItem query={blockchainQuery} status={statusSuccess} text={`${blockchainQuery} v6.1 Upgrade - Small improvements & dependencies upgrades`}/>
              </ListItem>
            </List>
            </TabPanel>
            <TabPanel>
            <List spacing={3}>
              <ListItem>
                <RoadmapItem query={cointrunkQuery} status={statusSuccess} text={`${cointrunkQuery} Mobile App Internal Testing`}/>
              </ListItem>
              <ListItem>
                <RoadmapItem query={burningQuery} status={statusSuccess} text={`${burningQuery} 29M $BZE Burned`}/>
              </ListItem>
              <ListItem>
                <RoadmapItem query={cointrunkQuery} status={statusSuccess} text={`${cointrunkQuery} Mobile App Release for Android`}/>
              </ListItem>
              <ListItem>
                <RoadmapItem query={cointrunkQuery} status={statusSuccess} text={`${cointrunkQuery} List Osmosis, Jackal, Celestia on Mobile`}/>
              </ListItem>
              <ListItem>
                <RoadmapItem query={blockchainQuery} status={statusSuccess} text={`${blockchainQuery} v7 Upgrade - Token Factory, Rewards and DEX`}/>
              </ListItem>
              <ListItem>
                <RoadmapItem query={bzeDappQuery} status={statusSuccess} text={`${bzeDappQuery} Initial release including Token Factory, Rewards and Burner`}/>
              </ListItem>
              <ListItem>
                <RoadmapItem query={partnershipQuery} status={statusSuccess} text={`${partnershipQuery} VDL migration to BZE`}/>
              </ListItem>
              <ListItem>
                <RoadmapItem query={bzeWebsiteQuery} status={statusSuccess} text={`${bzeWebsiteQuery} New website release`}/>
              </ListItem>
              <ListItem>
                <RoadmapItem query={bzeDappQuery} status={statusSuccess} text={`${bzeDappQuery} Open DEX Trading`}/>
              </ListItem>
              <ListItem>
                <RoadmapItem query={bzeDappQuery} status={statusInProgress} text={`${bzeDappQuery} Open Trading Rewards`}/>
              </ListItem>
              <ListItem>
                <RoadmapItem query={cointrunkQuery} status={statusInProgress} text={`${cointrunkQuery} Mobile App Release for iOS`}/>
              </ListItem>
              <ListItem>
                <RoadmapItem query={blockchainQuery} status={statusSuccess} text={`${blockchainQuery} v7.1 Upgrade - Burning Raffles & DEX improvements`}/>
              </ListItem>
              <ListItem>
                <RoadmapItem query={bzeDappQuery} status={statusSuccess} text={`${bzeDappQuery} Open Burning Raffles`}/>
              </ListItem>
              <ListItem>
                <RoadmapItem query={cointrunkQuery} status={statusWaiting} text={`${cointrunkQuery} New website release`}/>
              </ListItem>
              <ListItem>
                <RoadmapItem query={cointrunkQuery} status={statusWaiting} text={`${cointrunkQuery} Wallet Connect to facilitate dApp connection`}/>
              </ListItem>
              <ListItem>
                <RoadmapItem query={burningQuery} status={statusWaiting} text={`${burningQuery} Amount of $BZE TBA`}/>
              </ListItem>
              <ListItem>
                <RoadmapItem query={blockchainQuery} status={statusWaiting} text={`${blockchainQuery} v8 Upgrade - Minable Tokens & SDK Upgrade`}/>
              </ListItem>
              <ListItem>
                <RoadmapItem query={blockchainQuery} status={statusWaiting} text={`${blockchainQuery} 2025 Roadmap & Litepaper`}/>
              </ListItem>
            </List>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </Flex>
  );
}
