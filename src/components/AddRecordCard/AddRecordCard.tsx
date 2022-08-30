import { useRef } from 'react';
import classes from './AddRecordCardForm.module.css';
import Card from '../UI/Card/Card';
import TextArea from '../UI/TextArea/TextArea';
import SendIcon from '@mui/icons-material/Send';
import CustomButton from '../UI/Button/Button';

const AddRecordCard = () => {
    const questionInputRef = useRef<HTMLTextAreaElement>(null)
    const answerInputRef = useRef<HTMLTextAreaElement>(null)

    const submitRecordCardHandler = (event: any) => {
        event.preventDefault()
        console.log(questionInputRef.current?.value)
        console.log(answerInputRef.current?.value)
    }

    return (
        <Card className={classes.formContainer}>
            <form>
                <div className={classes["textarea-container"]}>
                    <TextArea name="Question" inputRef={questionInputRef}/>
                    <TextArea name="Answer" inputRef={answerInputRef}/>
                </div>
                <div className={classes.actions}>
                    <CustomButton onClickFunction={submitRecordCardHandler} title="send" color="#044599" icon={<SendIcon />} variant="contained" margin='20px'/>
                </div>
            </form>
        </Card>
    );
};

export default AddRecordCard;