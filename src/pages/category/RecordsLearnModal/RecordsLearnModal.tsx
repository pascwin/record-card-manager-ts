import { useRef, useState } from "react";
import { useFirestore } from "../../../hooks/useFirestore";
import { Button, Modal } from "@mui/material";

const RecordsLearnModal = ({ record, getToday }: any) => {
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
      event.target.reset()
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
      <Button onClick={handleOpen}>Learn category</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="recordFormContainer">
          <form onSubmit={checkAnswerHandler}>
            <p>question: {record?.question}</p>
            <input ref={answer} />
            <button>Check Answer</button>
          </form>
          <br></br>
          {record.tip && (
            <div>
              <Button onClick={showTipHandler}>Show Tip</Button>
              {showTip && <p>{record.tip}</p>}
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default RecordsLearnModal;
