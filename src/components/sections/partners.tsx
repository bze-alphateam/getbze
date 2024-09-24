import {
    Box,
    Flex,
    Image,
    Menu,
    MenuButton,
    Button,
    MenuItem,
    MenuList,
    Text,
    useColorModeValue,
    Card, CardBody, Stack, Heading, Divider, CardFooter, ButtonGroup
} from "@chakra-ui/react"
import { Subtitle, colors } from "../common"


interface PartnersItemProps {
//  button: React.ReactNode;
  logo: string;
  url: string;
  height?: number;
}

const PartnersItem = ({logo, url, height}: PartnersItemProps) => {
  return (
    <Flex flexDirection={'column'} justifyContent={'center'} alignItems={'center'} p={2}>
      <a href={url} target={'_blank'}>
        <Image
          p={2}
          src={logo}
          height={height ?? 50}
        />
      </a>
    </Flex>
  );
}

export const Partners = () => {
  return (
    <Flex margin={15} flex={1} flexDirection={'column'}  alignItems={'center'} gap={5} flexWrap={'wrap'}>
      <Box mt={45}>
        <Subtitle text="Partners" color={useColorModeValue(colors.colorDark, colors.colorLight)}/>
      </Box>
      <Flex flex={1} flexWrap={'wrap'} flexDirection={{base: 'column', sm: 'row', md: 'row', lg: 'row'}} gap={[2, 2, 5, 25]} justifyContent={'center'}>
        <PartnersItem logo={'logos/vidulum_logo.svg'} height={55} url={'https://vidulum.app/'}/>
        <PartnersItem logo={'logos/chaintools_logo.svg'} height={100} url={'https://chaintools.tech/'}/>
      </Flex>
    </Flex>
  );
}
