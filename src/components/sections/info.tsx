import { Box, Card, CardBody, CardHeader, Flex, Heading, Stack, StackDivider, Text, useColorModeValue } from "@chakra-ui/react";
import { MdOutlineShield, MdOutlineAccessTime } from "react-icons/md";
import { InfoCard } from "../info";
import { useEffect, useState } from "react";
import { bigNumberToPrettyString, calculateAPR, getBzeBondedAmount, getBzeCirculatingSupply, getBzeInflation, getBzeTotalSupply } from "../../services";
import { Subtitle, colors } from "../common";
import BigNumber from "bignumber.js";

interface InfoItemProps {
  headingText: string;
  headingSize: any;
  headingAmount: BigNumber;
  description: string;
}

const InfoItem = (props: InfoItemProps) => {
  return (
    <Box>
      <Flex flex={1} justifyContent={{base: 'center', sm: 'center', md: 'space-between'}} flexDirection={{base: 'column', sm: 'column', md: 'row'}}>
        <Box textAlign={{base: 'center', sm: 'center'}}>
          <Heading size={props.headingSize} textColor={useColorModeValue(colors.colorDark, colors.colorLight)}>
            {props.headingText}
          </Heading>
        </Box>
        <Box textAlign={{base: 'center', sm: 'center'}}>
          <Heading size={props.headingSize} textColor={useColorModeValue(colors.colorDark, colors.colorLight)}>
            {bigNumberToPrettyString(props.headingAmount)} $BZE
          </Heading>
        </Box>
      </Flex>
      <Text pt='2' fontSize='md'>
        {props.description}
      </Text>
    </Box>
  );
}

export const Info = () => {
  const [total, setTotal] = useState<BigNumber>(new BigNumber(0));
  const [circulating, setCirculating] = useState<BigNumber>(new BigNumber(0));
  const [bonded, setBonded] = useState<BigNumber>(new BigNumber(0));
  const [inflation, setInflation] = useState<BigNumber>(new BigNumber(0));

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadInfo = async () => {
      const [tSupply, cSupply, inflation, bonded] = await Promise.all([getBzeTotalSupply(), getBzeCirculatingSupply(), getBzeInflation(), getBzeBondedAmount()]);
      setTotal(tSupply);
      setCirculating(cSupply);
      setBonded(bonded);
      setInflation(inflation);

      setLoading(false);
    }

    loadInfo();
  }, [])

  return (
    <Flex margin={15} flex={1} justifyContent={'center'} flexDirection={'column'}>
      <Flex mt={45} mb={5} flex={1} justifyContent={'center'}>
        <Subtitle text="Network details" color={useColorModeValue(colors.colorDark, colors.colorLight)}/>
      </Flex>
      <Flex flexDirection={{base: 'column', sm: 'column', md: 'row'}} justifyContent={'center'} alignItems={'center'} gap={5}>
        <Flex flexDirection={{base: 'row', sm: 'row', md: 'column'}} gap={5}>
          <InfoCard 
            icon={MdOutlineShield}
            bodyText="Proof of Stake"
            footerText={loading ? " ?% APR" : `${calculateAPR(total, bonded, inflation)}% APR`}
          />
          <InfoCard 
            icon={MdOutlineAccessTime}
            bodyText="Block time"
            footerText="6 Seconds"
          />
        </Flex>
        <Flex>
          <Card
            bgGradient={useColorModeValue(
              'linear(to-br, white, blue.50, cyan.50)',
              'linear(to-br, gray.800, blue.900, cyan.900)'
            )}
            borderWidth="2px"
            borderColor={useColorModeValue('blue.100', 'blue.700')}
            boxShadow="2xl"
          >
            <CardHeader>
              <Heading
                size={'md'}
                bgGradient={useColorModeValue(
                  'linear(to-r, blue.600, cyan.500)',
                  'linear(to-r, blue.300, cyan.300)'
                )}
                bgClip="text"
              >
                Supply details
              </Heading>
            </CardHeader>
            <CardBody>
              <Stack divider={<StackDivider />} spacing='4'>
                <InfoItem 
                  headingText="Circulating Supply"
                  headingAmount={circulating.minus(bonded)}
                  headingSize='sm'
                  description="The total amount of $BZE circulating includes coins that are locked in Liquidity Pools or other rewarding programs."
                />
                <InfoItem 
                  headingText="Staking"
                  headingAmount={bonded}
                  headingSize='sm'
                  description="The amount of $BZE coins staked are locked and can only be unlocked after a 21-day period."
                />
                <InfoItem 
                  headingText="Community Pool"
                  headingAmount={total.minus(circulating)}
                  headingSize='sm'
                  description="Locked reserve of $BZE that can only be accessed through governance proposals."
                />
                <InfoItem 
                  headingText="Total Supply"
                  headingAmount={total}
                  headingSize='md'
                  description="The total amount of $BZE that currently exist and are either in circulation or locked in some manner, excluding coins that have been burned."
                />
                <InfoItem
                  headingText="Max Supply"
                  headingAmount={new BigNumber(400_000_000)}
                  headingSize='md'
                  description="The maximum amount of $BZE that will ever exist."
              />
              </Stack>
            </CardBody>
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
}
