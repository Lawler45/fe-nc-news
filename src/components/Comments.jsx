import { getComments } from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Comments = ({comments, setComments}) => {
  const [loading, setLoading] = useState(false);

  const { article_id } = useParams();

  useEffect(() => {
    setLoading(true);
    getComments(article_id).then((comments) => {
      setLoading(false);
      setComments(comments);
    });
  }, []);

  if (loading) return <p>Loading...</p>;

  if (comments.length === 0)
    return <h4>There are no comments for this article!</h4>;
  return (
    <section className="commentsContainer">
      {comments.map((comment) => {
        return (
          <section key={comment.comment_id}className="individualComment">
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
