import { ToDo } from "../../types/todo";

export const getToDos = async (): Promise<ToDo[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
};

export const getToDo = async (postId: number): Promise<ToDo> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${postId}`
  );
  return response.json();
};
