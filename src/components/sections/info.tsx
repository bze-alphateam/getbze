import { Box, Card, CardBody, CardHeader, Flex, Heading, Stack, StackDivider, Text, useColorModeValue } from "@chakra-ui/react";
import { MdOutlineShield, MdOutlineAccessTime } from "react-icons/md";
import { InfoCard } from "../info/InfoCard";
import { useEffect, useState } from "react";
import { bigNumberToPrettyString, calculateAPR, getBzeBondedAmount, getBzeCirculatingSupply, getBzeInflation, getBzeTotalSupply } from "../../services";
import { Subtitle, colors } from "../common";
import BigNumber from "bignumber.js";

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
      <Flex flexDirection={{sm: 'column', md: 'row'}} justifyContent={'center'} alignItems={'center'} gap={5}>
        <Flex flexDirection={{sm: 'row', md: 'column'}} gap={5}>
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
          <Card>
            <CardHeader>
              <Heading size={'md'}>Supply details</Heading>
            </CardHeader>
            <CardBody>
              <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                  <Flex flex={1} justifyContent={'space-between'}>
                    <Box>
                      <Heading size='sm' textColor={useColorModeValue(colors.colorDark, colors.colorLight)}>
                        Circulating Supply
                      </Heading>
                    </Box>
                    <Box>
                      <Heading size='sm' textColor={useColorModeValue(colors.colorDark, colors.colorLight)}>
                        {bigNumberToPrettyString(circulating.minus(bonded))} $BZE
                      </Heading>
                    </Box>
                  </Flex>
                  <Text pt='2' fontSize='sm'>
                    The total amount of $BZE circulating includes coins that are locked in Liquidity Pools or other rewarding programs.
                  </Text>
                </Box>
                <Box>
                  <Flex flex={1} justifyContent={'space-between'}>
                    <Box>
                      <Heading size='sm' textColor={useColorModeValue(colors.colorDark, colors.colorLight)}>
                        Staking
                      </Heading>
                    </Box>
                    <Box>
                      <Heading size='sm' textColor={useColorModeValue(colors.colorDark, colors.colorLight)}>
                        {bigNumberToPrettyString(bonded)} $BZE
                      </Heading>
                    </Box>
                  </Flex>
                  <Text pt='2' fontSize='sm'>
                    The amount of $BZE coins staked are locked and can only be unlocked after a 21-day period.
                  </Text>
                </Box>
                <Box>
                  <Flex flex={1} justifyContent={'space-between'}>
                    <Box>
                      <Heading size='sm' textColor={useColorModeValue(colors.colorDark, colors.colorLight)}>
                        Community Pool
                      </Heading>
                    </Box>
                    <Box>
                      <Heading size='sm' textColor={useColorModeValue(colors.colorDark, colors.colorLight)}>
                        {bigNumberToPrettyString(total.minus(circulating))} $BZE
                      </Heading>
                    </Box>
                  </Flex>
                  <Text pt='2' fontSize='sm'>
                    Locked reserve of $BZE that can only be accessed through governance proposals.
                  </Text>
                </Box>
                <Box>
                  <Flex flex={1} justifyContent={'space-between'}>
                    <Box>
                      <Heading size='md' textColor={useColorModeValue(colors.colorDark, colors.colorLight)}>
                        Total Supply
                      </Heading>
                    </Box>
                    <Box>
                      <Heading size='md' textColor={useColorModeValue(colors.colorDark, colors.colorLight)}>
                        {bigNumberToPrettyString(total)} $BZE
                      </Heading>
                    </Box>
                  </Flex>
                  <Text pt='2' fontSize='sm'>
                    The total amount of $BZE that currently exist and are either in circulation or locked in some manner, excluding coins that have been burned.
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
}