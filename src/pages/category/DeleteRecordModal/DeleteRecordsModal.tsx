import { useFirestore } from "../../../hooks/useFirestore";
import { Button, Modal } from "@mui/material";
import "./DeleteRecordModal.scss";

const DeleteRecordsModal = ({ id, open, handleClose }: any) => {
  const { deleteDocument } = useFirestore("records");

  const deleteRecord = () => {
    deleteDocument(id);
    handleClose();
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
        <p>Do you want to delete this record?</p>
          <div className="button-container">
            <Button
              variant="contained"
              type="submit"
              color="error"
              onClick={deleteRecord}
            >
              Yes
            </Button>
            <br></br>
            <Button
              variant="contained"
              type="submit"
              onClick={handleClose}
              style={{ marginLeft: "5px" }}
            >
              No
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default DeleteRecordsModal;
