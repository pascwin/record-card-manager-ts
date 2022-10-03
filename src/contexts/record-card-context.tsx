import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getRecordCards } from "../utils/firebase.utils";
import { UserContext } from "./user-context";

export const RecordCardContext = createContext<any>({
  cards: [],
});

type RecordCardProviderProps = {
  children: ReactNode;
};

export const RecordCardProvider = ({ children }: RecordCardProviderProps) => {
  const [recordCards, setRecordCards] = useState<any>();
  const { currentUser } = useContext(UserContext);

  const value = { recordCards, setRecordCards };

  useEffect(() => {
    const getAllRecordCards = async () => {
      const cards = await getRecordCards(currentUser.uid);
      setRecordCards(cards);
    };
    if (currentUser) {
      getAllRecordCards();
    }
  }, [currentUser]);

  return (
    <RecordCardContext.Provider value={value}>
      {children}
    </RecordCardContext.Provider>
  );
};
