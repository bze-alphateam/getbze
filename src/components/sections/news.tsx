import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Flex, Heading, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { Subtitle, colors } from "../common";
import { useEffect, useState } from "react";
import { getLatestArticles } from "../../services/articles";

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
    const formattedDate = new Intl.DateTimeFormat(undefined, options).format(date);

    return formattedDate;
  }

  return (
    <Card variant={'outline'}>
      <CardBody>
        <Flex justifyContent={'center'}>
          <Image
            src={article.picture_url !== "" ? article.picture_url : "bze_icon.png"}
            alt={'BeeZee network Medium article. ' + article.title}
            borderRadius='lg'
            maxHeight={50}
          />
        </Flex>
        <Stack mt='6' spacing='3' alignItems={'center'}>
          <Heading size='md' textColor={useColorModeValue(colors.colorDark, colors.colorLight)}>{article.title}</Heading>
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
          <Button as={'a'} href={article.url} target="_blank" variant='outline' colorScheme='blue'>
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
      <Flex flex={1} flexDirection={{base: 'column', sm: 'column', md: 'column', lg: 'row'}} gap={5} overflow={'scroll'}>
        {!loading && 
          articles.map((item: Article )=> (<NewsItem article={item}/>))
        }
      </Flex>
    </Flex>
  );
}
