import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const CategoryContext = createContext<any>({
  category: [],
  setCategories: () => {},
});

export const CategoriesProvider = ({ children }: any) => {
  const [category, setCategory] = useState<any>();
  const [records, setRecords] = useState<any>();
  const { user: currentUser } = useAuthContext();

  const value = { category, setCategory };

  useEffect(() => {
    
  }, [currentUser]);

  return (
    <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
  )
};
