import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createComment } from "../stores/comments";

const InputComment = () => {
  const [value, setValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

  const onInputHandler = (e) => {
    const { target } = e;
    setValue(target.value);

    if (target.value.length <= 0) return setIsVisible(false);

    return setIsVisible(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (value.length === 0) {
      alert("Comment must be filled");
      return;
    }

    const data = {
      name: "Admin",
      body: value,
    };

    dispatch(createComment(data));
    setValue("");
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <div
          className="input-comment-wrapper"
          style={{
            width: "100%",
            margin: "auto",
            padding: "20px 0",
            position: "relative",
          }}
        >
          <input
            type="text"
            className="input-comment"
            placeholder="Write a comment"
            value={value}
            onChange={(e) => {
              onInputHandler(e);
            }}
            style={{
              backgroundColor: "#3a3b3c",
              border: "transparent",
              width: "100%",
              minHeight: "50px",
              padding: "10px 130px 10px 20px",
              boxSizing: "border-box",
              color: "#fff",
              borderRadius: "1.5rem",
            }}
          />
          <span
            style={{
              position: "absolute",
              right: "25px",
              top: "50%",
              transform: "translateY(-50%)",
              color: "#707070",
              fontSize: "1rem",
              display: isVisible ? "block" : "none",
            }}
          >
            Press Enter
          </span>
        </div>
      </form>
    </>
  );
};

export default InputComment;
