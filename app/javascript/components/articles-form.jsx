import React, { useState } from "react";

const ArticlesForm = ({ title, text }) => {
  const [newTitle, setTitle] = useState(title || "");
  const [newText, setText] = useState(text || "");

  return (
    <div>
      <p>
        <label>Title</label>
        <input
          type="text"
          name="article[title]"
          value={newTitle}
          onChange={e => setTitle(e.target.value)}
        />
      </p>
      <p>
        <label>Text</label>
        <input
          type="textarea"
          name="article[text]"
          value={newText}
          onChange={e => setText(e.target.value)}
        />
      </p>
      <p>
        <button type="submit">Submit</button>
      </p>
    </div>
  );
};

export default ArticlesForm;
