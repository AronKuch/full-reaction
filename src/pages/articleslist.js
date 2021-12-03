import React from "react";
import ListComponent from "../components/listcomponent.js";
import content from "./content.js";

const ArticleListPage = () => (
  <div className="content-width">
    <h1>Articles</h1>
    <ListComponent articles={content} sample={true} />
  </div>
);

export default ArticleListPage;
