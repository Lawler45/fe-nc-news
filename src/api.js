import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

const articleApi = axios.create({
  baseURL: "https://lawler-news.onrender.com/api",
});

const getArticles = ( sortBy, order, topic) => {
  let endpoint = "/articles";
  if (topic) {
    endpoint += `?topic=${topic}`;
  }
  if (topic === null || topic === undefined & sortBy) {
    endpoint += `?sort_by=${sortBy}`;
  }
if (topic !== null || topic !== undefined & sortBy){
  endpoint += `&sort_by=${sortBy}`
}
  if (order) {
    endpoint += `&order=${order}`;
  }
  return articleApi
    .get(endpoint)
    .then(({ data }) => {
      return data.articles;
    })
    .catch((error) => {
      throw error;
    });
};

const getArticle = (article_id) => {
  return articleApi.get(`/articles/${article_id}`).then(({ data }) => {
    return data.article;
  });
};

const getComments = (article_id) => {
  return articleApi.get(`/articles/${article_id}/comments`).then(({ data }) => {
    return data.comments;
  });
};

const handleUpVote = (article_id) => {
  return articleApi
    .patch(`/articles/${article_id}`, { inc_votes: 1 })
    .catch((error) => {
      console.error(error, "Error upvoting article");
    });
};

const handleDownVote = (article_id) => {
  return articleApi
    .patch(`/articles/${article_id}`, { inc_votes: -1 })
    .catch((error) => {
      console.error(error, "Error upvoting article");
    });
};

const postComment = (article_id, user, comment) => {
  return articleApi
    .post(`/articles/${article_id}/comments`, { username: user, body: comment })
    .then(({ data }) => {
      return data.comment;
    });
};

const deleteComment = (comment_id) => {
  return articleApi.delete(`/comments/${comment_id}`).then(({ data }) => {});
};
export {
  getArticles,
  getArticle,
  getComments,
  handleDownVote,
  handleUpVote,
  postComment,
  deleteComment,
};
