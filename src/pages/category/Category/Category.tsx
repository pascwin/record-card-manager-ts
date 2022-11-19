import { useLocation } from "react-router-dom";
import { Fragment, useRef } from "react";
import { useAuthContext } from "../../../hooks/useAuthContext";
import { useFirestore } from "../../../hooks/useFirestore";
import RecordsTable from "../RecordsTable/RecordsTable";

const Category = () => {
  const question = useRef<HTMLInputElement>(null);
  const answer = useRef<HTMLInputElement>(null);
  const location = useLocation();
  const { user } = useAuthContext();
  const { addDocument } = useFirestore("records");

  const addRecordHandler = (event: any) => {
    event.preventDefault();
    addDocument({
      uid: user.uid,
      category: location.pathname.slice(10),
      answer: answer.current?.value,
      question: question.current?.value,
      stage: "1",
    });
  };

  return (
    <Fragment>
      <form onSubmit={addRecordHandler}>
        <p>category</p>
        <p>question:</p>
        <input ref={question} />
        <p>answer:</p>
        <input ref={answer} />
        <button>add record</button>
      </form>
      <div>
        <RecordsTable category={location.pathname.slice(10)} uid={user.uid} />
      </div>
    </Fragment>
  );
};

export default Category;
