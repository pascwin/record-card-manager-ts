import { useRef } from "react";
import { useFirestore } from "../../../hooks/useFirestore";

const RecordsLearnForm = ({ record, getToday }: any) => {
  const answer = useRef<HTMLInputElement>(null);
  const { updateDocument } = useFirestore("records");

  const checkAnswerHandler = async () => {
    if (answer.current?.value === record.answer) {
      updateDocument(record.id, {
        stage: record.stage + 1,
        lastRepeat: getToday(),
      });
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
