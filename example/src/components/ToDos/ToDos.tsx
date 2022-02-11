import { Provider } from "react-branch-provider";
import Heading2 from "../common/Heading2";
import { todosProvider } from "./todos.provider";
import ToDosList from "./ToDosList";

function ToDos() {
  return (
    <Provider state={todosProvider}>
      <Heading2>ToDos</Heading2>

      <br />

      <ToDosList />
    </Provider>
  );
}

export default ToDos;
