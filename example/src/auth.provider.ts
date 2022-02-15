import { createProvider } from "react-branch-provider";
import { User } from "./types/user";

interface AuthState {
  user?: User;
}

export const authProvider = createProvider<AuthState>(
  { user: loadAuthUser() },
  "AuthProvider"
);

export const clearAuthUser = () => {
  authProvider.setState((state) => {
    state.user = undefined;

    removeAuthUser();
  });
};

export const setAuthUser = (user: User) => {
  authProvider.setState((state) => {
    state.user = user;

    storeAuthUser(user);
  });
};

function loadAuthUser(): User | undefined {
  const stringUser = sessionStorage.getItem("AUTH_USER");

  if (!stringUser) {
    return;
  }

  return JSON.parse(stringUser);
}

function storeAuthUser(user: User): void {
  sessionStorage.setItem("AUTH_USER", JSON.stringify(user));
}

function removeAuthUser(): void {
  sessionStorage.removeItem("AUTH_USER");
}
