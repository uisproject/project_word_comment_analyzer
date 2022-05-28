import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { getCommentItems } from "../stores/comments";
import ArticleTabs from "./ArticleTabs";
import InputComment from "./InputComment";
import ListComment from "./ListComment";

const Comments = () => {
  const ref = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (ref.current === true) return;
    ref.current = true;

    dispatch(getCommentItems());
  }, []);

  return (
    <>
      <ArticleTabs />
      <hr style={{ margin: "0 0 10px 0" }} />
      <InputComment />
      <ListComment />
    </>
  );
};

export default Comments;
