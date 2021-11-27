import React, { useState } from "react";

const AddCommentForm = ({ articleName, setArticleInfo }) => {
  let [username, setUsername] = useState("");
  let [commentText, setCommentText] = useState("");

  let addComment = async () => {
    let postBody = JSON.stringify({
      username: username,
      comment: commentText,
    });
    let result = await fetch(
      `http://localhost:7001/api/articles/${articleName}/comment`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: postBody,
      }
    );
    let body = await result.json();
    setArticleInfo(body);
    setUsername("");
    setCommentText("");
  };

  return (
    <div>
      <h3>Add a Comment</h3>
      <label>
        Name:&nbsp;
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        Comment:&nbsp;
        <textarea
          row="4"
          cols="50"
          value={commentText}
          onChange={(event) => setCommentText(event.target.value)}
        />
      </label>
      <button onClick={() => addComment()}>Add Comment</button>
    </div>
  );
};

export default AddCommentForm;
