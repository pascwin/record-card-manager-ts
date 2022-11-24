import { useEffect, useRef, useState } from "react";

//firebase
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

export const useCollection = (
  table: any,
  _query: any,
  _query2: any,
  _orderBy: any
) => {
  const [documents, setDocuments] = useState<any[]>([]);
  const [error, setError] = useState(null);

  //to avoid an infintife loop
  //when you compare arrays with same content is must not be true
  //in this case it is false, because the array will be recreated by rerendering
  //and then the reference is different and it will be false
  const q = useRef(_query).current;
  const q2 = useRef(_query2).current;

  useEffect(() => {
    let ref: any = collection(db, table);

    if (q && !q2) {
      ref = query(ref, where(q[0], q[1], q[2]));
    }

    if(q && q2.length > 0) {
        ref = query(ref, where(q[0], q[1], q[2]), where(q2[0], q2[1], q2[2]));
    }

    const unsub = onSnapshot(
      ref,
      (querySnapshot: any) => {
        const results: any = [];
        querySnapshot.forEach((doc: any) => {
          results.push(doc.data());
        });
        setDocuments(results);
        setError(null);
      },
      (error: any) => {
        console.log(error);
      }
    );
    //unsubscripe on unmount
    return () => {
      unsub();
    };
  }, [table, q, q2]);

  return { documents, error };
};
