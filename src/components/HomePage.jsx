import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../api";
import { HomePageSortBy } from "./SortArticles";

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [itemReq, setItemReq] = useState(
    `https://lawler-news.onrender.com/api/articles`
  );
  useEffect(() => {
    setLoading(true);
    getArticles(itemReq).then(
      (data) => {
        setLoading(false);
        setArticles(data);
      }
    );
  }, []);

  return (
    <div>
    <h3 className="topic title">Home Page</h3>
    <HomePageSortBy setItemReq={setItemReq} />
<section className="articleContainer">
  {articles.map((article) => {
    return (
      <ArticleCard
        key={article.article_id}
        article_id={article.article_id}
        title={article.title}
        article_img_url={article.article_img_url}
        author={article.author}
        votes={article.votes}
        comment_count={article.comment_count}
        created_at={article.created_at}
        topic={article.topic}
      />
    );
  })}
</section>
</div>
  );
};

export default HomePage;
