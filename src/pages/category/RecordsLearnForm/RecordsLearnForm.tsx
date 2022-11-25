import { useRef } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../firebase/config";

const RecordsLearnForm = ({ record }: any) => {
  const answer = useRef<HTMLInputElement>(null);
  const recordRef = doc(db, "records", "0.2479293020170119");
  console.log(recordRef)
  console.log(record)
  const checkAnswerHandler = () => {
    if (answer.current?.value === record.answer) {
      console.log("you are right!");
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
