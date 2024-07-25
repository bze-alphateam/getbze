import { Flex, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import { MdOutlineShield, MdOutlineMonetizationOn, MdOutlineLockOpen, MdOutlineAccessTime } from "react-icons/md";
import { colors } from "../common";
import { InfoCard } from "../info";

export const Info = () => {
  return (
    <Flex mt={10} margin={15} flex={1} justifyContent={'center'} alignItems={'center'} gap={5} flexWrap={'wrap'}>
      <InfoCard 
        title={<Icon as={MdOutlineShield} color={colors.colorLight}/>}
        body={<Text fontSize={'lg'} fontWeight={'bold'}>Proof of Stake</Text>}
        footer={<Text fontWeight={'semibold'}>13% APR</Text>}
      />
      <InfoCard 
        title={<Icon as={MdOutlineAccessTime} color={colors.colorLight}/>}
        body={<Text fontSize={'lg'} fontWeight={'bold'}>Block time</Text>}
        footer={<Text fontWeight={'semibold'}>6 Seconds</Text>}
      />
      <InfoCard 
        title={<Icon as={MdOutlineMonetizationOn} color={colors.colorLight}/>}
        body={<Text fontSize={'lg'} fontWeight={'bold'}>Total supply</Text>}
        footer={<Text fontWeight={'semibold'}>250M</Text>}
      />
      <InfoCard 
        title={<Icon as={MdOutlineLockOpen} color={colors.colorLight}/>}
        body={<Text fontSize={'lg'} fontWeight={'bold'}>Circulating supply</Text>}
        footer={<Text fontWeight={'semibold'}>250M</Text>}
      />
    </Flex>
  );
}