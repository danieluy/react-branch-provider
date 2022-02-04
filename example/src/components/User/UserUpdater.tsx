import { useBranchState } from "branch-state";
import { UserInfo } from "../../types/user-info";
import { userProvider } from "./user.provider";

const UserUpdater: React.FC = (): JSX.Element => {
  const state = useBranchState<UserInfo>(userProvider);

  return (
    <>
      <label htmlFor="user-name-input">Name</label>{" "}
      <input
        id="user-name-input"
        name="name"
        type="text"
        value={state.name}
        onChange={userProvider.updateUserProp}
      />
      <br />
      <label htmlFor="user-lastName-input">Last Name</label>{" "}
      <input
        id="user-lastName-input"
        name="lastName"
        type="text"
        value={state.lastName || ""}
        onChange={userProvider.updateUserProp}
      />
      <br />
      <label htmlFor="user-email-input">Email</label>{" "}
      <input
        id="user-email-input"
        name="email"
        type="text"
        value={state.email}
        onChange={userProvider.updateUserProp}
      />
    </>
  );
};

export default UserUpdater;
