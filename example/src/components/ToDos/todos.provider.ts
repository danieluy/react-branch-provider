import { createProvider } from "react-branch-provider";
import { ToDo } from "../../types/todo";
import { getToDos as fetchToDos } from "../services/todos.service";
import { getLocal, isOnState, setLocal } from "./todos.helpers";

export interface TodosState {
  todos: ToDo[];
}

const initialState: TodosState = { todos: getLocal() };

export const todosProvider = createProvider(initialState, "TodosProvider");

export const getToDos = async () => {
  const todos = await fetchToDos();

  todosProvider.setState((state) => {
    todos.forEach((todo) => {
      if (!isOnState(state, todo)) {
        state.todos.push(todo);
      }
    });

    setLocal(state.todos);
  });
};

export const checkTodo = (todoId: number, completed: boolean) => {
  todosProvider.setState((state) => {
    for (const todo of state.todos) {
      if (todo.id === todoId) {
        todo.completed = completed;
        break;
      }
    }

    setLocal(state.todos);
  });
};
