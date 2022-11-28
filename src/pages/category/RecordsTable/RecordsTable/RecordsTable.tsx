import { useCollection } from "../../../../hooks/useCollection";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";
import MoreVert from "../MoreVert/MoreVert";
import "./RecordsTable.scss"
import DeleteRecordsModal from "../../DeleteRecordModal/DeleteRecordsModal";
import { useState } from "react";

const RecordsTable = ({ category, uid }: any) => {
  const [deleteId, setDeleteId] = useState<any>(null)
  const [openDeleteModal, setOpenDeleteModal] = useState<boolean>(false)
  const { documents } = useCollection(
    "records",
    ["uid", "==", uid],
    ["category", "==", category],
    []
  );

  const handleDeleteModal = (id: any) => {
    setDeleteId(id)
    setOpenDeleteModal(true)
  }

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false)
  }

  return (
    <div className="tableLayout">
      <DeleteRecordsModal id={deleteId} open={openDeleteModal} handleClose={handleCloseDeleteModal}/>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
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
            {documents?.map((record: any) => {
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
                    <MoreVert id={record.id} delete={handleDeleteModal}/>
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
    </div>
  );
};

export default RecordsTable;
