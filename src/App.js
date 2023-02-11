import { useEffect, useState } from "react";
import Task from "./components/Task";
import Add from "./components/Add";
import Form from "./components/Form";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  // form toggle
  const handleToggle = () => {
    console.log("clicked");
    return setShowForm(!showForm);
  };
  // form togle state management
  useEffect(() => {
    console.log("rendered");
    console.log(showForm);
  }, [showForm]);
  const [todo, setTodo] = useState([
    {
      id: 1,
      task: "My Task",
      subtask: "sub-task",
    },
  ]);
  const addTodo = (addedTodo) => {
    const id = Math.floor(((Math.random() * 10) / Math.random()) * 2);
    const newTodo = { id, ...addedTodo };
    setTodo([...todo, newTodo]);
    console.log(newTodo);
  };
  const DeleteTodo = (id) => {
    console.log("clicked", id);
    setTodo(todo.filter((todo) => todo.id !== id));
  };
  return (
    <div className="todoApp">
      <h1 style={{ color: "rgb(202, 192, 192)" }}>Todo App</h1>
      {showForm && <Form onAdd={addTodo} />}
      <Task todos={todo} onDeleteTodo={DeleteTodo} />
      <Add isClicked={handleToggle} onShow={showForm} />
    </div>
  );
};

export default App;
