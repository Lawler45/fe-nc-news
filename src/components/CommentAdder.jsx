import { useState, useEffect, useContext } from "react";
import { UserContext } from "./UserProvider";
import { postComment } from "../api";

const CommentAdder = ({ article_id, setComments }) => {
  const [comment, setComment] = useState({author: '', body: '', votes:0});
  const { user } = useContext(UserContext);
  const [disabled, setDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')

  const handleTyping = (event) => {
    setComment({ author: user, body: event.target.value, votes: 0 });
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (comment.body.length < 10) {
      setError('Comment must be at least 10 characters.');
      return;
    }

    if (!disabled) {
      setComments((currentComments) => [comment, ...currentComments]);
      postComment(article_id, comment.author, comment.body)
        .then(() => {
          setComment({ author: '', body: '', votes: 0 });
          setDisabled(true);
        })
        .catch((error) => {
          console.error(error);
          setError('Error posting comment. Please try again.');
        });
    }
  };
  return (
    <form className="commentForm">
      <label className= 'commentLabel' htmlFor="comment">Add Comment:</label>
      <textarea className="commentInput" value={comment.body} onChange={handleTyping}></textarea>
      <button className="commentBtn" onClick={handleSubmit} disabled={disabled}>
        {disabled ? "Posting..." : "Submit!"}
      </button>
      <p className="error">{error}</p>
    </form>
  );
};

export default CommentAdder;
