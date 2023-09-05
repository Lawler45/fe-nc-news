<<<<<<< HEAD
import { getComments } from "./api";
=======
import { getComments } from "../api";
>>>>>>> vote
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);

  const { article_id } = useParams();
<<<<<<< HEAD
  console.log(article_id)
=======
  console.log(article_id);
>>>>>>> vote

  useEffect(() => {
    setLoading(true);
    getComments(article_id).then((comments) => {
      setLoading(false);
      setComments(comments);
    });
  }, [setComments]);

  if (loading) return <p>Loading...</p>;

  if (comments.length === 0)
    return <h4>There are no comments for this article!</h4>;
  return (
    <section className="commentsContainer">
      {comments.map((comment) => {
        return (
          <section className="individualComment">
            <p>Posted by {comment.author}</p>
            <p className="comment">{comment.body}</p>
            <p>Votes: {comment.votes}</p>
          </section>
        );
      })}
    </section>
  );
};

export default Comments;
