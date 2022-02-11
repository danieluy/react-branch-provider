import { useEffect } from "react";
import { useBranchState } from "react-branch-provider";
import { authProvider, clearAuthUser, setAuthUser } from "../../auth.provider";
import { userProvider } from "./user.provider";
import "./UserForm.css";

const UserForm: React.FC = (): JSX.Element => {
  const user = useBranchState(userProvider);
  const authUser = useBranchState(authProvider, (state) => state.user);

  useEffect(() => {
    if (authUser) {
      userProvider.initUserInfo(authUser);
    }
  }, [authUser]);

  const handleSubmit = () => {
    if (user.name && user.email) {
      setAuthUser(user);
    } else {
      alert("Complete the required fields");
    }
  };

  const handleSignOut = () => {
    clearAuthUser();
    userProvider.resetUserInfo();
  };

  if (authUser) {
    return <button onClick={handleSignOut}>Sign out</button>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="field-group">
        <label className="user-form-label" htmlFor="user-name-input">
          Name*
        </label>{" "}
        <input
          id="user-name-input"
          name="name"
          type="text"
          value={user.name}
          onChange={userProvider.updateUserProp}
        />
      </div>

      <div className="field-group">
        <label className="user-form-label" htmlFor="user-lastName-input">
          Last Name
        </label>{" "}
        <input
          id="user-lastName-input"
          name="lastName"
          type="text"
          value={user.lastName || ""}
          onChange={userProvider.updateUserProp}
        />
      </div>

      <div className="field-group">
        <label className="user-form-label" htmlFor="user-email-input">
          Email*
        </label>{" "}
        <input
          id="user-email-input"
          name="email"
          type="text"
          value={user.email}
          onChange={userProvider.updateUserProp}
        />
      </div>

      <button type="submit" disabled={!user.name || !user.email}>
        Register
      </button>
    </form>
  );
};

export default UserForm;
