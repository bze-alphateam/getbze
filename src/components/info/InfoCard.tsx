import { Card, CardBody, CardFooter, CardHeader,  Heading } from "@chakra-ui/react";

interface InfoCardProps {
  title: any,
  body: any,
  footer: any,
}

export const InfoCard = (props: InfoCardProps) => (
  <Card align="center" size={'sm'} minWidth={'250px'}>
    <CardHeader>
      <Heading size='xl'> {props.title}</Heading>
    </CardHeader>
    <CardBody>
      {props.body}
    </CardBody>
    <CardFooter>
      {props.footer}
    </CardFooter>
  </Card>
)
