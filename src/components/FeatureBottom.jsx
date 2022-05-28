import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCommentItems } from "../stores/comments";
import ArticleTabs from "./ArticleTabs";
import InputComment from "./InputComment";
import ListComment from "./ListComment";
import Presentation from "./Presentation";
import TableData from "./TableData";

const FeatureBottom = () => {
  const ref = useRef();
  const dispatch = useDispatch();
  const tabs = useSelector(({ tabs }) => tabs);

  useEffect(() => {
    if (ref.current === true) return;
    ref.current = true;

    dispatch(getCommentItems());
  }, []);

  return (
    <>
      <ArticleTabs />
      <hr style={{ margin: "0 0 10px 0" }} />
      {tabs.tabIndex === 0 ? (
        <div style={{ minHeight: "70vh" }}>
          <InputComment />
          <ListComment />
        </div>
      ) : (
        <div style={{ minHeight: "70vh" }}>
          <Presentation />
          <TableData />
        </div>
      )}
    </>
  );
};

export default FeatureBottom;
