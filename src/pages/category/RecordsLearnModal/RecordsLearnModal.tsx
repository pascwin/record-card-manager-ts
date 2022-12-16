import { useState } from "react";
import { useFirestore } from "../../../hooks/useFirestore";
import { Button, Modal, TextField } from "@mui/material";
import "./RecordsLearnModal.scss";

const RecordsLearnModal = ({ record, getToday, learnCount }: any) => {
  const [answer, setAnswer] = useState("");
  const { updateDocument } = useFirestore("records");
  const [open, setOpen] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [responseClass, setResponseClass] = useState("response-container");
  const [responseText, setResponseText] = useState(
    "Please write the correct answer"
  );
  const [answerWrong, setAnswerWrong] = useState<boolean>(false);
  const [answerCorrect, setAnswerCorrect] = useState<boolean>(false);

  const checkAnswerHandler = async () => {
    if (answer === record.answer) {
      setResponseClass("response-container-correct");
      setResponseText("Yes! Your answer is correct :D")
      setAnswerCorrect(true);
    } else {
      setResponseClass("response-container-wrong");
      setResponseText("Your answer is wrong :(");
      setAnswerWrong(true);
    }
  };

  const nextStageHandler = () => {
    updateDocument(record.id, {
      stage: record.stage + 1,
      lastRepeat: getToday(),
    });
    resetModal();
  };

  const stayInStageHandler = () => {
    updateDocument(record.id, {
      lastRepeat: getToday(),
    });
    resetModal();
  };

  const firstStageHandler = () => {
    updateDocument(record.id, {
      stage: 1,
      lastRepeat: getToday(),
    });
    resetModal();
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setShowTip(false);
    resetModal()
  };

  const showTipHandler = () => {
    setShowTip((prevState: boolean) => {
      return !prevState;
    });
  };

  const onAnswerHandler = (event: any) => {
    setAnswer(event.target.value);
  };

  const resetModal = () => {
    setAnswerWrong(false);
    setAnswerCorrect(false);
    setResponseClass("response-container");
    setResponseText("Please write the correct answer");
    setAnswer("");
    setShowTip(false)
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
          <div className="form" onSubmit={checkAnswerHandler}>
            <div className={`${responseClass} fdasf`}>
              <p>{responseText}</p>
            </div>
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
                  value={answer}
                  onChange={onAnswerHandler}
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
            <div>
              <div className="option-container">
                {!answerCorrect && !answerWrong && (
                  <div className="button-container">
                    <Button variant="contained" onClick={checkAnswerHandler}>
                      Check Answer
                    </Button>
                  </div>
                )}
                {answerCorrect && (
                  <div>
                    <p style={{ textAlign: "center" }}>
                      Very good your answer was correct! Let's learn the next
                      record :)
                    </p>
                    <div className="button-container">
                    <Button
                      variant="contained"
                      type="submit"
                      onClick={nextStageHandler}
                    >
                      Next Record
                    </Button>
                    </div>
                  </div>
                )}
                {answerWrong && (
                  <div>
                    <p style={{ textAlign: "center", padding: "10px" }}>
                      What should we do with this record?
                    </p>
                    <div className="buttons-container">
                      {record.stage === "1" && (
                        <Button variant="contained" onClick={firstStageHandler}>
                          First Stage
                        </Button>
                      )}
                      <Button variant="contained" onClick={stayInStageHandler}>
                        Stay in Stage
                      </Button>
                      <Button variant="contained" onClick={nextStageHandler}>
                        Next Stage
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <br></br>
        </div>
      </Modal>
    </>
  );
};

export default RecordsLearnModal;
