import React from "react";

const RecordCardContext: any = React.createContext({
    items: [],
    itemToEdit: undefined,
    allRecordCards: (items: any) => { },
//     addItem: (item: any) => {},
//     removeItem: (id: string) => {},
//     editItem: (id: string) => {},
//     updateItem: (item: any) => {},
})

export default RecordCardContext;