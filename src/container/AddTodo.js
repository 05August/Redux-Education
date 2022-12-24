import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import { addName } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;
  const [name, setName] = useState("");

  return (
    <div>
      <form
        onSubmit={(e) => {
          const now = new Date();
          const time = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
          e.preventDefault();

          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(time, e.target[0].value));
          e.target[0].value = "";
        }}
      >
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">Add Todo</button>
      </form>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        type="button"
        onClick={() => {
          dispatch(addName(name));
          setName("");
        }}
      >
        Add Name
      </button>
    </div>
  );
};

export default connect()(AddTodo);
