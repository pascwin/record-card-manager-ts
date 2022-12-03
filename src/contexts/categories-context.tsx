import { createContext, useState, useEffect, useContext } from "react";
import { getCategories } from "../utils/firebase.utils";
import { UserContext } from "./user-context";

export const CategoriesContext = createContext<any>({
  categories: [],
  setCategories: () => {},
});

export const CategoriesProvider = ({ children }: any) => {
  const [categories, setCategories] = useState<any>();
  const { currentUser } = useContext(UserContext);

  const value = { categories };

  useEffect(() => {
    const getAllCategories = async () => {
        const categories = await getCategories(currentUser.uid);
        setCategories(categories);
    };
    if (currentUser) {
        getAllCategories()
    }
  }, [currentUser]);

  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  )
};
