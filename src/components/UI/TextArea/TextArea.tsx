import classes from "./Textarea.module.css"

const TextArea = (props: any) => {
    return (
        <div className={classes.control}>
        <label>{props.name}</label>
            <textarea value={props.value} rows={10} cols={40} onChange={props.onChangeTextarea}/>
        </div>      
    )
}

export default TextArea;