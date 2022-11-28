import { useRef, useState } from "react";
import { useFirestore } from "../../../hooks/useFirestore";
import { Button, Modal } from "@mui/material";

const DeleteRecordsModal = ({ id, open, handleClose }: any) => {
  const { deleteDocument } = useFirestore("records");

  const deleteRecord = () => {
    deleteDocument(id)
    handleClose()
  }

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
          <button onClick={deleteRecord}>yes</button>
          <button onClick={handleClose}>No</button>
        </div>
      </Modal>
    </>
  );
};

export default DeleteRecordsModal;
