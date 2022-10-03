import { useContext } from "react";
import { RecordCardContext } from "../../contexts/record-card-context";
import BasicTable from "../../pages/OverviewRecordCards/Table/Table";
import Layout from "../../components/Layout/Layout";
import { UserContext } from "../../contexts/user-context";

const OverviewRecordCards = () => {
  const { recordCards, setRecordCards } = useContext(RecordCardContext);
  const { currentUser } = useContext(UserContext);

  return (
    <Layout>
      <BasicTable
        cards={recordCards}
        setCards={setRecordCards}
        userId={currentUser.uid}
      />
    </Layout>
  );
};

export default OverviewRecordCards;
