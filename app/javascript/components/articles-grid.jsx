import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  height: 200px;
  width: 200px;
  background: red;
`;

const ArticlesGrid = ({ articles }) => {
  const renderArticles = () => {
    return articles.map((article, i) => (
      <div key={i}>
        <p>{article.title}</p>
        <p>{article.text}</p>
      </div>
    ));
  };
  return <Grid>{renderArticles()}</Grid>;
};

export default ArticlesGrid;
