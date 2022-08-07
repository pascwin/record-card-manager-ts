import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { Paper, TableRow } from '@mui/material';
import MoreVert from './UI/MoreVert/MoreVert';
  

const BasicTable = (props: any) => {

    const { items } = props

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell style={{fontWeight: "bold"}} >Question</TableCell>
                        <TableCell style={{fontWeight: "bold"}} >Answer</TableCell>
                        <TableCell style={{fontWeight: "bold"}} align="center">Category</TableCell>
                        <TableCell style={{fontWeight: "bold"}} align="center">Stage</TableCell>
                        <TableCell style={{fontWeight: "bold"}} align="center">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {items?.map((item: any) => (
                        <TableRow
                            key={item.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{item.question}</TableCell>
                            <TableCell>{item.answer}</TableCell>
                            <TableCell align="center">{item.category}</TableCell>
                            <TableCell align="center">{item.stage}</TableCell>
                            <TableCell align="center"><MoreVert /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default BasicTable;
