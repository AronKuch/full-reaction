import React from "react";
import { useParams } from "react-router-dom";
import content from "./content.js";
import ReactHtmlParser from "react-html-parser";

const ArticlePage = ({ match }) => {
  let { name } = useParams();
  let article = content.find((article) => article.name === name);
  return (
    <>
      <h1>{article.title}</h1>
      {ReactHtmlParser(article.content)}
    </>
  );
};

export default ArticlePage;
