import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadPrevComments } from "../stores/comments";
import CommentItem from "./CommentItem";

const ListComment = () => {
  const data = useSelector(({ comments }) => comments);
  const dispatch = useDispatch();

  if (data.isLoading)
    return <h4 style={{ textAlign: "center" }}>Loading...</h4>;

  return (
    <div>
      <div
        onClick={() => {
          dispatch(loadPrevComments());
        }}
        style={{
          cursor: "pointer",
          userSelect: "none",
          display: "inline-block",
        }}
      >
        View Previous Comments
      </div>
      {data.data
        .slice(0, data.show)
        .map((item) => <CommentItem key={item.id} {...item} />)
        .reverse()}
      {data.adminComments
        .slice(0, data.adminComments.length)
        .map((item, idx) => (
          <CommentItem key={idx} {...item} actions={true} />
        ))}
    </div>
  );
};

export default ListComment;
