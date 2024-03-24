"use client";

import UserContext from "@/contexts/userContext";
import { useContext } from "react";

interface UserContext {
  user: any;
  setUser: any;
}

const useUser = () => {
  const { user, setUser } = useContext<UserContext>(UserContext);

  return { user, setUser };
};

export default useUser;
