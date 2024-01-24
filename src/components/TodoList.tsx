import { TodoModel } from "../model";
import SingleTodo from "./SingleTodo";
import { Action } from "../reducer/todoReducer";
import "./TodoList.css";

interface TodoListProps {
  todos: TodoModel[];
  dispatch: React.Dispatch<Action>;
}

function TodoList({ todos, dispatch }: TodoListProps) {
  const activeTasks = todos.filter((todo) => !todo.isDone);
  const completedTasks = todos.filter((todo) => todo.isDone);

  return (
    <div className="container">
      {activeTasks.length > 0 && (
        <div className="todos">
          <span className="todos-heading">Active Tasks</span>
          {activeTasks.map((todo) => (
            <SingleTodo key={todo.id} todo={todo} dispatch={dispatch} />
          ))}
        </div>
      )}

      {completedTasks.length > 0 && (
        <div className="todos remove">
          <span className="todos-heading">Completed Tasks</span>
          {completedTasks.map((todo) => (
            <SingleTodo key={todo.id} todo={todo} dispatch={dispatch} />
          ))}
        </div>
      )}
    </div>
  );
}

export default TodoList;
