import { useReducer, useEffect, useState, useCallback } from "react";

//firebase
import { db, timestamp } from "../firebase/config";
import {
  collection,
  setDoc,
  doc,
  updateDoc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";

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

  const addDocument = async (document: any) => {
    dispatch({ type: "IS_PENDING" });
    try {
      const docRef = collection(db, table);
      const createdAt = timestamp.fromDate(new Date());
      const id = String(Math.random());
      const addedDocument = await setDoc(doc(docRef, id), {
        ...document,
        createdAt,
        id,
      });
      dispatchIfNotCancelled({
        type: "ADDED_DOCUMENT",
        payload: addedDocument,
      });
    } catch (err: any) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  const updateDocument = async (id: any, updates: any) => {
    try {
      const docRef = doc(db, table, id);
      await updateDoc(docRef, updates);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const deleteDocument = async (id: any) => {
    try {
      const docRef = doc(db, table, id);
      await deleteDoc(docRef);
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const getOneDocument = useCallback(async (id: any) => {
    if (!id) {
      return;
    }
    try {
      const docRef = doc(db, table, id);
      const docSnap = await getDoc(docRef);
      return docSnap.data();
    } catch (err: any) {
      console.log(err.message);
    }
  }, [table]);

  useEffect(() => {
    return () => {
      setIsCancelled(true);
    };
  }, []);

  return {
    addDocument,
    updateDocument,
    deleteDocument,
    getOneDocument,
    response,
  };
};
