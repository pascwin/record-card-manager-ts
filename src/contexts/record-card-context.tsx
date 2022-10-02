import { createContext, ReactNode, useEffect, useState } from "react";
import { getRecordCards } from "../utils/firebase.utils";

export const RecordCardContext = createContext<any>({
  cards: [],
});

type RecordCardProviderProps = {
  children: ReactNode;
};

export const RecordCardProvider = ({ children }: RecordCardProviderProps) => {
  const [recordCards, setRecordCards] = useState<any>();

  const value = {recordCards, setRecordCards}

  useEffect(() => {
    const getAllRecordCards = async () => {
      const cards = await getRecordCards();
      setRecordCards(cards)
    };
    getAllRecordCards()
  }, []);

  return (
    <RecordCardContext.Provider value={value}>
      {children}
    </RecordCardContext.Provider>
  );
};
