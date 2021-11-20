import React from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import content from "./content.js";
import ListComponent from "../components/listcomponent.js";
import NotFoundPage from "./notfound.js";

const ArticlePage = ({ match }) => {
  let { name } = useParams();
  let article = content.find((article) => article.name === name);
  let otherArticles = content.filter((article) => article.name !== name);

  if (!article) return <NotFoundPage />;

  return (
    <>
      <h1>{article.title}</h1>
      {ReactHtmlParser(article.content)}
      <h2>Other Article</h2>
      <ListComponent articles={otherArticles} />
    </>
  );
};

export default ArticlePage;
