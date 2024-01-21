import { createContext } from "react";

const UserContext = createContext({
  user: null,
  setUser: (session: any) => {},
});

export default UserContext;
