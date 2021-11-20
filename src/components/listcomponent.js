import React from "react";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const ListComponent = ({ articles, sample }) => (
  <>
    {articles.map((article, key) => (
      <>
        <h3>
          <Link key={key} to={`/article/${article.name}`}>
            {article.title}
          </Link>
        </h3>
        {sample === true ? (
          <p>{ReactHtmlParser(article.content.substring(3, 150))}...</p>
        ) : null}
      </>
    ))}
  </>
);
export default ListComponent;
