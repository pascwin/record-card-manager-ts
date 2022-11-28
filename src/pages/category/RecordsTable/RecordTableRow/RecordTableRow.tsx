import { TableRow, TableCell } from "@mui/material";
import MoreVert from "../MoreVert/MoreVert";

const RecordTableRow = (props: any) => {
    const {record, editRecord, deleteRecord} = props

    const openEditModal = () => {
        editRecord(record.id)
    }

    const openDeleteModal = () => {
        deleteRecord(record.id)
    }
    
    return (
        <TableRow
            hover
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell align="center">{record.question}</TableCell>
            <TableCell align="center">{record.answer}</TableCell>
            <TableCell align="center">{record.category}</TableCell>
            <TableCell align="center">{record.stage}</TableCell>
            <TableCell align="center">{record.lastRepeat}</TableCell>
            <TableCell align="center"><MoreVert edit={openEditModal} delete={openDeleteModal} /></TableCell>
        </TableRow>
    )
}

export default RecordTableRow;