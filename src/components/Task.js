import Gridcard from "./Gridcard";

const Task = ({ todos, onDeleteTodo }) => {
  return (
    <div>
      {todos.map((todos) => (
        <Gridcard
          key={todos.id}
          todoItem={todos}
          // title={todos.task}
          // subtitle={todos.subtask}
          removeTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
};

export default Task;
