import { useLocation } from "react-router-dom";
import { useRef } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";

const Category = () => {
  const question = useRef<HTMLInputElement>(null);
  const answer = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const { user } = useAuthContext();
  const { addDocument } = useFirestore("redords");

  const addRecordHandler = (event: any) => {
    event.preventDefault();
    addDocument({
        uid: user.uid,
        category: location.pathname.slice(10),
        answer: answer.current?.value,
        question: question.current?.value,
        stage: "1"
    })
  };

  return (
    <form onSubmit={addRecordHandler}>
      <p>category</p>
      <p>question:</p>
      <input ref={question} />
      <p>answer:</p>
      <input ref={answer} />
      <button>add record</button>
    </form>
  );
};

export default Category;
