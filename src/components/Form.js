import React, { useState } from "react";

const Form = ({ onAdd }) => {
  const [task, setTask] = useState("");
  const [subtask, setSubTask] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    onAdd({ task, subtask });
    setTask("");
    setSubTask("");
  };
  return (
    <div>
      <form action="" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Task"
          required
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="text"
          placeholder="Sub Task"
          value={subtask}
          onChange={(e) => setSubTask(e.target.value)}
        />
        <button type="submit" value="Add">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
