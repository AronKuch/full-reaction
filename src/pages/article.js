import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import content from "./content.js";
import ListComponent from "../components/listcomponent.js";
import CommentsList from "../components/commentslist.js";
import UpvotesSection from "../components/upvotesection.js";
import AddCommentForm from "../components/addcommentform.js";
import NotFoundPage from "./notfound.js";

const ArticlePage = ({ match }) => {
  let { name } = useParams();
  // Needs refactoring to point to MongoDB results
  // probably also need to add to the back end API for list of article names
  let article = content.find((article) => article.name === name);
  let otherArticles = content.filter((article) => article.name !== name);

  let [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`http://localhost:7001/api/articles/${name}`);
      const body = await result.json();
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article) return <NotFoundPage />;

  return (
    <div className="content-width">
      <h1>{articleInfo.title}</h1>
      <UpvotesSection
        articleName={name}
        upvotes={articleInfo.upvotes}
        setArticleInfo={setArticleInfo}
      />
      {ReactHtmlParser(articleInfo.content)}
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <CommentsList comments={articleInfo.comments} />
      <h2>Other Article</h2>
      <ListComponent articles={otherArticles} />
    </div>
  );
};

export default ArticlePage;
