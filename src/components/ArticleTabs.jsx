import React from "react";
import { useSelector } from "react-redux";

const ArticleTabs = () => {
  const data = useSelector(({ comments }) => comments);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ padding: "20px 0", marginRight: "20px" }}>
        <i
          className="fa-solid fa-comment-dots"
          style={{ fontSize: "24px", marginRight: "10px" }}
        ></i>
        <span>{data.data.length + data.adminComments.length} Comments</span>
      </div>
      <div>
        <div style={{ padding: "20px 0" }}>
          <i
            className="fa-regular fa-chart-bar"
            style={{ fontSize: "24px", marginRight: "10px" }}
          ></i>
          <span>Analyze Comments</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleTabs;
