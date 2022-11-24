import { useRef } from "react";

const RecordsLearnForm = ({ record }: any) => {
  const answer = useRef<HTMLInputElement>(null);

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
