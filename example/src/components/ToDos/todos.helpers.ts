import { ToDo } from "../../types/todo";
import { TodosState } from "./todos.provider";

export function getLocal(): ToDo[] {
  const todos = JSON.parse(localStorage.getItem("TODOS") ?? "[]");
  return todos as ToDo[];
}

export function setLocal(todos: ToDo[]) {
  localStorage.setItem("TODOS", JSON.stringify(todos));
}

export function isOnState(state: TodosState, candidate: ToDo): boolean {
  return state.todos.some((todo) => todo.id === candidate.id);
}
