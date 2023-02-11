import { useEffect, useState } from "react";

const Gridcard = ({ title, subtitle, removeTodo, todoItem }) => {
  const [checked, setChecked] = useState();
  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };
  useEffect(() => {
    console.log("checked!");

    checked
      ? (document.getElementById(
          `checked-${todoItem.id}`
        ).style.backgroundColor = "rgba(255, 255, 0, 0.5)") &&
        (document.getElementById(`checked-${todoItem.id}`).style.color =
          "rgba(0, 0, 0, 0.9)")
      : (document.getElementById(
          `checked-${todoItem.id}`
        ).style.backgroundColor = "rgba(0, 0, 0, 0.9)") &&
        (document.getElementById(`checked-${todoItem.id}`).style.color =
          "rgb(202, 192, 192)");
  }, [checked, todoItem.id]);

  return (
    <div className="card" id={`checked-${todoItem.id}`}>
      <input
        checked={checked}
        onChange={handleCheckboxChange}
        className="input"
        type="checkbox"
        name="check"
        id={`check-${todoItem.id}`}
      />
      <label htmlFor={`check-${todoItem.id}`}> </label>
      <div
        className="todoItems"
        style={{ width: "70%", wordWrap: "break-word" }}
      >
        <h2> {todoItem.task} </h2> <p> {todoItem.subtask} </p>
      </div>
      <div className="actions">
        {checked && (
          <i className="fa-solid fa-check" style={{ color: "green" }}></i>
        )}
        <i
          className="fa-solid fa-trash"
          style={{ color: "red" }}
          onClick={() => removeTodo(todoItem.id)}
        ></i>
      </div>
    </div>
  );
};

export default Gridcard;
