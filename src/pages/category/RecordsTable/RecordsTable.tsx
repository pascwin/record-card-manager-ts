import { collection, onSnapshot, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase/config";

const RecordsTable = ({ category, uid }: any) => {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    let ref: any = collection(db, "records");
    ref = query(
      ref,
      where("uid", "==", uid),
      where("category", "==", category)
    );
    console.log(ref);
    const unsub = onSnapshot(
      ref,
      (querySnapshot: any) => {
        const results: any = [];
        querySnapshot.forEach((doc: any) => {
          results.push(doc.data());
        });
        setRecords(results);
      },
      (error: any) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, [uid, category]);

  return (
    <div>
      <h3>Records for {category}</h3>
      <div>
        {records?.map((record: any) => {
          return (
            <p key={record.answer}>
              {record.question} {record.answer}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default RecordsTable;
