import React from "react";
import NewComment from "./comments/new-comment";
import Comment from "./comments/comment";

const Article = ({ article, comments }) => {
  const renderArticle = () => (
    <div>
      <p>
        <strong>{article.title}</strong>
      </p>
      <p>
        <strong>{article.text}</strong>
      </p>
    </div>
  );

  console.log(comments);

  const renderComments = () =>
    comments.map(comment => <Comment key={comment.id} comment={comment} />);
  return (
    <div>
      {renderArticle()}
      {renderComments()}
      <NewComment article={article} />
    </div>
  );
};

export default Article;
