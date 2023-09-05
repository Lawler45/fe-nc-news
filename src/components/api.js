import axios from "axios";

const articleApi = axios.create({
  baseURL: "https://lawler-news.onrender.com/api/articles",
});

const getArticles = () => {
  return axios
    .get("https://lawler-news.onrender.com/api/articles")
    .then(({ data }) => {
      return data.articles;
    });
};

const getArticle = (article_id) => {
  return articleApi.get(`/${article_id}`).then(({ data }) => {
    console.log(data)
    return data.article;
  });
};

const getComments = (article_id) => {
  return articleApi.get(`/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};
export { getArticles, getArticle, getComments };
