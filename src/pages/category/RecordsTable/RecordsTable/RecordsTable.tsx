import { useCollection } from "../../../../hooks/useCollection";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper, TablePagination } from "@mui/material";
import MoreVert from "../MoreVert/MoreVert";
import "./RecordsTable.scss";
import DeleteRecordsModal from "../../DeleteRecordModal/DeleteRecordsModal";
import EditRecordsModal from "../../EditRecordsModal/EditRecordsModal";
import { useEffect, useState } from "react";
import { useFirestore } from "../../../../hooks/useFirestore";

const RecordsTable = ({ category, uid }: any) => {
  const [deleteId, setDeleteId] = useState<any>(null);
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false);
  const [editId, setEditId] = useState<any>(null);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const [recordToEdit, setRecordtoEdit] = useState<any>();
  const { getOneDocument } = useFirestore("records");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const { documents } = useCollection(
    "records",
    ["uid", "==", uid],
    ["category", "==", category],
    []
  );

  const handleDeleteModal = (id: any) => {
    setDeleteId(id);
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleEditModal = (id: any) => {
    setEditId(id);
    setOpenEditModal(true);
  };

  const handleCloseEditModal = () => {
    setOpenEditModal(false);
    setRecordtoEdit(null);
    setEditId(null);
  };

  useEffect(() => {
    const getRecordToEdit2 = async (id: any) => {
      const record = await getOneDocument(id);
      setRecordtoEdit(record);
    };
    getRecordToEdit2(editId);
  }, [editId, getOneDocument]);

  return (
    <div className="tableLayout">
      <DeleteRecordsModal
        id={deleteId}
        open={openDeleteModal}
        handleClose={handleCloseDeleteModal}
      />
      {recordToEdit && (
        <EditRecordsModal
          record={recordToEdit}
          seRecord={setRecordtoEdit}
          open={openEditModal}
          handleClose={handleCloseEditModal}
        />
      )}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" padding="none">
          <TableHead>
            <TableRow style={{ padding: "10px" }}>
              <TableCell style={{ fontWeight: "bold" }} align="center">
                Question
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="center">
                Answer
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="center">
                Category
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="center">
                Stage
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="center">
                Last time repeated
              </TableCell>
              <TableCell style={{ fontWeight: "bold" }} align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {documents &&
              documents
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((record: any) => {
                  return (
                    <TableRow
                      hover
                      key={record.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">{record.question}</TableCell>
                      <TableCell align="center">{record.answer}</TableCell>
                      <TableCell align="center">{record.category}</TableCell>
                      <TableCell align="center">{record.stage}</TableCell>
                      <TableCell align="center">{record.lastRepeat}</TableCell>
                      <TableCell align="center">
                        <MoreVert
                          id={record.id}
                          delete={handleDeleteModal}
                          edit={handleEditModal}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center"></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={documents.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </div>
  );
};

export default RecordsTable;
