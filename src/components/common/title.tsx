import { Heading, useColorModeValue } from "@chakra-ui/react";

interface TitleProps {
  text: string;
  color?: string|undefined;
}

export const Title = (props: TitleProps) => (
  <Heading
    as={'h1'}
    size='2xl'
    textColor={props.color}
    bgGradient={useColorModeValue(
      'linear(to-r, blue.600, cyan.500, blue.600)',
      'linear(to-r, blue.300, cyan.300, blue.300)'
    )}
    bgClip="text"
    textShadow="0 2px 10px rgba(17, 193, 225, 0.3)"
  >
    {props.text}
  </Heading>
)

export const Subtitle = (props: TitleProps) => (
  <Heading
    as={'h2'}
    size='lg'
    textColor={props.color}
    bgGradient={useColorModeValue(
      'linear(to-r, blue.600, cyan.500)',
      'linear(to-r, blue.300, cyan.300)'
    )}
    bgClip="text"
    textShadow="0 1px 5px rgba(17, 193, 225, 0.2)"
  >
    {props.text}
  </Heading>
)
