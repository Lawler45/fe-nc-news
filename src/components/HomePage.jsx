import { useState, useEffect } from "react";
import ArticleCard from "./articleCard";
import { getArticles } from "../api";

const HomePage = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getArticles("https://lawler-news.onrender.com/api/articles").then(
      (data) => {
        setLoading(false);
<<<<<<< HEAD
        setArticles(data)
      });
  }, [setArticles]);

  if (loading) return <p>Loading...</p>

=======
        setArticles(data);
      }
    );
  }, []);
>>>>>>> vote

  return (
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
  );
};

export default HomePage;
