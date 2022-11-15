import { useCollection } from "../../../hooks/useCollection";

const CategoriesList = ({ uid }: any) => {
  const { documents } = useCollection("categories", ["uid", "==", uid], []);

  return (
    <div>
      <h1>Categories List</h1>
      {documents.map((document: any) => {
        return (
          <div>
            <p>{document.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesList;
