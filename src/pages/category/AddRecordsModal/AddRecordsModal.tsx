import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Modal from "@mui/material/Modal";
import { useFirestore } from "../../../hooks/useFirestore";
import "./AddRecordsModal.scss";
import { Button, FormControlLabel, Switch } from "@mui/material";
import TextField from "@mui/material/TextField";

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

  const addRecordHandler = (event: any) => {
    event.preventDefault();
    console.log(answer.current?.value);
    console.log(location.pathname.slice(10));
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
        <p className="text-lg">add records</p>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{display: "flex", justifyContent: "center", alignItems: "center"}}
      >
        <div className="recordFormContainer">
          <form onSubmit={addRecordHandler}>
            <div className="question-answer-container">
              <div className="input-container">
                <TextField
                  id="outlined-multiline-static"
                  label="Question"
                  multiline
                  rows={4}
                  inputRef={question}
                  fullWidth={true}
                  required={true}
                  style={{backgroundColor: "white"}}
                />
              </div>
              <div className="input-container">
                <TextField
                  id="outlined-multiline-static"
                  label="Answer"
                  multiline
                  rows={4}
                  inputRef={answer}
                  fullWidth={true}
                  required={true}
                  style={{backgroundColor: "white"}}
                />
              </div>
            </div>
            <div className="tip-container">
              <TextField
                id="outlined-multiline-static"
                label="Tip (optional)"
                multiline
                rows={2}
                inputRef={tip}
                fullWidth={true}
                style={{backgroundColor: "white"}}
              />
            </div>
            <div className="button-container">
              <FormControlLabel
                control={
                  <Switch
                    checked={reverseChecked}
                    onChange={handleReverseChecked}
                    name="jason"
                  />
                }
                label="create reverse record"
              />
              <br></br>
              <Button variant="contained" type="submit">Add Record</Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddRecordsForm;
