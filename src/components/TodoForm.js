import React, { useState } from "react";
import shortid from "shortid";

const TodoForm = (props) => {
  const [inputText, setInputText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      id: shortid.generate(),
      text: inputText,
      complete: false,
    });
    setInputText("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="input-field"
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
