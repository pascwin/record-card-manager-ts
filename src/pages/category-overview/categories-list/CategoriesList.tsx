import { useCollection } from "../../../hooks/useCollection";
import { useNavigate } from "react-router-dom";
import "./CategoriesList.scss";
// import MoreVert from "../../category/RecordsTable/MoreVert/MoreVert";

const colors = ["#8A4695", "#469595", "#ADA343"];

const CategoriesList = ({ uid }: any) => {
  const { documents } = useCollection("categories", ["uid", "==", uid], [], []);
  const navigate = useNavigate();

  return (
    <div className="category-list-container">
      {documents.map((document: any, index) => {
        return (
          <div
            key={document.name}
            className="category-container"
            style={{ backgroundColor: colors[index] }}
            onClick={() => {
              navigate(`/category/${document.name}`);
            }}
          >
            <div className="first-row">
              <p>{document.name}</p>
              {/* <MoreVert /> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesList;
