import { useRef } from 'react';

import classes from './AddRecordCardForm.module.css';
import Card from '../UI/Card/Card';
import TextArea from '../UI/TextArea/TextArea';
import SendIcon from '@mui/icons-material/Send';
import CustomButton from '../UI/Button/Button';
import useHttp from '../../hooks/use-http';

const AddRecordCard = () => {
    const questionInputRef = useRef<HTMLTextAreaElement>(null)
    const answerInputRef = useRef<HTMLTextAreaElement>(null)
    const { error, isLoading, sendRequest } = useHttp()

    const requestOkHandler = (data: any) => {
        if (questionInputRef.current && answerInputRef.current && data) {
            questionInputRef.current.value = ''
            answerInputRef.current.value = ''
        }
    }

    const submitRecordCardHandler = (event: any) => {
        event.preventDefault()
        const requestBody = {
            answer: questionInputRef.current?.value,
            question: answerInputRef.current?.value,
            id: Math.random(),
            category: "spanish",
            stage: "1",
        }
        sendRequest({
            url: 'https://http-record-cards-default-rtdb.europe-west1.firebasedatabase.app/record-cards.json',
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: requestBody
        }, requestOkHandler)
    }

    let content

    if (isLoading) {
        content = <p>is Loading...</p>
    }

    if (error) {
        content = <p>an error occured</p>
    }

    if (!isLoading && !error) {
        content = (
            <form>
                <div className={classes["textarea-container"]}>
                    <TextArea name="Question" inputRef={questionInputRef}/>
                    <TextArea name="Answer" inputRef={answerInputRef}/>
                </div>
                <div className={classes.actions}>
                    <CustomButton onClickFunction={submitRecordCardHandler} title="send" color="#044599" icon={<SendIcon />} variant="contained" margin='20px'/>
                </div>
            </form>
        )
    }

    return (
        <Card className={classes.formContainer}>
            {content}
        </Card>
    );
};

export default AddRecordCard;