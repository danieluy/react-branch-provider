import { useBranchState } from "branch-state";
import { useCallback, useEffect, useState } from "react";
import { ToDo } from "../../types/todo";
import {
  checkTodo,
  getToDos,
  todosProvider,
  TodosState,
} from "./todos.provider";
import "./ToDosList.css";

const ToDosList: React.FC = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false);
  const todos = useBranchState<TodosState, ToDo[]>(
    todosProvider,
    (state) => state.todos
  );

  const handleGetTodos = useCallback(async () => {
    try {
      setIsLoading(true);

      await getToDos();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    handleGetTodos();
  }, [handleGetTodos]);

  if (isLoading) {
    return (
      <article className="article">
        <p>Loading...</p>
      </article>
    );
  }

  return (
    <ul className="to-do-list">
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            <input
              type="checkbox"
              name="todo"
              id={`todo-checkbox-${todo.id}`}
              checked={todo.completed}
              onChange={(evt) => checkTodo(todo.id, evt.target.checked)}
            />

            <label className="to-do-label" htmlFor={`todo-checkbox-${todo.id}`}>
              {todo.title}
            </label>
          </li>
        );
      })}
    </ul>
  );
};

export default ToDosList;
