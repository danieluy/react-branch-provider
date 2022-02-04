import { BaseProvider } from "branch-state";

export interface UserInfo {
  name: string;
  lastName?: string;
  email: string;
}

class UserProvider extends BaseProvider<UserInfo> {
  updateUserProp = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState((state: UserInfo) => {
      state[evt.target.name as keyof UserInfo] = evt.target.value;
    });
  };
}

export const userProvider = new UserProvider({ name: "", email: "" });
