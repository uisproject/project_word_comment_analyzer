import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTabIndex } from "../stores/tabs";

const ArticleTabs = () => {
  const data = useSelector(({ comments }) => comments);
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex" }}>
      <div
        onClick={() => {
          dispatch(setTabIndex(0));
        }}
        style={{ padding: "20px 0", marginRight: "20px", cursor: "pointer" }}
      >
        <i
          className="fa-solid fa-comment-dots"
          style={{ fontSize: "24px", marginRight: "10px" }}
        ></i>
        <span>{data.data.length + data.adminComments.length} Comments</span>
      </div>
      <div>
        <div
          onClick={() => {
            dispatch(setTabIndex(1));
          }}
          style={{ padding: "20px 0", cursor: "pointer" }}
        >
          <i
            className="fa-regular fa-chart-bar"
            style={{ fontSize: "24px", marginRight: "10px" }}
          ></i>
          <span>Analyze last 10 Comments</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleTabs;
