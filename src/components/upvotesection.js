import React from "react";

const UpvotesSection = ({ articleName, upvotes, setArticleInfo }) => {
  let upvote = async () => {
    let result = await fetch(
      `http://localhost:7001/api/articles/${articleName}/upvote`,
      {
        method: "POST",
      }
    );
    let body = await result.json();
    setArticleInfo(body);
  };

  return (
    <p>
      This post has {upvotes} upvotes.&nbsp;
      <button onClick={() => upvote()}>Add Upvote</button>
    </p>
  );
};
export default UpvotesSection;
