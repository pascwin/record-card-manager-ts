import { useState } from "react";
import { useFirestore } from "../../../hooks/useFirestore";
import { Button, Modal, TextField } from "@mui/material";
import "./EditRecordsModal.scss";

const EditRecordsModal = ({ record, open, handleClose }: any) => {
  const { updateDocument } = useFirestore("records");
  const [question, setQuestion] = useState<any>(record.question);
  const [answer, setAnswer] = useState<any>(record.answer);
  const [tip, setTip] = useState<any>(record.tip);

  const saveRecord = () => {
    updateDocument(record.id, {
      question: question,
      answer: answer,
      tip: tip,
    });
    handleClose();
  };

  const onQuestionChange = (event: any) => {
    setQuestion(event.target.value);
  };

  const onAnswerChange = (event: any) => {
    setAnswer(event.target.value);
  };

  const onTipChange = (event: any) => {
    setTip(event.target.value);
  };

  return (
    <>
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
        <div className="recordFormContainer">
          {record && (
            <div className="edit-container">
              <div className="question-answer-container">
                <div className="input-container">
                  <TextField
                    id="outlined-multiline-static"
                    label="Question"
                    multiline
                    rows={4}
                    value={question}
                    fullWidth={true}
                    required={true}
                    style={{ backgroundColor: "white" }}
                    onChange={onQuestionChange}
                  />
                </div>
                <div className="input-container">
                  <TextField
                    id="outlined-multiline-static"
                    label="Answer"
                    multiline
                    rows={4}
                    value={answer}
                    fullWidth={true}
                    required={true}
                    style={{ backgroundColor: "white" }}
                    onChange={onAnswerChange}
                  />
                </div>
              </div>
              <div className="tip-container">
                <TextField
                  id="outlined-multiline-static"
                  label="Tip (optional)"
                  multiline
                  rows={2}
                  value={tip}
                  fullWidth={true}
                  style={{ backgroundColor: "white" }}
                  onChange={onTipChange}
                />
              </div>
              <div className="button-container">
                <Button
                  variant="contained"
                  type="submit"
                  color="error"
                  onClick={handleClose}
                >
                  Skip
                </Button>
                <br></br>
                <Button variant="contained" type="submit" onClick={saveRecord} style={{marginLeft: "5px"}}>
                  Save
                </Button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default EditRecordsModal;
