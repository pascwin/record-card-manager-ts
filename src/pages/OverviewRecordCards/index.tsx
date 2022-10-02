import { useContext } from 'react';
import { RecordCardContext } from '../../contexts/record-card-context';
import BasicTable from '../../pages/OverviewRecordCards/Table/Table';
import Layout from '../../components/Layout/Layout';

const OverviewRecordCards = () => {
    const {recordCards, setRecordCards} = useContext(RecordCardContext);

    return (
        <Layout>
            <BasicTable cards={recordCards} setCards={setRecordCards} />
        </Layout>
    );
}

export default OverviewRecordCards;