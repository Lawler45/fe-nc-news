import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

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
    return data.article;
  });
};

const getComments = (article_id) => {
  return articleApi.get(`/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

const handleUpVote = (article_id) => {
  return articleApi.patch(`/${article_id}`, { inc_votes: 1 }).catch((error) => {
    console.error(error, "Error upvoting article");
  });
};

const handleDownVote = (article_id) => {
  return articleApi
    .patch(`/${article_id}`, { inc_votes: -1 })
    .catch((error) => {
      console.error(error, "Error upvoting article");
    });
};

const postComment = (article_id, user, comment) => {
  return articleApi
    .post(`/${article_id}/comments`, {username:user, body:comment})
    .then(({ data }) => {
      return data.comment;
    });
};
export {
  getArticles,
  getArticle,
  getComments,
  handleDownVote,
  handleUpVote,
  postComment,
};
