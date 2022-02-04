import { useBranchState } from "branch-state";
import { UserInfo, userProvider } from "./user.provider";
import "./UserForm.css";

const UserForm: React.FC = (): JSX.Element => {
  const state = useBranchState<UserInfo>(userProvider);

  return (
    <form>
      <div className="field-group">
        <label className="user-form-label" htmlFor="user-name-input">
          Name
        </label>{" "}
        <input
          id="user-name-input"
          name="name"
          type="text"
          value={state.name}
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
          value={state.lastName || ""}
          onChange={userProvider.updateUserProp}
        />
      </div>

      <div className="field-group">
        <label className="user-form-label" htmlFor="user-email-input">
          Email
        </label>{" "}
        <input
          id="user-email-input"
          name="email"
          type="text"
          value={state.email}
          onChange={userProvider.updateUserProp}
        />
      </div>
    </form>
  );
};

export default UserForm;
