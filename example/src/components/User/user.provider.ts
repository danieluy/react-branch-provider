import { BaseProvider } from "branch-state";
import { UserInfo } from "../../types/user-info";

class UserProvider extends BaseProvider<UserInfo> {
  updateUserProp = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState((state: UserInfo) => ({
      ...state,
      [evt.target.name]: evt.target.value,
    }));
  };
}

export const userProvider = new UserProvider({ name: "", email: "" });
