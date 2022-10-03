import { createContext, ReactNode, useEffect, useState } from "react";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase.utils";

export const UserContext = createContext<any>({
  currentUser: null,
  setCurrentUser: () => {},
});

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const value = { currentUser, setCurrentUser, isLoggedIn, setIsLoggedIn };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user: any) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user)
    });
    return unsubscribe
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};