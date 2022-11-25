import { useReducer, useEffect, useState } from "react";

//firebase
import { db, timestamp } from "../firebase/config";
import { collection, setDoc, doc } from "firebase/firestore";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const firestoreReducer = (state: any, action: any) => {
  switch (action.type) {
    case "IS_PENDING":
      return { isPending: true, document: null, success: false, error: null };
    case "ADDED_DOCUMENT":
      return {
        isPending: false,
        document: action.payload,
        success: true,
        error: null,
      };
    case "DELETED_DOCUMENT":
      return { isPending: false, document: null, success: true, error: null };
    case "ERROR":
      return {
        isPending: false,
        document: null,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const useFirestore = (table: any) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  //only dispatch is not cancelled
  const dispatchIfNotCancelled = (action: any) => {
    if (!isCancelled) {
      dispatch(action);
    }
  };

  // add document alternative
  // const addDocument = async (doc: any) => {
  //   dispatch({ type: "IS_PENDING" });
  //   try {
  //     const createdAt = timestamp.fromDate(new Date());
  //     const addedDocument = await addDoc(collection(db, table), {
  //       ...doc,
  //       createdAt,
  //     });
  //     console.log(addedDocument);
  //     dispatchIfNotCancelled({
  //       type: "ADDED_DOCUMENT",
  //       payload: addedDocument,
  //     });
  //   } catch (err: any) {
  //     dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
  //   }
  // };

  const addDocument = async(document:any) => {
    dispatch({ type: "IS_PENDING" });
    try {
      const docRef = collection(db, table)
      const createdAt = timestamp.fromDate(new Date());
      const id = String(Math.random())
      const addedDocument = await setDoc(doc(docRef, id), {
        ...document,
        createdAt,
        id,
      })
      console.log(addedDocument);
      dispatchIfNotCancelled({
        type: "ADDED_DOCUMENT",
        payload: addedDocument,
      });
    } catch (err: any) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  }

  //delete document
  // const deleteDocument = async (id: any) => {
  //     dispatch({ type: "IS_PENDING" })
  //     try {
  //         await ref.doc(id).delete()
  //         dispatchIfNotCancelled({ type: "DELETED_DOCUMENT" })
  //     } catch (err) {
  //         dispatchIfNotCancelled({type: "ERROR", payload: "could not delete"})
  //     }
  // }

  useEffect(() => {
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return { addDocument, response };
};
