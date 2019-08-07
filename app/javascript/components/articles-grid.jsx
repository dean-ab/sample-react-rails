import React from "react";

const ArticlesGrid = ({ articles, ...props }) => {
  const renderArticles = () => {
    return articles.map((article, i) => (
      <div key={i}>
        <p>{article.title}</p>
        <p>{article.text}</p>
        <form method="get" action={`/articles/${article.id}`}>
          <input value="Show" type="submit" />
        </form>
        <form method="get" action={`/articles/${article.id}/edit`}>
          <input value="Edit" type="submit" />
        </form>
      </div>
    ));
  };
  return (
    <>
      <h1>Posts</h1>
      {renderArticles()}
      <form method="get" action="articles/new">
        <input value="New" type="submit" />
      </form>
    </>
  );
};

export default ArticlesGrid;
