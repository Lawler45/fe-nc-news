import { useState, useEffect } from "react";
import { getArticles } from "../api";

const SortBy = ({ setArticles, isTopicPage, topic }) => {
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  const handleOrderChange = (event) => {
    setOrder(event.target.value);
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const fetchArticlesData = () => {
    if (isTopicPage) {
      getArticles(sortBy, order, topic)
        .then((articles) => {
          setArticles(articles);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getArticles(sortBy, order, null)
        .then((articles) => {
          setArticles(articles);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    fetchArticlesData(topic, sortBy, order);
  }, [sortBy, order, topic]);

  return (
    <div className="sortAndOrderForm">
      <form className="sortBy">
        <select name="category" onChange={handleSortByChange} value={sortBy}>
          <option value="created_at">All</option>
          <option value="created_at">Date</option>
          <option value="votes">Votes</option>
        </select>
      </form>
      <form className="order">
        <select name="category" onChange={handleOrderChange} value={order}>
          <option value="desc">Descending</option>
          <option value="asc">Ascending</option>
        </select>
      </form>
    </div>
  );
};

export default SortBy;
