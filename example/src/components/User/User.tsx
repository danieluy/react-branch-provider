import { Provider } from "branch-state";
import { userProvider } from "./user.provider";
import UserDisplay from "./UserDisplay";
import UserUpdater from "./UserUpdater";

function User() {
  return (
    <Provider state={userProvider}>
      <h2>User</h2>
      <UserUpdater />

      <UserDisplay />
    </Provider>
  );
}

export default User;
