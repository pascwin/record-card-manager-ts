import classes from './AddRecordCardForm.module.css';
import Card from '../UI/Card/Card';
import TextArea from '../UI/TextArea/TextArea';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';




const AddRecordCard = () => {
    return (
        <Card className={classes.formContainer}>
            <form>
                <div className={classes["textarea-container"]}>
                    <TextArea name="Question" />
                    <TextArea name="Answer" />
                </div>
                <div className={classes.actions}>
                    <Button style={{backgroundColor: "magenta"}} variant="contained" startIcon={<SendIcon />}>
                        Send
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default AddRecordCard;