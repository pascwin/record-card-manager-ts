import { useCollection } from "../../../hooks/useCollection";

const RecordsTable = ({ category, uid }: any) => {
  const { documents } = useCollection("records", ["uid", "==", uid], ["category", "==", category], []);

  return (
    <div>
      <h3>Records for {category}</h3>
      <div>
        {documents?.map((record: any) => {
          return (
            <p key={record.answer}>
              {record.question} {record.answer}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default RecordsTable;
