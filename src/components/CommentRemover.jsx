import { deleteComment } from "../api";
import { UserContext } from "./UserProvider";
import { useContext, useState } from "react";

const CommentRemover = ({ comment_id, author, setComments, comments }) => {
  const { user } = useContext(UserContext);
  const [disabled, setDisabled] = useState(false);

  console.log(comments,'comments')

  const handleDelete = (comment_id) => {
    if (!disabled) {
      deleteComment(comment_id);
      setDisabled(true);
      setComments((currentComments) => [...currentComments - comment_id]);
    }
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
