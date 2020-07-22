// You will add code to this file
import React from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  console.log("this is comments props", props)
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {props.comments.map(p => (
        <Comment 
          key={p.comment}
          comment={p}
        />
      ))}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
