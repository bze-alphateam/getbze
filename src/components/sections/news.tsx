import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useColorModeValue
} from "@chakra-ui/react";
import {colors, Subtitle} from "../common";
import {useEffect, useState} from "react";
import {getLatestArticles} from "../../services/articles";

const maxArticles = 3;

interface Article {
  title: string;
  url: string;
  picture_url: string;
  description: string;
  publish_date: string;
  author_name: string;
}

const NewsItem = ({article}: {article: Article}) => {
  const date = () => {
    // Create a new Date object from the date string
    const date = new Date(article.publish_date); 

    // Format the date using the browser's locale and timezone
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Intl.DateTimeFormat(undefined, options).format(date);
  }

  return (
    <Card
      variant={'outline'}
      bgGradient={useColorModeValue(
        'linear(to-br, white, blue.50)',
        'linear(to-br, gray.800, blue.900)'
      )}
      borderWidth="2px"
      borderColor={useColorModeValue('blue.100', 'blue.700')}
      boxShadow="xl"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: '2xl',
        borderColor: useColorModeValue('blue.300', 'blue.500'),
        bgGradient: useColorModeValue(
          'linear(to-br, blue.50, cyan.50)',
          'linear(to-br, blue.900, cyan.900)'
        )
      }}
    >
      <CardBody>
        <Flex
          justifyContent={'center'}
          transition="all 0.3s ease"
          _hover={{
            transform: 'scale(1.05)'
          }}
        >
          <Image
            src={article.picture_url !== "" ? article.picture_url : "bze_icon.png"}
            alt={'BeeZee network Medium article. ' + article.title}
            borderRadius='lg'
            maxHeight={50}
          />
        </Flex>
        <Stack mt='6' spacing='3' alignItems={'center'}>
          <Heading
            size='md'
            textColor={useColorModeValue(colors.colorDark, colors.colorLight)}
            bgGradient={useColorModeValue(
              'linear(to-r, blue.600, cyan.500)',
              'linear(to-r, blue.300, cyan.300)'
            )}
            bgClip="text"
          >
            {article.title}
          </Heading>
          <Text size={'xs'} fontStyle={'italic'}>
            {date()}
          </Text>
          <Text size={'sm'} textAlign={'center'}>
            {article.description}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter justifyContent={'center'}>
        <ButtonGroup spacing='2'>
          <Button
            as={'a'}
            href={article.url}
            target="_blank"
            variant='outline'
            colorScheme='blue'
            _hover={{
              bgGradient: 'linear(to-r, blue.500, cyan.500)',
              color: 'white',
              transform: 'scale(1.05)'
            }}
            transition="all 0.2s ease"
          >
            Read
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export const News = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      const a = await getLatestArticles(maxArticles);
      if (a === null) {
        setArticles([]);
      }

      setArticles(a);
      setLoading(false);
    }

    fetchArticles();
  }, [])


  return (
    <Flex margin={15} flex={1} flexDirection={'column'}  alignItems={'center'} gap={5}>
      <Box mt={45}>
        <Subtitle text="News" color={useColorModeValue(colors.colorDark, colors.colorLight)}/>
      </Box>
      <Flex flex={1} flexDirection={{base: 'column', sm: 'column', md: 'column', lg: 'row'}} gap={5} overflow={'scroll'} p={5}>
        {!loading && 
          articles.map((item: Article )=> (<NewsItem key={item.url} article={item}/>))
        }
      </Flex>
    </Flex>
  );
}
