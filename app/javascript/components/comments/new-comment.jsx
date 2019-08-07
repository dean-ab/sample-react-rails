import React, { useState } from "react";

const NewComment = ({ article }) => {
  const [commenter, setCommenter] = useState("");
  const [text, setText] = useState("");

  return (
    <>
      <h2>Add a comment:</h2>
      <div>
        <p>
          <label>Commenter Name</label>
          <input
            type="text"
            name="comment[commenter]"
            value={commenter}
            onChange={e => setCommenter(e.target.value)}
          />
        </p>
        <p>
          <label>Text</label>
          <input
            type="textarea"
            name="comment[body]"
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </p>
        <form method="get" action={`${article.id}/new`}>
          <input value="Submit" type="submit" />
        </form>
      </div>
    </>
  );
};

export default NewComment;
