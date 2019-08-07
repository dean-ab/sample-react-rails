import React from "react";

const Comment = ({ comment }) => (
  <div>
    <p>
      <strong>Commenter:</strong> {comment.commenter}
    </p>
    <p>
      <strong>Body: </strong> {comment.body}
    </p>
  </div>
);

export default Comment;
