import { useRef } from "react";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useFirestore } from "../../../hooks/useFirestore";
import "./AddRecordsForm.scss"

const AddRecordsForm = ({ open, setOpen, uid }: any) => {
  const question = useRef<HTMLInputElement>(null);
  const answer = useRef<HTMLInputElement>(null);
  const { addDocument } = useFirestore("records");
  const location = useLocation()

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const addRecordHandler = (event: any) => {
    event.preventDefault();
    addDocument({
      uid: uid,
      category: location.pathname.slice(10),
      answer: answer.current?.value,
      question: question.current?.value,
      stage: 1,
      lastRepeat: null,
    });
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="recordFormContainer">
          <form onSubmit={addRecordHandler}>
            <p>question:</p>
            <input ref={question} />
            <p>answer:</p>
            <input ref={answer} />
            <br></br>
            <button>add record</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddRecordsForm;
