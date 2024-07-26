import { Heading } from "@chakra-ui/react";

interface TitleProps {
  text: string;
  color?: string|undefined;
}

export const Title = (props: TitleProps) => (
  <Heading as={'h1'} size='2xl' textColor={props.color}>{props.text}</Heading>
)

export const Subtitle = (props: TitleProps) => (
  <Heading as={'h2'} size='lg' textColor={props.color}>{props.text}</Heading>
)
