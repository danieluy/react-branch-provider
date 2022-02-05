import { Provider } from "react-branch-provider";
import { userProvider } from "./user.provider";
import UserDisplay from "./UserDisplay";
import UserForm from "./UserForm";

function User() {
  return (
    <Provider state={userProvider}>
      <h2>User</h2>
      <UserDisplay />

      <UserForm />
    </Provider>
  );
}

export default User;
