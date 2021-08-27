import React, { useState } from "react";
import axios from "axios";
import { url_comments } from "./config";

const CommentCreate = (props) => {
  const { postId } = props;
  const [content, setContent] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    await axios.post(`${url_comments}/posts/${postId}/comments`, { content });
    setContent("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            className="form-control"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
