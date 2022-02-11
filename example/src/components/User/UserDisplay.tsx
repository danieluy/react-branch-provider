import { useBranchState } from "react-branch-provider";
import { User } from "../../types/user";
import { userProvider } from "./user.provider";
import "./UserDisplay.css";

const UserDisplay: React.FC = (): JSX.Element => {
  const user = useBranchState<User>(userProvider);

  return (
    <>
      <div className="user-card">
        <div className="user-avatar">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
            alt="user avatar"
          />
        </div>
        <div className="user-info">
          <p className="bold">
            {user.name} {user.lastName}
          </p>
          {!!user.email && <p>{user.email}</p>}
        </div>
      </div>
    </>
  );
};

export default UserDisplay;
