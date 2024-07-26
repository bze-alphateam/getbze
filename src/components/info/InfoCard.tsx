import { Card, CardBody, CardFooter, CardHeader,  Heading, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { colors } from "../common";

interface InfoCardProps {
  icon: any,
  bodyText: string,
  footerText: string,
}

export const InfoCard = (props: InfoCardProps) => (
  <Card align="center" size={'sm'} minWidth={'200px'}>
    <CardHeader>
      <Heading size='xl'>
        <Icon as={props.icon} color={colors.colorLight}/>
      </Heading>
    </CardHeader>
    <CardBody>
      <Text fontSize={'md'} fontWeight={'semibold'}>{props.bodyText}</Text>
    </CardBody>
    <CardFooter>
      <Text fontSize={'lg'} fontWeight={'bold'} color={useColorModeValue(colors.colorDark, colors.colorLight)}>{props.footerText}</Text>
    </CardFooter>
  </Card>
)
