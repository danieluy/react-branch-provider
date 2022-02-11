import { Provider } from "react-branch-provider";
import Heading2 from "../common/Heading2";
import { userProvider } from "./user.provider";
import UserDisplay from "./UserDisplay";
import UserForm from "./UserForm";

function User() {
  return (
    <Provider state={userProvider}>
      <Heading2>User</Heading2>

      <UserDisplay />

      <UserForm />
    </Provider>
  );
}

export default User;
