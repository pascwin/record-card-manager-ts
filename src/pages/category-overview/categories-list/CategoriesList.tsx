import { useCollection } from "../../../hooks/useCollection";
import { NavLink } from "react-router-dom";

const CategoriesList = ({ uid }: any) => {
  const { documents } = useCollection("categories", ["uid", "==", uid], [], []);
  return (
    <div>
      <h1>Categories List</h1>
      {documents.map((document: any) => {
        return (
          <div key={document.name}>
            <p>{document.name}</p>
            <NavLink to={`/category/${document.name}`}>here</NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesList;
