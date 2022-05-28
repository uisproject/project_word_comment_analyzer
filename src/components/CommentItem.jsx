import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateComment, deleteComment } from "../stores/comments";

const CommentItem = ({ body, name, id, actions = false }) => {
  const [newBody, setNewBody] = useState(body);
  const [isEditing, setIsEditing] = useState(false);
  const data = useSelector(({ comments }) => comments.adminComments);
  const dispatch = useDispatch();

  const removeHandler = () => {
    const removedData = data.filter((item) => item.id !== id);
    dispatch(deleteComment(removedData));
  };

  const updateHandler = (e) => {
    const { target } = e;
    setNewBody(target.value);
  };

  return (
    <div
      style={{
        minHeight: "50px",
        backgroundColor: "#3a3b3c",
        border: "transparent",
        padding: "10px 20px 10px 20px",
        boxSizing: "border-box",
        color: "#fff",
        borderRadius: "1.5rem",
        display: "block",
        margin: "20px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ width: "90%", lineHeight: "1.7rem" }}>
          <div>
            <strong>{name}</strong>
          </div>
          {isEditing ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const updatedData = {
                  id,
                  name,
                  body: newBody,
                };
                dispatch(updateComment(updatedData));
                setIsEditing(false);
              }}
            >
              <input
                type={"text"}
                value={newBody}
                onChange={(e) => {
                  updateHandler(e);
                }}
                style={{
                  backgroundColor: "#3A3B3C",
                  border: "#fff 1px solid",
                  borderRadius: "10px",
                  padding: "5px 10px",
                  color: "#fff",
                }}
              />
            </form>
          ) : (
            <div>{body}</div>
          )}
        </div>
        {actions && (
          <div style={{ color: "#fff", display: "flex" }}>
            <i
              className="fa-regular fa-pen-to-square"
              onClick={() => {
                setIsEditing(!isEditing);
                setNewBody(body);
              }}
              style={{ margin: "0 10px", cursor: "pointer" }}
            ></i>
            <i
              className="fa-regular fa-trash-can"
              onClick={removeHandler}
              style={{ cursor: "pointer" }}
            ></i>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentItem;
