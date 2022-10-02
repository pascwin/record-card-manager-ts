import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { Paper, TableRow } from '@mui/material';
import MoreVert from '../../../components/MoreVert/MoreVert';
  

const BasicTable = (props: any) => {
    const { items } = props

    const deleteRecordCardHandler = async(id: any) => {
        const requestBody = {
            id: id
        }
        try {
            const response = await fetch(`https://http-record-cards-default-rtdb.europe-west1.firebasedatabase.app/record-cards/${id}.json`, {
                method: "DELETE",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody),
            })
            if (!response.ok) {
                console.log(response)
                throw new Error("something went wrong");
            }
        } catch(err) {
            console.log(err)
        }
    }

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
                            key={item.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{item.question}</TableCell>
                            <TableCell>{item.answer}</TableCell>
                            <TableCell align="center">{item.category}</TableCell>
                            <TableCell align="center">{item.stage}</TableCell>
                            <TableCell align="center"><MoreVert deleteFunction={deleteRecordCardHandler} id={item.id} /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default BasicTable;
