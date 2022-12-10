import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Modal from "@mui/material/Modal";
import { useFirestore } from "../../../hooks/useFirestore";
import "./AddRecordsModal.scss";
import { FormControlLabel, Switch } from "@mui/material";

const AddRecordsForm = ({ open, setOpen, uid }: any) => {
  const question = useRef<HTMLInputElement>(null);
  const answer = useRef<HTMLInputElement>(null);
  const tip = useRef<HTMLInputElement>(null);
  const { addDocument } = useFirestore("records");
  const location = useLocation();
  const [reverseChecked, setReverseChecked] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReverseChecked = () => {
    setReverseChecked((prevState: boolean) => {
      return !prevState;
    });
  };

  console.log(reverseChecked)

  const addRecordHandler = (event: any) => {
    event.preventDefault();
    addDocument({
      uid: uid,
      category: location.pathname.slice(10),
      answer: answer.current?.value,
      question: question.current?.value,
      stage: 1,
      lastRepeat: null,
      tip: tip.current?.value,
    });
    if (reverseChecked) {
      addDocument({
        uid: uid,
        category: location.pathname.slice(10),
        answer: question.current?.value,
        question: answer.current?.value,
        stage: 1,
        lastRepeat: null,
        tip: tip.current?.value,
      });
    }
    event.target.reset();
  };

  return (
    <div>
      <div className="icon-container">
        <AddCircleIcon
          onClick={handleOpen}
          fontSize="large"
          style={{ cursor: "pointer" }}
          color="primary"
        />
        <p>add records</p>
      </div>
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
            <p>add a tip</p>
            <input ref={tip} />
            <br></br>
            <FormControlLabel
              control={
                <Switch
                  checked={reverseChecked}
                  onChange={handleReverseChecked}
                  name="jason"
                />
              }
              label="create reverse Record"
            />
            <br></br>
            <button>add record</button>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddRecordsForm;
