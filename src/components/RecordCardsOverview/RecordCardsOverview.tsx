import { Fragment, useCallback, useEffect, useState } from 'react';
import useHttp from '../../hooks/use-http';

import BasicTable from '../Table';

const RecordCardsOverview = () => {
    const [recordCards, setRecordCards] = useState<any>()

    const { error, isLoading, sendRequest } = useHttp()

    const transformRecordCards = useCallback((data: any) => {
        const transformedRecordCards = [];
        for (const cardKey in data) {
            transformedRecordCards.push({
                id: cardKey,
                category: data[cardKey].category,
                stage: data[cardKey].stage,
                question: data[cardKey].question,
                answer: data[cardKey].answer,
            })
        }
        setRecordCards(transformedRecordCards)
    }, [])


    useEffect(() => {
        sendRequest({
            url: 'https://http-record-cards-default-rtdb.europe-west1.firebasedatabase.app/record-cards.json',
            method: undefined,
            headers: {},
            body: undefined
        }, transformRecordCards)
    }, [transformRecordCards, sendRequest])

    let content;

    if (isLoading) {
        content = <p>is Loading...</p>
    }

    if (error) {
        content = <p>an error occured</p>
    }

    if (!error && !isLoading) {
        content = <BasicTable items={recordCards} />
    }

    return (
        <Fragment>
            {content}
        </Fragment>
    );
}

export default RecordCardsOverview;