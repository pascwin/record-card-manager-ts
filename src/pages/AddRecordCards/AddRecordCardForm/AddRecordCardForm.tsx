import { useRef, useContext } from 'react';
import SendIcon from '@mui/icons-material/Send';

import classes from './AddRecordCardForm.module.css';
import Card from '../../../components/Card/Card';
import TextArea from '../../../components/TextArea/TextArea';
import CustomButton from '../../../components/Button/Button';

import { createRecordCard } from '../../../utils/firebase.utils';
import { RecordCardContext } from '../../../contexts/record-card-context';

const AddRecordCardForm = () => {
    const questionInputRef = useRef<HTMLTextAreaElement>(null)
    const answerInputRef = useRef<HTMLTextAreaElement>(null)
    const {setRecordCards} = useContext(RecordCardContext)

    const submitRecordCardHandler = async() => {
        const newRecordCard = {
            id: String(Math.random()),
            question: questionInputRef.current?.value,
            answer: answerInputRef.current?.value,
            category: "spanish",
            stage: "1",
        }
        createRecordCard(newRecordCard)
        setRecordCards((prevState: any) => {
            return [...prevState, newRecordCard]
        })
        if (questionInputRef.current && answerInputRef.current) {
            questionInputRef.current.value = ''
            answerInputRef.current.value = ''
        }
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

export default AddRecordCardForm;