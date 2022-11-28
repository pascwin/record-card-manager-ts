import { useCollection } from "../../../../hooks/useCollection";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";
import MoreVert from "../../../../components/MoreVert/MoreVert";
import "./RecordsTable.scss"

const RecordsTable = ({ category, uid }: any) => {
  const { documents } = useCollection(
    "records",
    ["uid", "==", uid],
    ["category", "==", category],
    []
  );
  return (
    <div className="tableLayout">
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
                  key={record.Id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{record.answer}</TableCell>
                  <TableCell align="center">{record.question}</TableCell>
                  <TableCell align="center">{record.category}</TableCell>
                  <TableCell align="center">{record.stage}</TableCell>
                  <TableCell align="center">{record.lastRepeat}</TableCell>
                  <TableCell align="center">
                    <MoreVert />
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
