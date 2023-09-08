import { getArticles } from "../api";
import { useParams, useSearchParams } from "react-router-dom";

const fetchArticles = (topic, sortBy, order) => {
  if (topic) {
    if (sortBy && order) {
      return getArticles(topic, sortBy, order);
    } else {
      return getArticles(topic);
    }
  } else {
    if (sortBy && order) {
      return getArticles(sortBy, order);
    } else {
      return getArticles();
    }
  }
};

export default fetchArticles;