import classes from './AddRecordCardForm.module.css';
import Card from '../UI/Card/Card';
import TextArea from '../UI/TextArea/TextArea';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import CustomButton from '../UI/Button/Button';




const AddRecordCard = () => {
    return (
        <Card className={classes.formContainer}>
            <form>
                <div className={classes["textarea-container"]}>
                    <TextArea name="Question" />
                    <TextArea name="Answer" />
                </div>
                <div className={classes.actions}>
                    <CustomButton title="send" color="#044599" icon={<SendIcon />} variant="contained" margin='20px'/>
                </div>
            </form>
        </Card>
    );
};

export default AddRecordCard;