import { Provider } from "branch-state";
import { todosProvider } from "./todos.provider";
import ToDosList from "./ToDosList";

function ToDos() {
  return (
    <Provider state={todosProvider}>
      <h2>ToDos</h2>

      <br />

      <ToDosList />
    </Provider>
  );
}

export default ToDos;
