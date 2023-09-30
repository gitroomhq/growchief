import axios, { AxiosResponse } from "axios";

const headers = {
  api_key: process.env.DEV_API_KEY,
};

type ArticleData = {
  title: string;
  organization: { name: string } | null;
  page_views_count?: number;
  public_reactions_count?: number;
  url: string;
};

type CountParams = {
  views: number;
  likes: number;
  followers: number;
};

const getFollowers = async (page = 1): Promise<number> => {
  try {
    const response: AxiosResponse<any> = await axios.get(
      `https://dev.to/api/followers/users?per_page=1000&page=${page}`,
      {
        headers,
      }
    );

    if (response.data.length === 0) {
      return 0;
    }

    return response.data.length + (await getFollowers(page + 1));
  } catch (error) {
    console.error(`Error fetching followers: ${error}`);
    throw error;
  }
};

export const loadDevToAnalytics = async (): Promise<{
  views: number;
  likes: number;
  followers: number;
  list: Array<{
    title: string;
    organization: string;
    views: number;
    likes: number;
    url: string;
  }>;
}> => {
  try {
    const response: AxiosResponse<any> = await axios.get(
      "https://dev.to/api/articles/me?per_page=1000",
      {
        headers,
      }
    );

    const totalFollowers = await getFollowers();

    const countParams = response.data.reduce(
      (all: CountParams, current: ArticleData) => ({
        views: all.views + (current?.page_views_count || 0),
        likes: all.likes + (current?.public_reactions_count || 0),
        followers: all.followers,
      }),
      { views: 0, likes: 0, followers: totalFollowers }
    );

    const filteredList = response.data
      .filter((f: ArticleData) => f.page_views_count && f.page_views_count > 10000)
      .slice(0, 10)
      .map((current: ArticleData) => ({
        title: current.title,
        organization: current?.organization?.name || "Self",
        views: current?.page_views_count || 0,
        likes: current?.public_reactions_count || 0,
        url: current?.url || "",
      }));

    return {
      ...countParams,
      list: filteredList,
    };
  } catch (error) {
    console.error(`Error loading DEV.to analytics: ${error}`);
    throw error;
  }
};
