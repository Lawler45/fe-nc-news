import { deleteComment } from "../api";
import { UserContext } from "./UserProvider";
import { useContext, useState } from "react";

const CommentRemover = ({ comment_id, author, setComments, comments }) => {
  const { user } = useContext(UserContext);
  const [disabled, setDisabled] = useState(false);


  const handleDelete = (comment_id) => {
    if (!disabled) {
      setComments((currentComments) => currentComments.filter((comment)=> comment.comment_id !== comment_id));
    }
    setDisabled(true);

    deleteComment(comment_id)
    .then(() => {
      return <p>Comment Successfully deleted</p>
    })
    .catch((error) => {
      setComments(comments)
      return <p>Error deleting comments</p>
    })

  };
  if (user === author) {
    return (
      <button
        className="deleteBtn"
        onClick={() => {
          handleDelete(comment_id);
        }}
        disabled={disabled}
      >
        {disabled ? "Deleting..." : "Delete"}
      </button>
    );
  }
};

export default CommentRemover;
