import classes from './AddRecordCardForm.module.css';
import Card from '../UI/Card/Card';
import TextArea from '../UI/TextArea/TextArea';
import { Button } from '@mui/material';




const AddRecordCardForm = () => {
    return (
            <Card>
                <form>
                    <div className={classes["textarea-container"]}>
                        <TextArea name="Question"/>
                        <TextArea name="Answer"/>
                    </div>
                    <div className={classes.actions}>
                        <Button type="submit" className={classes.btn}>
                            Add Card
                        </Button>
                    </div>
                </form>
            </Card>
    );
};

export default AddRecordCardForm;