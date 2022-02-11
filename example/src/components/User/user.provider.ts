import { BranchProvider } from "react-branch-provider";
import { User } from "../../types/user";

class UserProvider extends BranchProvider<User> {
  updateUserProp = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState((state: User) => {
      state[evt.target.name as keyof User] = evt.target.value;
    });
  };

  initUserInfo = (user: User): void => {
    this.setState(() => {
      return user;
    });
  };

  resetUserInfo = (): void => {
    this.setState(() => {
      return { name: "", email: "" };
    });
  };
}

export const userProvider = new UserProvider({ name: "", email: "" });
