import { useRef } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";

const RecordsLearnForm = ({ record, getToday }: any) => {
  const answer = useRef<HTMLInputElement>(null);
  const recordRef = doc(db, "records", record.id);

  const checkAnswerHandler = async() => {
    if (answer.current?.value === record.answer) {
      console.log("you are right!");
      await updateDoc(recordRef, {
        stage: record.stage + 1,
        lastRepeat: getToday()
      })
    }
  };

  return (
    <div>
      <p>question: {record?.question}</p>
      <input ref={answer} />
      <button onClick={checkAnswerHandler}>Check Answer</button>
    </div>
  );
};

export default RecordsLearnForm;
