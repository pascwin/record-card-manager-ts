import { useRef, useState } from "react";
import { useFirestore } from "../../../hooks/useFirestore";
import { Button, Modal, TextField } from "@mui/material";
import "./RecordsLearnModal.scss";

const RecordsLearnModal = ({ record, getToday, learnCount }: any) => {
  const answer = useRef<HTMLInputElement>(null);
  const { updateDocument } = useFirestore("records");
  const [open, setOpen] = useState(false);
  const [showTip, setShowTip] = useState(false);

  const checkAnswerHandler = async (event: any) => {
    event.preventDefault();
    if (answer.current?.value === record.answer) {
      updateDocument(record.id, {
        stage: record.stage + 1,
        lastRepeat: getToday(),
      });
      event.target.reset();
    }
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const showTipHandler = () => {
    setShowTip((prevState: boolean) => {
      return !prevState;
    });
  };

  return (
    <>
      <div className="button-container">
        <p className="text-lg">due today: {learnCount}</p>
        <Button onClick={handleOpen} variant="contained">
          Learn category
        </Button>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="recordLearnFormContainer">
          <form onSubmit={checkAnswerHandler}>
            <p style={{ padding: "0px 10px" }}>Question:</p>
            <div className="question-answer-container">
              <div className="question-container">
                <p>{record?.question}</p>
              </div>
              <div className="answer-container">
                <TextField
                  id="outlined-multiline-static"
                  label="Answer"
                  multiline
                  rows={4}
                  inputRef={answer}
                  fullWidth={true}
                  required={true}
                  style={{ backgroundColor: "white" }}
                />
              </div>
            </div>
            {record.tip && (
              <div>
                <Button onClick={showTipHandler}>
                  {showTip ? "Hide Tip" : "Show Tip"}
                </Button>
                {showTip && <p style={{ padding: "0px 10px" }}>{record.tip}</p>}
              </div>
            )}
            <div className="button-container">
              <Button variant="contained" type="submit">
                Check Answer
              </Button>
            </div>
          </form>
          <br></br>
        </div>
      </Modal>
    </>
  );
};

export default RecordsLearnModal;
