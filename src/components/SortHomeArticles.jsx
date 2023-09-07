import { getSortedArticles, getArticles } from "../api";
import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

const HomePageSortBy = ({ setArticles }) => {
  const [sortBy, setSortBy] = useState("created_at");
  const [order, setOrder] = useState("desc");

  const handleOrder = (order) => {
    setOrder(order);
  };

  const handleSortBy = (sortBy) => {
    setSortBy(sortBy);
  };

  const fetchArticles = () => {
    getSortedArticles(sortBy, order)
      .then((articles) => {
        setArticles(articles);
      })
      .catch((error) => {
        console.log(error)
      });
  };

  useEffect(() => {
    fetchArticles();
  }, [sortBy, order]);

  return (
    <div className="sortAndOrderForm">
      <form className="sortBy">
        <input
          name="category"
          type="radio"
          defaultChecked={true}
          onClick={() => {
            handleSortBy("created_at");
          }}
        />
        All
        <input
          name="category"
          type="radio"
          onClick={() => {
            handleSortBy("created_at");
          }}
        />
        Date
        <input
          name="category"
          type="radio"
          onClick={() => {
            handleSortBy("votes");
          }}
        />
        Votes
      </form>
      <form className="order">
        <input
          name="category"
          type="radio"
          onClick={() => {
            handleOrder("asc");
          }}
        />
        Ascending
        <input
          name="category"
          type="radio"
          defaultChecked={true}
          onClick={() => {
            handleOrder("desc");
          }}
        />
        Descending
      </form>
    </div>
  );
};

export default HomePageSortBy;
