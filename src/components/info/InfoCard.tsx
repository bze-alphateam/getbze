import { Card, CardBody, CardFooter, CardHeader,  Heading, Icon, Text, useColorModeValue } from "@chakra-ui/react";
import { colors } from "../common";

interface InfoCardProps {
  icon: any,
  bodyText: string,
  footerText: string,
}

export const InfoCard = (props: InfoCardProps) => (
  <Card
    align="center"
    size={'sm'}
    minWidth={['140px', '140px', '200px']}
    bgGradient={useColorModeValue(
      'linear(to-br, white, blue.50)',
      'linear(to-br, gray.800, blue.900)'
    )}
    borderWidth="1px"
    borderColor={useColorModeValue('blue.100', 'blue.700')}
    boxShadow="lg"
    transition="all 0.3s ease"
    _hover={{
      transform: 'translateY(-8px)',
      boxShadow: '2xl',
      bgGradient: useColorModeValue(
        'linear(to-br, blue.50, blue.100)',
        'linear(to-br, blue.900, blue.800)'
      )
    }}
  >
    <CardHeader>
      <Heading size='xl'>
        <Icon
          as={props.icon}
          color={colors.colorLight}
          filter="drop-shadow(0 2px 4px rgba(17, 193, 225, 0.3))"
        />
      </Heading>
    </CardHeader>
    <CardBody>
      <Text fontSize={'md'} fontWeight={'semibold'}>{props.bodyText}</Text>
    </CardBody>
    <CardFooter>
      <Text
        fontSize={'lg'}
        fontWeight={'bold'}
        color={useColorModeValue(colors.colorDark, colors.colorLight)}
        bgGradient={useColorModeValue(
          'linear(to-r, blue.600, cyan.500)',
          'linear(to-r, blue.300, cyan.300)'
        )}
        bgClip="text"
      >
        {props.footerText}
      </Text>
    </CardFooter>
  </Card>
)
