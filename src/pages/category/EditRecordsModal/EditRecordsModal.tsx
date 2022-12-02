import { useState } from "react";
import { useFirestore } from "../../../hooks/useFirestore";
import { Modal } from "@mui/material";

const EditRecordsModal = ({ record, open, handleClose }: any) => {
  const { updateDocument } = useFirestore("records");
  const [question, setQuestion] = useState<any>(record.question);
  const [answer, setAnswer] = useState<any>(record.answer);

  const saveRecord = () => {
    updateDocument(record.id, {
      question: question,
      answer: answer,
    });
    handleClose();
  };

  const onQuestionChange = (event: any) => {
    setQuestion(event.target.value);
  };

  const onAnswerChange = (event: any) => {
    setAnswer(event.target.value);
  };

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="recordFormContainer">
          <p>Do you want to delete this record?</p>
          {record && (
            <div>
              <div>
                <input
                  onChange={onQuestionChange}
                  value={question}
                  name="Answer"
                />
              </div>
              <div>
                <input
                  onChange={onAnswerChange}
                  value={answer}
                  name="Question"
                />
              </div>
            </div>
          )}
          <button onClick={saveRecord}>save</button>
          <button onClick={handleClose}>skip</button>
          <p></p>
        </div>
      </Modal>
    </>
  );
};

export default EditRecordsModal;
