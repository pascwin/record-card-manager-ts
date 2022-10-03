import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { Paper, TableRow } from '@mui/material';
import MoreVert from '../../../components/MoreVert/MoreVert';
import { deleteRecordCard } from '../../../utils/firebase.utils';
  

const BasicTable = (props: any) => {
    const { cards, setCards, userId } = props

    const deleteRecordCardHandler = async(id: string) => {
        await deleteRecordCard(id, userId)
        const newRecordCards = cards.filter((cards: any) => {
            return cards.id !== id
        })
        setCards(newRecordCards)
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
                    {cards?.map((card: any) => (
                        <TableRow
                            key={card.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{card.question}</TableCell>
                            <TableCell>{card.answer}</TableCell>
                            <TableCell align="center">{card.category}</TableCell>
                            <TableCell align="center">{card.stage}</TableCell>
                            <TableCell align="center"><MoreVert deleteFunction={deleteRecordCardHandler} id={card.id} /></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
export default BasicTable;
