import AddCircleIcon from "@mui/icons-material/AddCircle";
import Modal from "@mui/material/Modal";
import { Button, TextField } from "@mui/material";
import "./AddCategoryModal.scss";
import { useRef } from "react";
import { useFirestore } from "../../../hooks/useFirestore";

const AddCategoryModal = ({ open, setOpen, uid }: any) => {
  const category = useRef<HTMLInputElement>(null);
  const { addDocument } = useFirestore("categories");

  const addCategoryHandler = (event: any) => {
    event.preventDefault();
    addDocument({
      name: category.current?.value,
      uid: uid,
    });
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="category-icon-container">
        <AddCircleIcon
          onClick={handleOpen}
          fontSize="large"
          style={{ cursor: "pointer" }}
          color="primary"
        />
        <p className="text-xlg">new</p>
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
        <div className="category-form-container">
          <form onSubmit={addCategoryHandler}>
            <div className="input-container">
              <TextField
                label="category name"
                variant="outlined"
                fullWidth
                inputRef={category}
                required
              />
            </div>
            <div className="category-button-container">
              <Button variant="contained" type="submit">
                Add Category
              </Button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddCategoryModal;
