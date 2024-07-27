
const getMediumArticlesUrl = (): string => {
  return `${getHost()}/articles/medium`;
}

const getCirculatingSupplyUrl = (): string => {
  return `${getHost()}/supply/circulating`;
}

const getTotalSupplyUrl = (): string => {
  return `${getHost()}/supply/total`;
}

const getHost = (): string => {
  return process.env.REACT_APP_AGGREGATOR_API_HOST ?? "";
}

export const getTotalSupply = async (): Promise<string|null> => {
  try {
    const resp = await fetch(getTotalSupplyUrl());
    if (resp.status !== 200) {
      return null;
    }

    return resp.text();
  } catch (e) {
    console.log("error on getTotalSupply: ", e);

    return null;
  }
}

export const getCirculatingSupply = async (): Promise<string|null> => {
  try {
    const resp = await fetch(getCirculatingSupplyUrl());
    if (resp.status !== 200) {
      return null;
    }
  
    return resp.text();
  } catch (e) {
    console.log("error on getCirculatingSupply: ", e);

    return null;
  }
}

export interface Article {
  title: string;
  url: string;
  picture_url: string;
  description: string;
  publish_date: string;
  author_name: string;
}

export const getMediumArticles = async (): Promise<Article[]|null> => {
  try {
    const resp = await fetch(getMediumArticlesUrl());
    if (resp.status !== 200) {
      return null;
    }
  
    return resp.json();
  } catch (e) {
    console.log("error on getMediumArticlesUrl: ", e);

    return null;
  }
}
