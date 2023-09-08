import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";

const articleApi = axios.create({
  baseURL: "https://lawler-news.onrender.com/api",
  // baseURL: "http://localhost:9090/api"
});

const getArticles = () => {
  return articleApi.get("/articles")
    .then(({ data }) => {
      return data.articles;
    });
};

const getTopicArticles = (topic) => {
  return articleApi.get(`/articles?topic=${topic}`).then(({ data }) => {
    return data.articles;
  });
};

const getSortedArticles = (sortBy, order) => {
  return articleApi.get(`/articles?sort_by=${sortBy}&order=${order}`)
    .then(({ data }) => {
      return data.articles;
    });
};

const getSortedTopicArticles = (topic, sortBy, order) => {
  return articleApi.get(`/articles?topic=${topic}&sort_by=${sortBy}&order=${order}`)
    .then(({ data }) => {
      return data.articles;
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
  return articleApi.patch(`/articles/${article_id}`, { inc_votes: 1 }).catch((error) => {
    console.error(error, "Error upvoting article");
  });
};

const handleDownVote = (article_id) => {
  return articleApi.patch(`/articles/${article_id}`, { inc_votes: -1 })
    .catch((error) => {
      console.error(error, "Error upvoting article");
    });
};

const postComment = (article_id, user, comment) => {
  return articleApi.post(`/articles/${article_id}/comments`, {username:user, body:comment})
    .then(({ data }) => {
      return data.comment;
    });
};

const deleteComment = (comment_id) => {
return articleApi.delete(`/comments/${comment_id}`)
.then(({data}) => {


})
}
export {
  getArticles,
  getArticle,
  getComments,
  handleDownVote,
  handleUpVote,
  postComment,
  getTopicArticles,
  getSortedArticles,
  getSortedTopicArticles,
  deleteComment
};
