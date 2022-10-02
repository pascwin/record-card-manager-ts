import { useContext } from 'react';
import { RecordCardContext } from '../../contexts/record-card-context';
import BasicTable from '../../pages/OverviewRecordCards/Table/Table';
import Layout from '../../components/Layout/Layout';

const OverviewRecordCards = () => {
    const {recordCards} = useContext(RecordCardContext);

    return (
        <Layout>
            <BasicTable items={recordCards} />
        </Layout>
    );
}

export default OverviewRecordCards;