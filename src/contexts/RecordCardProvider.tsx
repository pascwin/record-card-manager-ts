import { useReducer } from "react"
import RecordCardContext from "./record-card-context"

type RecordCardState = {
    items: RecordCard[] | undefined,
    itemToEdit: RecordCard | undefined,
}

type RecordCard = {
    id: string,
    category: string,
    question: string,
    answer: string,
}

type RecordCardAction = {
    items: any | undefined,
    type: string,
}

const initialRecordCardState = {
    items: undefined,
    itemToEdit: {
        id: "",
        category: "",
        question: "",
        answer: "",

    },
}

const reducer = (state: RecordCardState, action: RecordCardAction) => {
    switch (action.type) {
        case "ALLRECORDS":
            const allItems = action.items
            return {
                ...state,
                items: allItems
            }
        default:
            return state;
    }
}

const RecordCardProvider = (props: any) => {
    const [recordCardState, dispatch] = useReducer(reducer, initialRecordCardState)

    const allRecordCards = (items: any) => {
        dispatch({ type: "ALLRECORDS", items: items })
    }

    const recordCardContext = {
        items: recordCardState,
        itemToEdit: recordCardState.itemToEdit,
        allRecordCards: allRecordCards,
    }

    return (
        <RecordCardContext.Provider value={recordCardContext}>
            {props.children}
        </RecordCardContext.Provider>
    )

}

export default RecordCardProvider