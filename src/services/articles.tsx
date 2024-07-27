import { getFromCache, setInCache } from "./cache";
import { Article, getMediumArticles } from "./client";

const articlesKey = 'news:articles';
const articleTtl = 15 * 60;

export const getLatestArticles = async (maxArticles: number): Promise<Article[]> => {
  const cached = getFromCache(articlesKey);
  if (cached) {
    const decoded = JSON.parse(cached);

    return decoded.slice(0, maxArticles);
  }

  const result = await getMediumArticles();
  if (!result) {
    return [];
  }

  setInCache(articlesKey, JSON.stringify(result), articleTtl);

  return result.slice(0, maxArticles);
}
