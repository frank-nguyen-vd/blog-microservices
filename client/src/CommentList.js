import React, { useState, useEffect } from "react";
import axios from "axios";
import { url_comments } from "./config";

const CommentList = (props) => {
  const { postId } = props;
  const [comments, setComments] = useState([]);
  const fetchData = async () => {
    const res = await axios.get(`${url_comments}/posts/${postId}/comments`);

    setComments(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderedComments = comments.map((comment) => {
    return <li key={comment.id}>{comment.content}</li>;
  });
  return <ul>{renderedComments}</ul>;
};

export default CommentList;
